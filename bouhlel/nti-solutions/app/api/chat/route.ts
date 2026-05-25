import { NextRequest } from "next/server";
import { streamFallbackResponse } from "@/lib/chatbot-fallback";

// Lazy-initialise Anthropic only when API key is present
async function tryAnthropicStream(
  messages: ChatMessage[],
  lang: Lang,
  systemPrompt: string
): Promise<ReadableStream<Uint8Array> | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key || key === "your_anthropic_api_key_here") return null;

  try {
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey: key });
    const encoder = new TextEncoder();

    return new ReadableStream({
      async start(controller) {
        try {
          const stream = client.messages.stream({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 768,
            system: systemPrompt,
            messages: messages.map((m) => ({ role: m.role, content: m.content })),
          });
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (err) {
          // Fall through — surface nothing; caller will switch to fallback
          console.error("[chat/claude]", err);
        } finally {
          controller.close();
        }
      },
    });
  } catch {
    return null;
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type Lang = "fr" | "en" | "ar";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ─── Rate limiter ────────────────────────────────────────────────────────────

const rateLimiter = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimiter.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 30) return false;
  entry.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimiter) {
    if (now > entry.resetAt) rateLimiter.delete(ip);
  }
}, 300_000);

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Trop de messages. Veuillez patienter une minute." },
      { status: 429 }
    );
  }

  let body: { messages: ChatMessage[]; lang?: Lang };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const { messages, lang = "fr" } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Messages manquants." }, { status: 400 });
  }

  const trimmed = messages.slice(-12);

  for (const m of trimmed) {
    if (!["user", "assistant"].includes(m.role) || typeof m.content !== "string") {
      return Response.json({ error: "Format de message invalide." }, { status: 400 });
    }
    if (m.content.length > 2000) {
      return Response.json({ error: "Message trop long (max 2000 caractères)." }, { status: 400 });
    }
  }

  const encoder = new TextEncoder();
  const headers = {
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store",
  };

  // ── Try Claude first ──────────────────────────────────────────────────────
  if (process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY !== "your_anthropic_api_key_here") {
    const { buildSystemPrompt } = await import("@/lib/chatbot-knowledge");
    const systemPrompt = buildSystemPrompt(lang);
    const claudeStream = await tryAnthropicStream(trimmed, lang, systemPrompt);
    if (claudeStream) {
      return new Response(claudeStream, { headers });
    }
  }

  // ── Fallback: smart keyword engine (no API key needed) ────────────────────
  const fallbackStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of streamFallbackResponse(trimmed, lang)) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });

  return new Response(fallbackStream, { headers });
}

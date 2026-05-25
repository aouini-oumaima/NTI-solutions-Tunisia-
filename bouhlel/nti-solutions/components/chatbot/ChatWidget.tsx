"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Phone,
  FileText,
  MessageSquare,
  ChevronDown,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import type { ChatMessage } from "@/lib/types";

type Lang = "fr" | "en" | "ar";

const LANG_LABELS: Record<Lang, string> = { fr: "FR", en: "EN", ar: "ع" };

const GREETINGS: Record<Lang, string> = {
  fr: "Bonjour ! Je suis l'assistant IA de **NTI Solutions**.\n\nJe peux vous aider sur nos produits, services, devis et informations de contact. Comment puis-je vous aider ?",
  en: "Hello! I'm the **NTI Solutions** AI assistant.\n\nI can help with products, services, quotes, and contact info. How can I help you?",
  ar: "مرحباً! أنا المساعد الذكي لـ **NTI Solutions**.\n\nيمكنني مساعدتك في المنتجات والخدمات وطلبات الأسعار ومعلومات الاتصال. كيف يمكنني مساعدتك؟",
};

const QUICK_PROMPTS: Record<Lang, { label: string; text: string }[]> = {
  fr: [
    { label: "📷 Vidéosurveillance", text: "Quelles sont vos solutions de vidéosurveillance ?" },
    { label: "🔥 Détection incendie", text: "Expliquez-moi vos systèmes de détection incendie." },
    { label: "🚪 Contrôle d'accès", text: "Quels systèmes de contrôle d'accès proposez-vous ?" },
    { label: "💰 Demander un devis", text: "Je souhaite obtenir un devis pour mon projet." },
  ],
  en: [
    { label: "📷 Video surveillance", text: "What video surveillance solutions do you offer?" },
    { label: "🔥 Fire detection", text: "Tell me about your fire detection systems." },
    { label: "🚪 Access control", text: "What access control systems do you provide?" },
    { label: "💰 Request a quote", text: "I'd like to get a quote for my project." },
  ],
  ar: [
    { label: "📷 مراقبة بالفيديو", text: "ما هي حلول المراقبة بالفيديو لديكم؟" },
    { label: "🔥 الكشف عن الحرائق", text: "أخبرني عن أنظمة الكشف عن الحرائق." },
    { label: "🚪 التحكم في الوصول", text: "ما هي أنظمة التحكم في الوصول المتاحة؟" },
    { label: "💰 طلب عرض سعر", text: "أريد الحصول على عرض سعر لمشروعي." },
  ],
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code class="bg-black/10 px-1 rounded text-xs">$1</code>')
    .replace(
      /(\/produits\/[\w-]+)/g,
      '<a href="$1" class="underline underline-offset-2 opacity-80 hover:opacity-100" target="_self">$1</a>'
    )
    .replace(/\n/g, "<br />");
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#D4820A]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg, isLast }: { msg: ChatMessage & { streaming?: boolean }; isLast: boolean }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[#0C1F3D] flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
          <Sparkles size={12} className="text-[#D4820A]" />
        </div>
      )}
      <div
        className={`max-w-[82%] text-sm leading-relaxed px-4 py-2.5 ${
          isUser
            ? "bg-[#D4820A] text-white rounded-2xl rounded-tr-sm"
            : "bg-white border border-[#E8EDF3] text-[#0C1F3D] rounded-2xl rounded-tl-sm shadow-sm"
        }`}
      >
        {isUser ? (
          <span>{msg.content}</span>
        ) : (
          <span
            dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
          />
        )}
        {msg.streaming && isLast && (
          <span className="inline-block w-0.5 h-3.5 bg-[#D4820A] ml-0.5 animate-pulse align-middle" />
        )}
      </div>
    </motion.div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");
  const [messages, setMessages] = useState<(ChatMessage & { streaming?: boolean })[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Init greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: GREETINGS[lang] }]);
    }
  }, [open, lang, messages.length]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Notify unread when closed
  useEffect(() => {
    if (!open && messages.length > 0 && messages[messages.length - 1].role === "assistant") {
      setHasNew(true);
    }
  }, [messages, open]);

  const handleOpen = () => {
    setOpen(true);
    setHasNew(false);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const resetConversation = () => {
    abortRef.current?.abort();
    setMessages([{ role: "assistant", content: GREETINGS[lang] }]);
    setInput("");
    setError(null);
  };

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setError(null);
      setInput("");
      const userMsg: ChatMessage = { role: "user", content: trimmed };
      const nextMessages = [...messages, userMsg];
      setMessages(nextMessages);
      setLoading(true);

      // Placeholder streaming message
      const assistantIdx = nextMessages.length;
      setMessages((prev) => [...prev, { role: "assistant", content: "", streaming: true }]);

      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        // Static build: use the client-side fallback engine directly (no server needed).
        const { streamFallbackResponse } = await import("@/lib/chatbot-fallback");
        let accumulated = "";

        for await (const chunk of streamFallbackResponse(
          nextMessages.map(({ role, content }) => ({ role, content })),
          lang
        )) {
          if (ctrl.signal.aborted) break;
          accumulated += chunk;
          const snapshot = accumulated;
          setMessages((prev) => {
            const updated = [...prev];
            updated[assistantIdx] = { role: "assistant", content: snapshot, streaming: true };
            return updated;
          });
        }

        setMessages((prev) => {
          const updated = [...prev];
          updated[assistantIdx] = { role: "assistant", content: accumulated, streaming: false };
          return updated;
        });
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        const msg = err instanceof Error ? err.message : "Une erreur est survenue.";
        setError(msg);
        setMessages((prev) => prev.slice(0, assistantIdx));
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [loading, messages, lang]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const switchLang = (l: Lang) => {
    setLang(l);
    setShowLangMenu(false);
    resetConversation();
  };

  return (
    <>
      {/* Floating trigger button — bottom-left */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            className="fixed bottom-8 left-6 z-40 md:bottom-10 md:left-10"
          >
            <button
              onClick={handleOpen}
              className="relative w-14 h-14 bg-[#0C1F3D] text-white flex items-center justify-center shadow-2xl hover:bg-[#162E52] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4820A]"
              aria-label="Ouvrir l'assistant IA"
            >
              <Sparkles size={22} />
              {hasNew && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4820A] rounded-full border-2 border-white" />
              )}
            </button>
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 bg-[#0C1F3D]/20 -z-10"
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Label tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#0C1F3D] text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap pointer-events-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Assistant IA
              <span className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-[#0C1F3D]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-6 left-4 right-4 z-50 md:bottom-8 md:left-10 md:right-auto md:w-[400px]"
            style={{ maxHeight: "calc(100dvh - 80px)" }}
          >
            <div className="flex flex-col bg-white shadow-2xl border border-[#DDE3EC] overflow-hidden" style={{ maxHeight: "calc(100dvh - 80px)", borderRadius: "2px" }}>

              {/* ── Header ── */}
              <div className="bg-[#0C1F3D] px-4 py-3.5 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#D4820A] flex items-center justify-center flex-shrink-0">
                    <Sparkles size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none" style={{ fontFamily: "var(--font-display)" }}>
                      Assistant NTI
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-white/45 text-[10px] tracking-wide">En ligne · IA Claude</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Lang switcher */}
                  <div className="relative">
                    <button
                      onClick={() => setShowLangMenu((v) => !v)}
                      className="flex items-center gap-1 text-white/50 hover:text-white text-xs px-2 py-1 border border-white/10 hover:border-white/25 transition-colors"
                    >
                      {LANG_LABELS[lang]}
                      <ChevronDown size={10} className={`transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {showLangMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute right-0 top-full mt-1 bg-[#0C1F3D] border border-white/10 z-10 min-w-[80px]"
                        >
                          {(["fr", "en", "ar"] as Lang[]).map((l) => (
                            <button
                              key={l}
                              onClick={() => switchLang(l)}
                              className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                                lang === l ? "text-[#D4820A] bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {l === "fr" ? "Français" : l === "en" ? "English" : "العربية"}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={resetConversation}
                    className="text-white/40 hover:text-white/80 transition-colors p-1"
                    title="Réinitialiser"
                  >
                    <RotateCcw size={13} />
                  </button>

                  {/* Close */}
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white/40 hover:text-white/80 transition-colors p-1"
                    aria-label="Fermer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* ── Messages ── */}
              <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 bg-[#F8F9FB] min-h-0">
                {messages.map((msg, i) => (
                  <MessageBubble key={i} msg={msg} isLast={i === messages.length - 1} />
                ))}

                {/* Loading dots (before streaming starts) */}
                {loading && messages[messages.length - 1]?.content === "" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start mb-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#0C1F3D] flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                      <Sparkles size={12} className="text-[#D4820A]" />
                    </div>
                    <div className="bg-white border border-[#E8EDF3] rounded-2xl rounded-tl-sm shadow-sm">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}

                {/* Error banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 px-3 py-2 bg-red-50 border border-red-200 text-red-700 text-xs rounded"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Quick prompts — shown only at start */}
                {messages.length <= 1 && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 mb-2 grid grid-cols-2 gap-2"
                  >
                    {QUICK_PROMPTS[lang].map((q) => (
                      <button
                        key={q.text}
                        onClick={() => sendMessage(q.text)}
                        className="text-left text-[11px] text-[#526272] bg-white border border-[#DDE3EC] hover:border-[#D4820A] hover:text-[#D4820A] px-2.5 py-2 leading-snug transition-colors duration-150"
                      >
                        {q.label}
                      </button>
                    ))}
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ── Quick actions ── */}
              <div className="flex items-center gap-0 border-t border-[#EDF0F5] px-3 py-2 bg-white flex-shrink-0">
                <a
                  href="https://wa.me/21629600424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-[#526272] hover:text-[#25D366] transition-colors px-2 py-1.5 hover:bg-[#F8F9FB]"
                >
                  <Phone size={11} />
                  WhatsApp
                </a>
                <div className="w-px h-4 bg-[#E8EDF3]" />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 text-[11px] text-[#526272] hover:text-[#D4820A] transition-colors px-2 py-1.5 hover:bg-[#F8F9FB]"
                >
                  <FileText size={11} />
                  Devis
                </Link>
                <div className="w-px h-4 bg-[#E8EDF3]" />
                <Link
                  href="/produits"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 text-[11px] text-[#526272] hover:text-[#D4820A] transition-colors px-2 py-1.5 hover:bg-[#F8F9FB]"
                >
                  <ExternalLink size={11} />
                  Catalogue
                </Link>
                <div className="w-px h-4 bg-[#E8EDF3]" />
                <button
                  onClick={() => sendMessage(lang === "fr" ? "Comment vous contacter ?" : lang === "en" ? "How can I contact you?" : "كيف يمكنني التواصل معكم؟")}
                  className="flex items-center gap-1.5 text-[11px] text-[#526272] hover:text-[#D4820A] transition-colors px-2 py-1.5 hover:bg-[#F8F9FB]"
                >
                  <MessageSquare size={11} />
                  Contact
                </button>
              </div>

              {/* ── Input ── */}
              <div className="border-t border-[#EDF0F5] bg-white px-3 pb-3 pt-2 flex-shrink-0">
                <div className="flex items-end gap-2 bg-[#F8F9FB] border border-[#DDE3EC] px-3 py-2 focus-within:border-[#D4820A] transition-colors">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      lang === "fr"
                        ? "Posez votre question…"
                        : lang === "en"
                        ? "Ask a question…"
                        : "اطرح سؤالك…"
                    }
                    disabled={loading}
                    rows={1}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                    className="flex-1 bg-transparent resize-none text-sm text-[#0C1F3D] placeholder-[#9AAAB8] outline-none leading-relaxed disabled:opacity-50"
                    style={{ minHeight: "24px", maxHeight: "120px" }}
                    maxLength={2000}
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={loading || !input.trim()}
                    className="flex-shrink-0 w-8 h-8 bg-[#D4820A] text-white flex items-center justify-center hover:bg-[#B56C08] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    aria-label="Envoyer"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles size={13} />
                      </motion.div>
                    ) : (
                      <Send size={13} />
                    )}
                  </button>
                </div>
                <p className="text-[9px] text-[#9AAAB8] mt-1.5 text-center">
                  Réponses basées sur le contenu NTI Solutions · IA Claude
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

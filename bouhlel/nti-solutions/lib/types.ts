// Shared types used across chat components and fallback engine

export type Lang = "fr" | "en" | "ar";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

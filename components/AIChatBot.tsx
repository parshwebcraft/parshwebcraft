"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, Cpu, Send, Sparkles, X, ChevronDown } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────
type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  time: string;
};

// ── Helpers ───────────────────────────────────────────────────
function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `chat_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getTimeLabel() {
  return new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

// ── Markdown-lite renderer ────────────────────────────────────
// Renders **bold**, bullet points, and line breaks safely
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    // Bullet point
    if (trimmed.startsWith("• ") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.slice(2);
      elements.push(
        <div key={i} className="flex gap-1.5 mt-0.5">
          <span className="text-[#f3d07a] mt-0.5 shrink-0">•</span>
          <span>{renderInline(content)}</span>
        </div>
      );
    }
    // Empty line = spacing
    else if (trimmed === "") {
      elements.push(<div key={i} className="h-1.5" />);
    }
    // Regular line
    else {
      elements.push(<div key={i}>{renderInline(trimmed)}</div>);
    }
  });

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Handle **bold**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    }
    // Handle emoji lines with colons e.g. "• Name: value" — highlight the key
    const colonIdx = part.indexOf(": ");
    if (colonIdx > 0 && colonIdx < 30 && i === 0) {
      return (
        <span key={i}>
          <span className="text-slate-300">{part.slice(0, colonIdx + 2)}</span>
          {part.slice(colonIdx + 2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ── Typing dots animation component ──────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl bg-white/[0.08] w-fit">
      <span className="h-2 w-2 rounded-full bg-[#f3d07a] animate-bounce [animation-delay:0ms]" />
      <span className="h-2 w-2 rounded-full bg-[#f3d07a] animate-bounce [animation-delay:150ms]" />
      <span className="h-2 w-2 rounded-full bg-[#f3d07a] animate-bounce [animation-delay:300ms]" />
    </div>
  );
}

// ── Typewriter hook — reveals text word by word ───────────────
function useTypewriter(text: string, isLatest: boolean, speed = 18) {
  const [displayed, setDisplayed] = useState(isLatest ? "" : text);
  const [done, setDone] = useState(!isLatest);

  useEffect(() => {
    if (!isLatest || done) return;
    if (displayed === text) { setDone(true); return; }

    const words = text.split(" ");
    let wordIndex = 0;
    let current = "";

    const timer = setInterval(() => {
      if (wordIndex >= words.length) {
        setDone(true);
        clearInterval(timer);
        return;
      }
      current += (wordIndex > 0 ? " " : "") + words[wordIndex];
      setDisplayed(current);
      wordIndex++;
    }, speed);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isLatest]);

  return displayed;
}

// ── Message bubble component ──────────────────────────────────
function MessageBubble({
  message,
  isLatest,
}: {
  message: ChatMessage;
  isLatest: boolean;
}) {
  const displayed = useTypewriter(
    message.content,
    isLatest && message.role === "assistant",
    16
  );

  const textToRender = message.role === "assistant" ? displayed : message.content;

  return (
    <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          message.role === "user"
            ? "bg-[#f3d07a] text-black rounded-br-sm"
            : "bg-white/[0.09] text-slate-100 rounded-bl-sm border border-white/5"
        }`}
      >
        {message.role === "assistant" ? (
          <div className="space-y-0.5">{renderMarkdown(textToRender)}</div>
        ) : (
          <p className="whitespace-pre-wrap">{textToRender}</p>
        )}
        <p
          className={`mt-2 text-[10px] ${
            message.role === "user" ? "text-black/50" : "text-slate-500"
          }`}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}

// ── Quick prompt chips — change based on conversation state ───
const INITIAL_PROMPTS = [
  "Website pricing batao",
  "Mera business: Restaurant",
  "Portfolio dikhao",
  "Discount milega?",
  "SaaS development",
  "Digital marketing",
];

const FOLLOWUP_PROMPTS = [
  "Aur details batao",
  "Contact kaise karein?",
  "Kitne din lagenge?",
  "EMI option hai?",
  "WhatsApp pe baat karein",
];

// ── Main Chatbot Component ────────────────────────────────────
export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [unread, setUnread] = useState(false);
  const [hasProactiveShown, setHasProactiveShown] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Namaste! 🙏 Main ParshWebCraft AI assistant hoon.\n\nAap apna **business type** batao — jewellery showroom, restaurant, clinic, coaching, ecommerce, ya kuch aur — main **website plan aur pricing** suggest karunga.",
      time: getTimeLabel(),
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // ── Session init ──
  useEffect(() => {
    const id = createSessionId();
    window.localStorage.setItem("pwc_chat_session_id", id);
    setSessionId(id);
  }, []);

  // ── Auto-scroll ──
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // ── Focus input on open ──
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setUnread(false);
    }
  }, [open]);

  // ── Proactive message: open after 40s if user hasn't chatted ──
  useEffect(() => {
    if (hasProactiveShown) return;
    const timer = setTimeout(() => {
      if (!open && messages.length <= 1) {
        setUnread(true);
        setHasProactiveShown(true);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "👋 Koi sawal hai? Main yahan hoon — website pricing, portfolio, ya apne business ke liye plan — sab kuch pucho!",
            time: getTimeLabel(),
          },
        ]);
      }
    }, 40000);
    return () => clearTimeout(timer);
  }, [open, messages.length, hasProactiveShown]);

  // ── Auto-open after 60% scroll ──
  useEffect(() => {
    let triggered = false;
    function onScroll() {
      if (triggered || open) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      if (scrolled / total > 0.6) {
        triggered = true;
        setUnread(true);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const quickPrompts = useMemo(
    () => (messages.length > 2 ? FOLLOWUP_PROMPTS : INITIAL_PROMPTS),
    [messages.length]
  );

  // ── Send message ──
  const sendMessage = useCallback(
    async (text = input) => {
      const trimmed = text.trim();
      if (!trimmed || sending || !sessionId) return;

      const userMsg: ChatMessage = { role: "user", content: trimmed, time: getTimeLabel() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setSending(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            message: trimmed,
            history: messages.slice(-10),
            meta: {
              visitorId: window.localStorage.getItem("pwc_visitor_id"),
              pagePath: window.location.pathname,
              referrer: document.referrer,
              userAgent: navigator.userAgent,
            },
          }),
        });

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data?.reply ??
              "Kuch issue aa gaya. Please dobara try karein ya WhatsApp karein: +91-9521347419",
            time: getTimeLabel(),
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Network error. Please try again, ya seedha WhatsApp karein: +91-9521347419 😊",
            time: getTimeLabel(),
          },
        ]);
      } finally {
        setSending(false);
      }
    },
    [input, messages, sending, sessionId]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <section
          className="fixed bottom-24 right-4 z-[60] flex h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[460px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#06060a]/96 text-white shadow-[0_8px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl md:right-6"
          aria-label="AI Chat Assistant"
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.03] px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#f3d07a]/30 shadow-[0_0_12px_rgba(243,208,122,0.2)]">
                <Image src="/images/logo-main.png" alt="ParshWebCraft" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">ParshWebCraft AI</h2>
                <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Powered by Gemini · Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/919521347419"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-green-400 transition hover:bg-green-400/10"
              >
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            {messages.map((msg, i) => (
              <MessageBubble key={`${msg.time}-${i}`} message={msg} isLatest={i === messages.length - 1} />
            ))}

            {/* Typing indicator */}
            {sending && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
          </div>

          {/* Quick prompts + input */}
          <div className="border-t border-white/[0.08] bg-white/[0.02] px-4 pb-4 pt-3">
            {/* Quick prompt chips */}
            <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={sending}
                  className="shrink-0 rounded-full border border-[#f3d07a]/25 bg-[#f3d07a]/5 px-3 py-1.5 text-[11px] text-[#f3d07a] transition hover:border-[#f3d07a]/50 hover:bg-[#f3d07a]/10 disabled:opacity-40"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Text input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Kuch bhi pucho..."
                maxLength={1000}
                disabled={sending}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#f3d07a]/50 focus:bg-white/[0.07] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3d07a] text-black transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-600">
              <span>AI answers may vary · Always verify with team</span>
              <Link href="/contact" className="text-[#f3d07a]/70 hover:text-[#f3d07a] transition">
                Contact →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Floating button ── */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setUnread(false); }}
        className="group fixed bottom-5 right-5 z-[61] inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#f3d07a]/40 bg-[#06060a] text-[#f3d07a] shadow-[0_0_30px_rgba(243,208,122,0.28)] transition hover:-translate-y-1 hover:shadow-[0_0_44px_rgba(243,208,122,0.44)]"
        aria-label={open ? "Close AI chat" : "Open AI chat"}
      >
        {/* Glow background */}
        <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_20%,rgba(243,208,122,0.28),transparent_50%)]" />

        {/* Unread badge */}
        {unread && !open && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-lg">
            1
          </span>
        )}

        {/* Gemini/Sparkles badge */}
        <span className="absolute -right-1 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f3d07a] text-black shadow-md">
          <Sparkles size={12} aria-hidden />
        </span>

        {open ? (
          <ChevronDown className="relative z-10" size={24} />
        ) : (
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#f3d07a]/30 bg-black/40 transition group-hover:scale-105">
            <Bot size={26} strokeWidth={1.7} aria-hidden />
            <Cpu
              className="absolute -bottom-1 -right-1 rounded-full bg-[#f3d07a] p-[3px] text-black"
              size={15}
              aria-hidden
            />
          </span>
        )}
      </button>
    </>
  );
}

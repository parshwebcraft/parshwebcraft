"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, Cpu, Send, Sparkles, X } from "lucide-react";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  time: string;
};

function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `chat_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getTimeLabel() {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! Main ParshWebCraft AI assistant hoon. Aap apna business type batao, jaise jewellery showroom, restaurant, clinic, coaching, ecommerce, ya SaaS. Main website/marketing plan aur pricing suggest kar dunga.",
      time: getTimeLabel(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored =
      window.localStorage.getItem("pwc_chat_session_id") || createSessionId();
    window.localStorage.setItem("pwc_chat_session_id", stored);
    setSessionId(stored);

    const saved = window.localStorage.getItem("pwc_chat_messages");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) {
          setMessages(parsed.slice(-30));
        }
      } catch {
        // Ignore corrupted local chat cache.
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pwc_chat_messages", JSON.stringify(messages));
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const quickPrompts = useMemo(
    () => [
      "Website pricing batao",
      "Digital marketing ka plan?",
      "Portfolio dikhao",
      "Discount mil sakta hai?",
    ],
    []
  );

  async function sendMessage(text = input) {
    const trimmed = text.trim();
    if (!trimmed || sending || !sessionId) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
      time: getTimeLabel(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          message: trimmed,
          history: messages.slice(-8),
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
            data?.reply ||
            "I could not answer that properly right now. Please ask again with a little more detail.",
          time: getTimeLabel(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Network issue aa gaya. Please try again, or ask about pricing, portfolio, SEO, website, or digital marketing.",
          time: getTimeLabel(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {open && (
        <section className="fixed bottom-24 right-4 z-[60] flex h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[460px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07070a]/95 text-white shadow-2xl backdrop-blur-xl md:right-6">
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#f3d07a]/40">
                <Image
                  src="/images/logo-main.png"
                  alt="ParshWebCraft"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">ParshWebCraft AI Assistant</h2>
                <p className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.map((message, index) => (
              <div
                key={`${message.time}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-[#f3d07a] text-black"
                      : "bg-white/[0.10] text-slate-100"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={`mt-2 text-[11px] ${
                      message.role === "user" ? "text-black/60" : "text-slate-400"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            {sending && (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.10] px-4 py-3 text-sm text-slate-300">
                <Bot size={16} />
                Thinking...
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="shrink-0 rounded-full border border-[#f3d07a]/30 px-3 py-1.5 text-xs text-[#f3d07a] transition hover:bg-[#f3d07a]/10"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about pricing, portfolio, marketing..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#f3d07a]/50"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3d07a] text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <Send size={19} />
              </button>
            </form>

            <div className="mt-3 flex justify-between text-xs text-slate-500">
              <span>Chat history is saved for admin follow-up.</span>
              <Link href="/contact" className="text-[#f3d07a] hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group fixed bottom-5 right-5 z-[61] inline-flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#f3d07a]/45 bg-[#07070a] text-[#f3d07a] shadow-[0_0_34px_rgba(243,208,122,0.32)] transition hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(243,208,122,0.46)]"
        aria-label={open ? "Close AI chat" : "Open AI chat"}
      >
        <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_20%,rgba(243,208,122,0.32),transparent_42%),linear-gradient(145deg,rgba(243,208,122,0.16),rgba(255,255,255,0.03))]" />
        <span className="absolute -right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f3d07a] text-black shadow-lg">
          <Sparkles size={13} aria-hidden="true" />
        </span>

        {open ? (
          <X className="relative z-10" size={27} />
        ) : (
          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f3d07a]/35 bg-black/50 transition group-hover:scale-105">
            <Bot size={28} strokeWidth={1.8} aria-hidden="true" />
            <Cpu
              className="absolute -bottom-1 -right-1 rounded-full bg-[#f3d07a] p-0.5 text-black"
              size={17}
              aria-hidden="true"
            />
          </span>
        )}
      </button>
    </>
  );
}

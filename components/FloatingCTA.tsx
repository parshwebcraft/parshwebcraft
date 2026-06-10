"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_URL =
  "https://wa.me/919521347419?text=Hi%20ParshWebCraft%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20business.";

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  /* Show tooltip after 4 seconds — nudges visitors who haven't converted yet */
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-50 hidden flex-col items-start gap-3 sm:flex">
      {/* ── WhatsApp Button ── */}
      <div className="relative">
        {/* Tooltip bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -8, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute left-16 bottom-1 w-52 rounded-xl bg-[#1a2236] border border-white/10 px-4 py-3 shadow-xl pointer-events-none"
            >
              <p className="text-white text-xs font-semibold leading-snug">
                💬 Chat with us on WhatsApp
              </p>
              <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">
                Usually replies within 2 hours
              </p>
              {/* Arrow */}
              <div className="absolute -left-1.5 bottom-3 w-3 h-3 bg-[#1a2236] border-l border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          id="floating-whatsapp-cta"
          aria-label="Chat with ParshWebCraft on WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 wa-pulse-dot"
          onClick={() => setShowTooltip(false)}
        >
          {/* Pulsing online indicator */}
          <span
            aria-hidden
            className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-[#25D366] border-2 border-[#0a0a0c] animate-pulse"
          />
          {/* WhatsApp icon */}
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* ── Free Quote Button ── */}
      <Link
        href="/contact"
        id="floating-quote-cta"
        aria-label="Get a free quote from ParshWebCraft"
        className="rounded-full bg-[#f3d07a] px-5 py-2.5 text-sm font-bold text-black shadow-[0_4px_16px_rgba(243,208,122,0.3)] transition hover:-translate-y-1 hover:shadow-[0_6px_22px_rgba(243,208,122,0.45)]"
      >
        Free Quote
      </Link>
    </div>
  );
}

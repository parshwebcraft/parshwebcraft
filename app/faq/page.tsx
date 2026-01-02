"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

/* ================= UPDATED FAQs ================= */

const faqs = [
  {
    q: "What does ParshWebCraft actually build?",
    a: "We design and build professional business websites, SaaS platforms, and internal web systems. This includes company websites, landing pages, admin dashboards, SaaS products, and custom systems that support real business workflows.",
  },
  {
    q: "How do I know whether I need a website or a SaaS platform?",
    a: "Most businesses only need a good website. SaaS or custom systems are recommended only when you have repeat processes like orders, users, inventory, bookings, or internal operations. We help you decide honestly before starting.",
  },
  {
    q: "How long does it take to build a website or SaaS system?",
    a: "A standard business website usually takes 7–21 days. SaaS platforms and internal systems take longer depending on features, users, and logic. Timelines are always discussed clearly before development starts.",
  },
  {
    q: "Do you build mobile-friendly and scalable systems?",
    a: "Yes. All websites are mobile-first. SaaS platforms and systems are built with scalability in mind so they can grow from a few users to larger usage without rewriting everything.",
  },
  {
    q: "Who owns the website or SaaS after development?",
    a: "You own the project. Once completed, the website or system belongs to you. We do not lock clients into proprietary control or hidden dependencies.",
  },
  {
    q: "Do you provide maintenance and long-term support?",
    a: "Yes. We offer optional maintenance plans that include updates, security checks, performance monitoring, and small improvements so your system stays stable over time.",
  },
  {
    q: "Can you improve or rebuild an existing website or system?",
    a: "Yes. We can redesign, optimize, or extend existing websites and systems if the foundation allows it. If rebuilding is a better long-term option, we explain that clearly.",
  },
  {
    q: "How do we get started with ParshWebCraft?",
    a: "Simply contact us and describe your business and requirement. We’ll review your needs, suggest the right approach, and explain the next steps clearly before any commitment.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto text-center py-14">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35 }}
          className="inline-block text-sm text-[#f3d07a] font-semibold"
        >
          Support
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold mt-3"
        >
          Frequently Asked <span className="text-[#f3d07a]">Questions</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
        >
          Clear answers about websites, SaaS platforms, timelines, ownership,
          and long-term support.
        </motion.p>
      </section>

      {/* ================= FAQ LIST ================= */}
      <section className="max-w-4xl mx-auto pb-20">
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="glass rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden"
                whileHover={!reduce ? glowHover : undefined}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-200">{item.q}</span>
                  <span className="text-[#f3d07a] text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= GOLDEN REVEAL CTA ================= */}
      <motion.section
        className="pb-28"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={
            !reduce
              ? {
                  boxShadow:
                    "0 12px 40px rgba(18,24,38,0.65), 0 0 42px rgba(243,208,122,0.28)",
                  scale: 1.015,
                }
              : undefined
          }
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="
            relative overflow-hidden rounded-2xl
            border border-[rgba(243,208,122,0.28)]
            bg-[#0b1220]
            p-10
            max-w-4xl mx-auto
            text-center
          "
        >
          {/* Gold Glow */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
            "
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If you’re unsure whether you need a website, SaaS platform, or
              custom system, let’s discuss your business and find the right
              solution.
            </p>

            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                rounded-full
                bg-[#f3d07a]
                text-black
                font-semibold
                hover:brightness-95
                transition
              "
            >
              Talk to Us
            </a>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

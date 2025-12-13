"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* Animation presets (same vibe as About / Services) */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

const faqs = [
  {
    q: "What services does ParshWebCraft provide?",
    a: "ParshWebCraft specializes in modern website development, landing pages, SEO optimization, eCommerce websites, maintenance, and automation solutions tailored for business growth.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites take between 7–21 days depending on complexity, content readiness, and required features. Timelines are discussed clearly before starting.",
  },
  {
    q: "Do you provide ongoing website maintenance?",
    a: "Yes. Website maintenance is available as an add-on plan that includes updates, backups, security monitoring, and bug fixes.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website is built mobile-first and fully responsive across all devices and screen sizes.",
  },
  {
    q: "Do you help with SEO?",
    a: "Yes. SEO-friendly structure, fast loading, and best practices are included. Advanced SEO services are also available as a dedicated service.",
  },
  {
    q: "How do I get started?",
    a: "Simply use the contact form and select a plan or describe your requirement. We’ll get back within 24 hours.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
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
          Answers to common questions about services, pricing, timelines, and
          support.
        </motion.p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto pb-28">
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
                whileHover={glowHover}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-200">
                    {item.q}
                  </span>
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
    </main>
  );
}

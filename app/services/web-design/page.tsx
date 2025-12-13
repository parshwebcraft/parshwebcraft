"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function WebDesignServicePage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">

      {/* ================= HERO ================= */}
      <section className="py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-[#f3d07a] text-sm tracking-wide uppercase font-semibold"
            variants={fadeUp}
          >
            Service
          </motion.span>

          <motion.h1
            className="text-4xl font-extrabold mt-3"
            variants={fadeUp}
          >
            Web Design & Development
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            Premium, high-performance websites built to convert visitors
            into customers and scale with your business.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Modern UI/UX",
              desc: "Clean layouts, premium visuals, and conversion-focused design.",
            },
            {
              title: "Responsive Design",
              desc: "Perfect experience across mobile, tablet, and desktop.",
            },
            {
              title: "Fast Performance",
              desc: "Optimized loading speeds for SEO and user retention.",
            },
            {
              title: "SEO-Ready",
              desc: "Search-engine-friendly structure from day one.",
            },
            {
              title: "Scalable Architecture",
              desc: "Built with modern frameworks that grow with your business.",
            },
            {
              title: "Secure & Reliable",
              desc: "Best practices for security and long-term stability.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass p-6 rounded-xl border border-[rgba(243,208,122,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <motion.div
          className="max-w-5xl mx-auto glass p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[rgba(243,208,122,0.12)]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={!reduce ? glowHover : undefined}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Want a Premium Website?
            </h3>
            <p className="text-slate-300">
              Let’s build a modern, high-performance website for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                       text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

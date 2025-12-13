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

export default function SEOServicePage() {
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
            SEO & Speed Optimization
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            Rank higher on Google, improve page speed, and attract
            high-quality organic traffic to your website.
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
              title: "Technical SEO",
              desc: "Clean structure, schema, metadata, and crawl optimization.",
            },
            {
              title: "On-Page SEO",
              desc: "Keyword optimization, content structure, and internal linking.",
            },
            {
              title: "Speed Optimization",
              desc: "Improve Core Web Vitals and page load performance.",
            },
            {
              title: "Mobile SEO",
              desc: "Fully optimized experience for mobile-first indexing.",
            },
            {
              title: "Analytics & Tracking",
              desc: "Google Analytics & Search Console integration.",
            },
            {
              title: "Long-Term Growth",
              desc: "SEO strategies built for sustainable ranking improvements.",
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
              Want More Organic Traffic?
            </h3>
            <p className="text-slate-300">
              Let’s optimize your website for search engines and speed.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                       text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Start SEO Optimization
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

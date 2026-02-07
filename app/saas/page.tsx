"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SaaSPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-28 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto">
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium">
            SaaS Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Production-Ready SaaS Products
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            We don’t just build SaaS for clients. We design, build, and launch our
            own production-ready platforms used by real businesses.
          </p>
        </div>

        {/* ================= FEATURED SAAS — TOP 1 ================= */}
        <div className="rounded-3xl border border-[#f3d07a55] bg-[#0b0f19] p-10 mb-24">
          <span className="text-[#f3d07a] font-semibold text-sm">
            🚀 Featured SaaS • LIVE PRODUCT
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            ParshVyapar — Billing & Inventory Management SaaS
          </h2>

          <p className="text-slate-300 mt-4 max-w-4xl">
            ParshVyapar is a live, production-grade billing and inventory
            management platform built for Indian retail stores and growing local
            businesses. This is our own SaaS product, fully designed, developed,
            and launched by ParshWebCraft.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Feature text="Inventory & product management" />
            <Feature text="Billing, orders & sales tracking" />
            <Feature text="Business reports & analytics" />
            <Feature text="Admin dashboard with secure access" />
            <Feature text="Role-based authentication & permissions" />
            <Feature text="Scalable SaaS backend (FastAPI + MongoDB)" />
          </div>

          {/* ================= CTA ================= */}
          <motion.div
            className="mt-14"
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
                p-8 md:p-10
                flex flex-col md:flex-row
                items-center justify-between gap-6
              "
            >
              {/* Gold Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]" />

              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Built & Launched by ParshWebCraft
                </h3>
                <p className="text-slate-300">
                  ParshVyapar is actively used by real businesses. Want a similar
                  SaaS product or a customized solution for your industry?
                </p>
              </div>

              <a
                href="/contact?intent=parshvyapar"
                className="
                  relative z-10
                  inline-flex items-center justify-center
                  px-8 py-4
                  rounded-full
                  bg-[#f3d07a]
                  text-black
                  font-semibold
                  hover:brightness-95
                  transition
                "
              >
                View ParshVyapar Case Study
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= WHY SAAS ================= */}
        <div className="text-center mb-24">
          <h3 className="text-3xl font-bold text-white">
            Why Choose Our SaaS Solutions?
          </h3>

          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            Our SaaS platforms are not demos or experiments. They are built with
            real users, real data, and real business operations in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Reason
              title="Production-Ready"
              text="Designed for real-world usage, performance, and security."
            />
            <Reason
              title="Founder-Built"
              text="We build and run our own SaaS, not just client projects."
            />
            <Reason
              title="Scalable"
              text="Architected to grow from local businesses to large operations."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-300">
      <span className="text-[#f3d07a] mt-1">✔</span>
      <span>{text}</span>
    </div>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-[#2a2a2a]">
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-slate-300 mt-3">{text}</p>
    </div>
  );
}

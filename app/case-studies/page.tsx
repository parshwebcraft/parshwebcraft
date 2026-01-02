"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

export default function CaseStudiesPage() {
  const reduce = useReducedMotion();

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* =========================
          HEADER
      ========================= */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Website & Web App Case Studies
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto">
          These case studies showcase real-world website and web application
          projects built for Udaipur-based businesses, founders, and internal
          systems. Every project listed here is production-ready and designed to
          solve actual business problems.
        </p>

        {/* TRUST NOTE */}
        <p className="text-sm text-slate-500 mt-4 max-w-2xl mx-auto">
          Some projects listed here are client-delivered solutions, while others
          are internal systems and SaaS platforms built to production standards.
          Each case study reflects real-world architecture, decision-making, and
          constraints.
        </p>
      </header>

      {/* =========================
          CASE STUDIES GRID
      ========================= */}
      <section className="grid md:grid-cols-2 gap-8">
        <Link
          href="/case-studies/anand-fashion"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Anand Fashion — Clothing Store Website (Udaipur)
          </h2>
          <p className="text-slate-400 mb-4">
            A website developed for a Udaipur-based clothing store to establish
            a professional online presence with a clean, mobile-first design.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        <Link
          href="/case-studies/parshwebcraft"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Building ParshWebCraft — Agency Website
          </h2>
          <p className="text-slate-400 mb-4">
            A founder-led case study documenting the design, development, and
            launch of the ParshWebCraft website.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        <Link
          href="/case-studies/jayesh-sir-elearning"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Jayesh Sir — E-Learning Platform
          </h2>
          <p className="text-slate-400 mb-4">
            A PWA-first e-learning platform with secure student access, online
            courses, and scalable content delivery.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        <Link
          href="/case-studies/freshmart"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <span className="inline-block text-xs text-amber-400 mb-2">
            Internal SaaS System
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            FreshMart — Hyperlocal Grocery Admin System
          </h2>
          <p className="text-slate-400 mb-4">
            A hyperlocal grocery management system focused on admin workflows,
            product variants, order processing, and backend stability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        <Link
          href="/case-studies/easymed"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <span className="inline-block text-xs text-amber-400 mb-2">
            Internal SaaS System
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            EasyMed — Pharmacy Inventory System
          </h2>
          <p className="text-slate-400 mb-4">
            A pharmacy inventory system focused on batch-wise stock tracking,
            expiry management, and day-to-day usability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>
      </section>

      {/* =========================
          GOLDEN REVEAL CTA
      ========================= */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 30 }}
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

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">
              Looking for a Similar System?
            </h3>
            <p className="text-slate-300 mb-6">
              If your business needs a website, SaaS platform, or internal
              system similar to these case studies, let’s discuss your
              requirements and find the right approach.
            </p>

            <Link
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
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

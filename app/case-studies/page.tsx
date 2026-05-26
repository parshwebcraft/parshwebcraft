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
          These case studies showcase real-world websites, SaaS platforms, and
          internal systems built for businesses, founders, and operational use.
          Every project here is designed for real constraints and real users.
        </p>

        <p className="text-sm text-slate-500 mt-4 max-w-2xl mx-auto">
          Some projects are client-delivered solutions, while others are
          founder-built SaaS products and internal systems developed to
          production standards.
        </p>
      </header>

      {/* =========================
          CASE STUDIES GRID
      ========================= */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* ================= PARSHVYAPAR (TOP 1) ================= */}
        <Link
          href="/saas/parshvyapar"
          className="group rounded-2xl border border-[#f3d07a]/40 p-8 hover:border-[#f3d07a]/70 transition bg-[#0b1220]"
        >
          <span className="inline-block text-xs text-[#f3d07a] mb-2 font-semibold">
            Founder-Built SaaS · Live Product
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            ParshVyapar — Billing & Inventory Management SaaS
          </h2>
          <p className="text-slate-300 mb-4">
            A production-ready billing and inventory management SaaS built for
            Indian retail shops and local businesses. Handles billing, GST
            invoices, stock tracking, PDF bills, and business reports — all from
            a single dashboard.
          </p>
          <span className="text-sm text-[#f3d07a]">
            View product case study →
          </span>
        </Link>

        {/* ================= PARSH CARE ================= */}
        <Link
          href="/case-studies/parsh-care"
          className="group rounded-2xl border border-emerald-400/30 p-8 hover:border-emerald-400/60 transition bg-emerald-950/10"
        >
          <span className="inline-block text-xs text-emerald-400 mb-2 font-semibold">
            Healthcare SaaS · Live ERP Platform
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Parsh Care — Clinic ERP & Diagnostics Platform
          </h2>
          <p className="text-slate-300 mb-4">
            A live clinic ERP built for reception, patient records,
            appointments, prescriptions, lab workflow, billing, expenses,
            payroll, analytics, and secure center-wise clinic operations.
          </p>
          <span className="text-sm text-emerald-400">View case study →</span>
        </Link>

        {/* ================= KHARKA MINING ================= */}
        <Link
          href="/case-studies/kharka-mining"
          className="group rounded-2xl border border-amber-400/30 p-8 hover:border-amber-400/50 transition"
        >
          <span className="inline-block text-xs text-amber-400 mb-2">
            Industrial Asset · Live Project
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Kharka Mining LLP — Mining Asset Website
          </h2>
          <p className="text-slate-400 mb-4">
            A professional asset-focused website built to present a large-scale
            mining operation, filter serious operators, and enable structured
            contract or transfer discussions.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* ================= BAHUBALI CABS ================= */}
        <Link
          href="https://bahubali-cabs.vercel.app/"
          target="_blank"
          className="group rounded-2xl border border-emerald-400/30 p-8 hover:border-emerald-400/50 transition"
        >
          <span className="inline-block text-xs text-emerald-400 mb-2">
            Local Business · Live Client Project
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Bahubali Cabs — Taxi Service Website (Udaipur)
          </h2>
          <p className="text-slate-400 mb-4">
            A conversion-focused taxi service website built for local SEO,
            instant WhatsApp bookings, and mobile-first customer acquisition.
          </p>
          <span className="text-sm text-emerald-400">
            View live project →
          </span>
        </Link>

        {/* ================= ANAND FASHION ================= */}
        <Link
          href="/case-studies/anand-fashion"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Anand Fashion — Clothing Store Website
          </h2>
          <p className="text-slate-400 mb-4">
            A website developed for a Udaipur-based clothing store to establish a
            clean, professional online presence with a mobile-first design.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* ================= PARSHWEBCRAFT ================= */}
        <Link
          href="/case-studies/parshwebcraft"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Building ParshWebCraft — Agency Website
          </h2>
          <p className="text-slate-400 mb-4">
            A founder-led case study documenting the design, development, and
            launch of the ParshWebCraft website with a strong SaaS-first mindset.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* ================= JAYESH SIR ================= */}
        <Link
          href="/case-studies/jayesh-sir-elearning"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Jayesh Sir — E-Learning Platform
          </h2>
          <p className="text-slate-400 mb-4">
            A PWA-first e-learning platform with secure student access, structured
            courses, and scalable content delivery.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* ================= FRESHMART ================= */}
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
            A grocery admin system focused on product variants, order workflows,
            banners, and backend stability for hyperlocal operations.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* ================= EASYMED ================= */}
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
            expiry visibility, and daily operational usability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl border border-[rgba(243,208,122,0.28)] bg-[#0b1220] p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Looking for a Similar System?
          </h3>
          <p className="text-slate-300 mb-6">
            If your business needs a website or SaaS system like these, let’s
            discuss your requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
          >
            Discuss Your Project
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

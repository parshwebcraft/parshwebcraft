import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Website & Web App Projects in Udaipur | ParshWebCraft",
  description:
    "Explore real website and web application case studies built by ParshWebCraft for Udaipur-based businesses and founders. Production-ready projects, real results.",
};

export default function CaseStudiesPage() {
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
        {/* Client Case Study: Anand Fashion */}
        <Link
          href="/case-studies/anand-fashion"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Anand Fashion — Clothing Store Website (Udaipur)
          </h2>
          <p className="text-slate-400 mb-4">
            A website developed for a Udaipur-based clothing store to establish a
            professional online presence with a clean, mobile-first design and
            clearly structured product and brand information.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* Internal Founder Case Study */}
        <Link
          href="/case-studies/parshwebcraft"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Building ParshWebCraft — Agency Website
          </h2>
          <p className="text-slate-400 mb-4">
            A founder-led case study documenting the design, development, launch,
            and SEO optimization of the ParshWebCraft agency website, built to
            serve businesses in Udaipur and across India.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* System Case Study: Jayesh Sir App */}
        <Link
          href="/case-studies/jayesh-sir-elearning"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Jayesh Sir — E-Learning Platform (Udaipur Coaching Institute)
          </h2>
          <p className="text-slate-400 mb-4">
            A PWA-first e-learning platform developed for a Udaipur-based
            coaching institute, featuring secure student access, online courses,
            tests, and scalable content delivery.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* Internal SaaS Case Study: FreshMart */}
        <Link
          href="/case-studies/freshmart"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <span className="inline-block text-xs text-amber-400 mb-2">
            Internal SaaS System
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            FreshMart — Hyperlocal Grocery Admin System (Udaipur)
          </h2>
          <p className="text-slate-400 mb-4">
            A system-focused case study exploring the development of a
            hyperlocal grocery management platform, covering admin workflows,
            variant-based product handling, order processing, and backend
            stability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* Internal SaaS Case Study: EasyMed */}
        <Link
          href="/case-studies/easymed"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <span className="inline-block text-xs text-amber-400 mb-2">
            Internal SaaS System
          </span>
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            EasyMed — Pharmacy Inventory System (Udaipur)
          </h2>
          <p className="text-slate-400 mb-4">
            A custom pharmacy inventory system designed for a Udaipur-based
            medical business, focused on batch-wise stock tracking, expiry
            management, billing workflows, and practical day-to-day usability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <div className="mt-20 text-center">
        <p className="text-slate-400 mb-4">
          Looking for a similar system or custom solution?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
        >
          Discuss Your Project
        </Link>
      </div>
    </main>
  );
}

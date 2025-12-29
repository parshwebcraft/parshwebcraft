import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | ParshWebCraft",
  description:
    "Real client work and production-grade web projects built by ParshWebCraft.",
};

export default function CaseStudiesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-slate-400 max-w-2xl">
          We focus on real-world builds — not mockups. These case studies show
          how we design and ship production-ready websites for real businesses.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        {/* Client Case Study: Anand Fashion */}
        <Link
          href="/case-studies/anand-fashion"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Anand Fashion — Clothing Store Website
          </h2>
          <p className="text-slate-400 mb-4">
            A local clothing store website built to establish an online presence
            with a clean, mobile-first layout and structured content.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* Internal Founder Case Study */}
        <Link
          href="/case-studies/parshwebcraft"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Building ParshWebCraft
          </h2>
          <p className="text-slate-400 mb-4">
            An internal founder case study covering the design, development,
            launch, and post-launch optimization of a production-grade agency
            website.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* System Case Study: Jayesh Sir App */}
        <Link
          href="/case-studies/jayesh-sir-elearning"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            Jayesh Sir — E-Learning Platform
          </h2>
          <p className="text-slate-400 mb-4">
            A PWA-first online learning platform built for structured courses,
            secure access, and scalable content delivery.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        <Link
          href="/case-studies/freshmart"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            FreshMart — Grocery Admin System
          </h2>
          <p className="text-slate-400 mb-4">
            An internal case study exploring real-world challenges of building a
            hyperlocal grocery platform, including admin workflows and backend
            stability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>

        {/* Internal System Case Study: EasyMed */}
        <Link
          href="/case-studies/easymed"
          className="group rounded-2xl border border-white/10 p-8 hover:border-white/20 transition"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:underline">
            EasyMed — Pharmacy Inventory System
          </h2>
          <p className="text-slate-400 mb-4">
            A batch-wise medicine inventory system focused on expiry tracking,
            stock visibility, and owner-centric usability.
          </p>
          <span className="text-sm text-amber-400">View case study →</span>
        </Link>
      </section>
    </main>
  );
}

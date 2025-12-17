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
            A local clothing store website built to showcase products,
            categories, and brand presence with a clean, mobile-first layout.
          </p>
          <span className="text-sm text-amber-400">
            View case study →
          </span>
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
            An internal founder project showcasing how we design, build, and
            deploy production-grade websites using Next.js and Supabase.
          </p>
          <span className="text-sm text-amber-400">
            View case study →
          </span>
        </Link>
      </section>
    </main>
  );
}

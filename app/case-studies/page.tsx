import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | ParshWebCraft",
  description:
    "Real-world builds, internal experiments, and production-grade web projects by ParshWebCraft.",
};

export default function CaseStudiesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-slate-400 max-w-2xl">
          We believe in showing real work. Below are production-grade builds and
          internal experiments that reflect the same quality we deliver to our
          clients.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
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
            launch production-ready websites using Next.js and Supabase.
          </p>
          <span className="text-sm text-amber-400">
            View case study →
          </span>
        </Link>

        {/* Future Client Work */}
        <div className="rounded-2xl border border-dashed border-white/10 p-8">
          <h2 className="text-xl font-semibold mb-3">
            Client Case Studies
          </h2>
          <p className="text-slate-400 text-sm">
            Real client projects will appear here as we onboard and deliver live
            production websites.
          </p>
        </div>
      </section>
    </main>
  );
}

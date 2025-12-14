import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Built ParshWebCraft | Case Study",
  description:
    "A behind-the-scenes look at how ParshWebCraft was designed, built, and optimized as a production-grade web platform.",
};

const goldHover =
  "transition-all duration-300 hover:-translate-y-1 hover:border-[#f3d07a]/50 hover:shadow-[0_0_40px_rgba(243,208,122,0.15)]";

export default function ParshWebCraftCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Building ParshWebCraft</h1>
        <p className="text-slate-400">
          Internal Founder Project · Next.js · Supabase · Vercel
        </p>
      </header>

      {/* Hero Proof Card */}
      <section className="mb-20">
        <div
          className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 ${goldHover}`}
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#f3d07a]">100%</div>
              <div className="text-sm text-slate-400 mt-1">Custom Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f3d07a]">
                Next.js + Supabase
              </div>
              <div className="text-sm text-slate-400 mt-1">Modern Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f3d07a]">
                Production Ready
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Scalable Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mb-14 border-l-2 border-[#f3d07a]/40 pl-6">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          ParshWebCraft was built as a production-grade agency platform to solve a
          common problem: businesses paying for websites that look good but fail
          in performance, SEO, and scalability. This project represents the same
          standards we apply to all client work.
        </p>
      </section>

      {/* Challenges */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Mobile-first UI without performance tradeoffs</li>
          <li>Secure admin authentication</li>
          <li>SEO-ready structure from day one</li>
          <li>Analytics and lead tracking scalability</li>
        </ul>
      </section>

      {/* Solution */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Next.js App Router for performance and scalability</li>
          <li>Supabase for auth, database, and contact flows</li>
          <li>Server-first SEO with clean metadata</li>
          <li>Vercel deployment for speed and reliability</li>
        </ul>
      </section>

      {/* Results */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <p className="text-slate-300 leading-relaxed">
          The final build is fast, secure, and scalable — optimized for
          conversion, search visibility, and long-term growth rather than just
          visual appeal.
        </p>
      </section>

      {/* Work & Experiments */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Work & Experiments</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Landing page conversion testing",
            "SEO architecture experiments",
            "Admin dashboards & analytics tooling",
            "Core Web Vitals optimization",
          ].map((item) => (
            <div
              key={item}
              className={`rounded-xl border border-white/10 bg-white/5 p-6 text-slate-300 ${goldHover}`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className={`relative border border-[#f3d07a]/30 rounded-3xl bg-gradient-to-br from-[#f3d07a]/15 via-transparent to-transparent p-10 ${goldHover}`}
      >
        <h3 className="text-2xl font-semibold mb-4">
          Want this level of quality for your business?
        </h3>
        <p className="text-slate-300 mb-6 max-w-xl">
          We don’t use templates. Every project is designed for performance,
          conversion, and long-term growth.
        </p>

        <div className="flex gap-4">
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:shadow-md transition"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold hover:shadow-[0_8px_30px_rgba(243,208,122,0.45)] transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

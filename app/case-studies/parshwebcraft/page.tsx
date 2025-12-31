import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Building ParshWebCraft – Website & SaaS Application Development | Case Study",
  description:
    "Founder case study of how ParshWebCraft was built as a production-grade website and SaaS application platform. Covers architecture, SEO, performance, and scalable system design.",
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
          Internal Founder Project · Website & SaaS Application Architecture ·
          Next.js · Supabase · Vercel
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
              <div className="text-sm text-slate-400 mt-1">
                Custom Website & SaaS Architecture
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f3d07a]">
                Modern Stack
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Next.js · Supabase · Scalable Systems
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f3d07a]">
                Production Ready
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Built for Real Client SaaS Use
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mb-14 border-l-2 border-[#f3d07a]/40 pl-6">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          ParshWebCraft was built as an internal agency platform to demonstrate
          how modern websites and SaaS applications should be designed,
          developed, and shipped. The objective was to create a fast, SEO-ready,
          and scalable system capable of supporting both content-driven websites
          and full SaaS-style web applications for real businesses.
        </p>
      </section>

      {/* Challenges */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>
            Maintaining a mobile-first user experience without compromising
            performance or SEO
          </li>
          <li>
            Designing a system flexible enough for both marketing websites and
            SaaS application workflows
          </li>
          <li>Implementing secure admin authentication and protected routes</li>
          <li>
            Creating analytics and lead tracking that can scale with future
            SaaS-based features
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>
            Next.js App Router for high-performance website and SaaS application
            development
          </li>
          <li>
            Supabase for authentication, database management, and form handling
            across both website and SaaS use cases
          </li>
          <li>
            Server-first SEO architecture with clean metadata and scalable page
            structure
          </li>
          <li>
            Vercel deployment for reliable global delivery and SaaS-ready
            infrastructure
          </li>
        </ul>
      </section>

      {/* Results */}
      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-slate-300 leading-relaxed">
          The final result is a production-grade platform that functions as both
          a high-performance agency website and a reference architecture for
          building scalable SaaS applications. It reflects how ParshWebCraft
          approaches client projects — with clarity, performance, security, and
          long-term growth in mind.
        </p>
      </section>

      {/* Work & Experiments */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Internal Work & Experiments
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Landing page structure and conversion flow testing",
            "SEO architecture for websites and SaaS platforms",
            "Admin dashboards, analytics, and role-based access",
            "Core Web Vitals optimization for scalable web applications",
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
          Looking for a Website or SaaS Application Build?
        </h3>
        <p className="text-slate-300 mb-6 max-w-xl">
          We apply the same technical standards, SEO-first thinking, and
          scalable architecture to every website and SaaS application we build —
          tailored to your business stage.
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

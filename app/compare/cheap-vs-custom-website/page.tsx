import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "₹8k Website vs Custom Website | ParshWebCraft",
  description:
    "Understand the real difference between cheap ₹8k websites and custom-built websites. Compare design, SEO, performance, scalability, and long-term cost before choosing.",
};

const card =
  "rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#f3d07a]/40 hover:shadow-[0_0_30px_rgba(243,208,122,0.12)]";

export default function CheapVsCustom() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-16">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] text-sm font-medium">
          Comparison Guide
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          ₹8k Website vs <span className="text-[#f3d07a]">Custom Website</span>
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto">
          Cheap websites look affordable upfront, but often cost more in the
          long run. This guide explains the real difference so you can make a
          smart business decision.
        </p>
      </header>

      {/* ================= COMPARISON CARDS ================= */}
      <section className="space-y-6">
        <div className={card}>
          <h3 className="text-xl font-semibold mb-2">🎨 Design & Branding</h3>
          <p className="text-slate-300">
            <strong>₹8k Website:</strong> Uses common templates reused across
            hundreds of sites. Little to no brand identity.
            <br />
            <strong>Custom Website:</strong> Designed specifically for your
            business, audience, and conversion goals.
          </p>
        </div>

        <div className={card}>
          <h3 className="text-xl font-semibold mb-2">⚡ Performance & SEO</h3>
          <p className="text-slate-300">
            <strong>₹8k Website:</strong> Slow loading, poor SEO structure,
            minimal optimization.
            <br />
            <strong>Custom Website:</strong> Optimized for speed, SEO, and clean
            code from day one.
          </p>
        </div>

        <div className={card}>
          <h3 className="text-xl font-semibold mb-2">
            🔐 Security & Stability
          </h3>
          <p className="text-slate-300">
            <strong>₹8k Website:</strong> Basic security, shared hosting risks,
            no monitoring.
            <br />
            <strong>Custom Website:</strong> Secure setup, performance tuning,
            and scalable infrastructure.
          </p>
        </div>

        <div className={card}>
          <h3 className="text-xl font-semibold mb-2">
            📈 Scalability & Growth
          </h3>
          <p className="text-slate-300">
            <strong>₹8k Website:</strong> Hard to modify or extend. Often
            rebuilt from scratch later.
            <br />
            <strong>Custom Website:</strong> Built to scale with features like
            automation, dashboards, and integrations.
          </p>
        </div>

        <div className={card}>
          <h3 className="text-xl font-semibold mb-2">💰 Long-Term Cost</h3>
          <p className="text-slate-300">
            <strong>₹8k Website:</strong> Low initial cost but frequent rebuilds
            increase total expense.
            <br />
            <strong>Custom Website:</strong> Higher upfront cost but saves money
            long-term by growing with your business.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-20 rounded-2xl border border-[#f3d07a33] bg-[#f3d07a14] p-10 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Not Sure What’s Right for You?
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          If your website is meant to generate leads, sales, or long-term
          growth, a custom solution usually pays for itself. Let’s discuss what
          fits your business stage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
          >
            View Pricing Plans
          </Link>

          <Link
            href="/saas"
            className="px-6 py-3 rounded-full border border-[#f3d07a] text-[#f3d07a] hover:bg-[#f3d07a] hover:text-black transition"
          >
            Explore SaaS Solutions
          </Link>
        </div>
      </section>
    </main>
  );
}

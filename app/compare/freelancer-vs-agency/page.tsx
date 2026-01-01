import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelancer vs Agency – What’s Better for Your Business? | ParshWebCraft",
  description:
    "A clear comparison between hiring a freelancer and working with a professional web agency. Understand costs, risks, scalability, and long-term impact before deciding.",
};

export default function FreelancerVsAgency() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-16">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] text-sm font-medium">
          Comparison Guide
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Freelancer vs <span className="text-[#f3d07a]">Agency</span>
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Many businesses choose the wrong option at the start and pay for it
          later. This guide explains the real difference between hiring a
          freelancer and working with a professional web agency — beyond just
          price.
        </p>
      </header>

      {/* ================= COMPARISON ================= */}
      <section className="grid gap-6 md:grid-cols-2 mb-20">
        {/* FREELANCER */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold mb-4">Hiring a Freelancer</h2>

          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• Single person handles design, development & support</li>
            <li>• Lower upfront cost</li>
            <li>• Limited availability & backup</li>
            <li>• Support often ends after delivery</li>
            <li>• Scaling or future changes can be difficult</li>
            <li>• Higher risk if freelancer becomes unavailable</li>
          </ul>
        </div>

        {/* AGENCY */}
        <div className="rounded-2xl border border-[#f3d07a33] bg-[#f3d07a14] p-8">
          <h2 className="text-xl font-semibold mb-4">
            Working with an Agency
          </h2>

          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• Dedicated team (design, development, QA)</li>
            <li>• Structured process & timelines</li>
            <li>• Long-term support & maintenance options</li>
            <li>• Easier scaling as business grows</li>
            <li>• Clear accountability & documentation</li>
            <li>• Lower risk for business-critical systems</li>
          </ul>
        </div>
      </section>

      {/* ================= WHEN TO CHOOSE ================= */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-10 mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">
          When Should You Choose What?
        </h3>

        <div className="grid gap-8 md:grid-cols-2 text-sm text-slate-300">
          <div>
            <h4 className="font-semibold text-white mb-3">
              Choose a Freelancer if:
            </h4>
            <ul className="space-y-2">
              <li>• You need a small, one-time website</li>
              <li>• Budget is extremely tight</li>
              <li>• No long-term updates are planned</li>
              <li>• Website is not business-critical</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">
              Choose an Agency if:
            </h4>
            <ul className="space-y-2">
              <li>• Website impacts leads or revenue</li>
              <li>• You need scalability & future upgrades</li>
              <li>• SEO, performance & security matter</li>
              <li>• You want reliable long-term support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL VERDICT ================= */}
      <section className="text-center mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Our Honest Recommendation
        </h3>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Freelancers are great for quick, simple work.  
          Agencies are better for businesses that want reliability, growth, and
          peace of mind.  
          The right choice depends on how important your website or system is to
          your business — not just the price.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="rounded-2xl border border-[#f3d07a33] bg-[#f3d07a14] p-10 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Still Not Sure What’s Right for You?
        </h3>

        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          Talk to us before making a decision. We’ll review your requirements
          and honestly tell you whether you need a freelancer, an agency, or
          something in between — no pressure, no sales pitch.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold hover:scale-[1.03] transition"
        >
          Get a Free Consultation →
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Our Pricing | ParshWebCraft",
  description:
    "Understand what goes into our pricing and why quality websites cost more than just design.",
};

const goldBox =
  "rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#f3d07a]/50 hover:shadow-[0_0_40px_rgba(243,208,122,0.15)]";

export default function WhyPricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Why Our Pricing Works</h1>
        <p className="text-slate-300">
          Transparent logic. No hidden costs. Built for long-term results.
        </p>
      </header>

      <section className={`mb-12 ${goldBox}`}>
        <h2 className="text-2xl font-semibold mb-3">
          Cheap Websites Cost More Later
        </h2>
        <p className="text-slate-300">
          Low-cost websites often fail in performance, SEO, and scalability.
          Businesses end up rebuilding within months — paying twice.
        </p>
      </section>

      <section className={`mb-12 ${goldBox}`}>
        <h2 className="text-2xl font-semibold mb-3">
          What You Actually Pay For
        </h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Custom-built layouts tailored to your business</li>

          <li>Performance & mobile optimization</li>
          <li>SEO-ready structure</li>
          <li>Scalable codebase</li>
          <li>Post-launch support clarity</li>
        </ul>
      </section>

      <section className={`mb-16 ${goldBox}`}>
        <h2 className="text-2xl font-semibold mb-3">
          Who Our Pricing Is NOT For
        </h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Businesses looking for the cheapest option</li>
          <li>One-day delivery expectations</li>
          <li>No long-term growth vision</li>
        </ul>
      </section>

      <div className="border border-[#f3d07a]/30 rounded-3xl bg-gradient-to-br from-[#f3d07a]/15 to-transparent p-10">
        <h3 className="text-2xl font-semibold mb-4">
          Want a website that actually grows your business?
        </h3>
        <div className="flex gap-4">
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium"
          >
            View Pricing
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold hover:shadow-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

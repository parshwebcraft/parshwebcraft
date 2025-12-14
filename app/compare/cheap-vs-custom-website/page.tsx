import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "₹8k Website vs Custom Website | ParshWebCraft",
  description:
    "A clear comparison between cheap websites and custom-built solutions.",
};

const row =
  "rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#f3d07a]/40 hover:shadow-[0_0_30px_rgba(243,208,122,0.15)]";

export default function CheapVsCustom() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">
        ₹8k Website vs Custom Website
      </h1>

      <div className="space-y-6">
        <div className={row}>
          <h3 className="font-semibold mb-2">Design</h3>
          <p className="text-slate-300">
            Cheap: Template-based<br />
            Custom: Designed for your business & audience
          </p>
        </div>

        <div className={row}>
          <h3 className="font-semibold mb-2">Performance & SEO</h3>
          <p className="text-slate-300">
            Cheap: Slow & SEO issues<br />
            Custom: Optimized from day one
          </p>
        </div>

        <div className={row}>
          <h3 className="font-semibold mb-2">Long-term Cost</h3>
          <p className="text-slate-300">
            Cheap: Rebuild required<br />
            Custom: Scales with your growth
          </p>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelancer vs Agency | ParshWebCraft",
  description:
    "Understand the difference between hiring a freelancer and a professional web agency.",
};

export default function FreelancerVsAgency() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">
        Freelancer vs Agency
      </h1>

      <ul className="space-y-4 text-slate-300">
        <li>✔ Single point dependency vs Team accountability</li>
        <li>✔ Limited support vs Structured delivery</li>
        <li>✔ Short-term build vs Long-term partnership</li>
      </ul>
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function KharkaMiningCaseStudy() {
  const reduce = useReducedMotion();

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* =========================
          HEADER
      ========================= */}
      <header className="mb-16">
        <span className="text-sm text-amber-400 font-semibold">
          Case Study · Industrial Asset Website
        </span>

        <h1 className="text-4xl font-extrabold mt-3 mb-4">
          Kharka Mining LLP — Mining Asset Website
        </h1>

        <p className="text-slate-300 max-w-3xl">
          A professional, investor-ready website built to present a large-scale
          mining asset, filter serious operators, and support structured
          discussions around contract operations and asset transfer.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="px-3 py-1 rounded-full border border-amber-400/40 text-amber-400">
            Live Project
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300">
            Mining & Industrial Asset
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300">
            Investor-Facing Website
          </span>
        </div>
      </header>

      {/* =========================
          PREVIEW
      ========================= */}
      <section className="mb-20">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/portfolio/kharka-mining-llp.png"
            alt="Kharka Mining LLP website preview"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <Link
            href="https://kharka-mining-llp.vercel.app/"
            target="_blank"
            className="text-amber-400 text-sm hover:underline"
          >
            View live website →
          </Link>

          <span className="text-slate-500 text-sm">
            Deployed on Vercel
          </span>
        </div>
      </section>

      {/* =========================
          CONTEXT
      ========================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Project Context
        </h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          Kharka Mining LLP operates a mining asset in Rajasthan with a long-term
          lease and multiple stakeholders. The challenge was not building a
          “marketing website”, but creating a serious, factual, and structured
          presentation suitable for experienced operators, investors, and
          industrial buyers.
        </p>

        <p className="text-slate-300 leading-relaxed">
          Previous outreach relied heavily on site visits and informal
          discussions, which resulted in mismatched expectations. The website
          needed to act as a first-level filter — attracting only relevant
          parties and clearly setting the engagement framework.
        </p>
      </section>

      {/* =========================
          PROBLEMS
      ========================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Problems to Solve
        </h2>

        <ul className="space-y-3 text-slate-300">
          <li>• No structured digital presentation of the mining asset</li>
          <li>• Unqualified inquiries and mismatched buyer expectations</li>
          <li>• Difficulty explaining partnership, contract, and transfer models</li>
          <li>• Need for a professional, neutral, non-salesy tone</li>
        </ul>
      </section>

      {/* =========================
          SOLUTION
      ========================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Solution Approach
        </h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          ParshWebCraft designed a clean, content-driven website focused on
          clarity, structure, and trust rather than visuals or hype.
        </p>

        <ul className="space-y-3 text-slate-300">
          <li>• Clear separation of contract operation vs asset transfer</li>
          <li>• Transparent partnership and governance explanation</li>
          <li>• Gallery and asset overview without sensitive disclosures</li>
          <li>• Contact flow designed for serious business inquiries only</li>
        </ul>
      </section>

      {/* =========================
          TECH STACK
      ========================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "Next.js (App Router)",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel Deployment",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-amber-400/30 text-amber-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* =========================
          OUTCOME
      ========================= */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Outcome & Impact
        </h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          The final website provides a single, authoritative reference point
          for all discussions related to the mining asset. It improves clarity,
          filters irrelevant inquiries, and supports long-term decision-making
          for contract operations and future takeover scenarios.
        </p>

        <p className="text-slate-300 leading-relaxed">
          This project demonstrates ParshWebCraft’s ability to handle
          high-context, high-trust industrial assets — not just standard
          business websites.
        </p>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative overflow-hidden rounded-2xl
          border border-amber-400/30
          bg-[#0b1220]
          p-10
          text-center
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">
            Need a Serious, Asset-Focused Website?
          </h3>
          <p className="text-slate-300 mb-6">
            If you’re dealing with real assets, complex stakeholders, or
            high-value decisions, we design systems that prioritize clarity,
            trust, and long-term usability.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold hover:brightness-95 transition"
          >
            Discuss Your Project
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

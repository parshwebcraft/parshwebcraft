"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BahubaliCabsCaseStudy() {
  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-5xl mx-auto py-20">
        {/* ================= HEADER ================= */}
        <header className="mb-16">
          <span className="inline-block text-sm text-[#f3d07a] font-semibold mb-3">
            Live Client Project · Local Business Website
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Bahubali Cabs — Taxi Service Website (Udaipur)
          </h1>

          <p className="text-slate-300 max-w-3xl leading-relaxed">
            Bahubali Cabs is a Udaipur-based taxi service offering local rides,
            airport transfers, and Rajasthan outstation travel. The goal of this
            project was to build a conversion-focused, mobile-first website that
            ranks locally and drives direct WhatsApp and call bookings.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-[rgba(243,208,122,0.1)] text-[#f3d07a]">
              Local SEO
            </span>
            <span className="px-3 py-1 rounded-full bg-[rgba(243,208,122,0.1)] text-[#f3d07a]">
              Lead Generation
            </span>
            <span className="px-3 py-1 rounded-full bg-[rgba(243,208,122,0.1)] text-[#f3d07a]">
              Mobile First
            </span>
            <span className="px-3 py-1 rounded-full bg-[rgba(243,208,122,0.1)] text-[#f3d07a]">
              Rajasthan Travel
            </span>
          </div>
        </header>

        {/* ================= HERO IMAGE ================= */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-16 border border-[rgba(255,255,255,0.06)]">
          <Image
            src="/portfolio/bahubali-cabs.jpg"
            alt="Bahubali Cabs Website Preview"
            fill
            className="object-cover"
          />
        </div>

        {/* ================= PROBLEM ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            The business relied heavily on offline references and lacked a
            strong digital presence. Competitors were already capturing local
            search traffic on Google for terms like “best taxi service in
            Udaipur” and “Udaipur airport cab”.
            <br />
            <br />
            The challenge was to create a professional website that:
          </p>

          <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-6">
            <li>Builds instant trust for first-time visitors</li>
            <li>Works flawlessly on mobile devices</li>
            <li>Encourages direct calls and WhatsApp bookings</li>
            <li>Supports long-term local SEO growth</li>
          </ul>
        </section>

        {/* ================= SOLUTION ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            We designed and developed a clean, conversion-optimized taxi service
            website with a strong Rajasthan identity. The layout prioritizes
            clarity, speed, and action-oriented CTAs.
          </p>

          <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-6">
            <li>Hero section with strong visual branding</li>
            <li>Instant call & WhatsApp floating CTAs</li>
            <li>Dedicated routes section for SEO</li>
            <li>Mobile-first layout with fast load times</li>
            <li>Clear trust signals and service highlights</li>
          </ul>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "React",
              "Tailwind CSS",
              "Framer Motion",
              "Vercel Hosting",
              "SEO-Optimized Markup",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-[rgba(243,208,122,0.25)] px-3 py-1 rounded text-[#f3d07a]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ================= OUTCOME ================= */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Outcome & Impact</h2>

          <ul className="space-y-3 text-slate-300 list-disc pl-6 max-w-3xl">
            <li>Professional online presence for a local taxi business</li>
            <li>Improved credibility with new customers</li>
            <li>Direct lead generation without third-party platforms</li>
            <li>SEO-ready structure for ranking growth</li>
          </ul>
        </section>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            relative overflow-hidden rounded-2xl
            border border-[rgba(243,208,122,0.28)]
            bg-[#0b1220]
            p-10
            text-center
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">
              Want a Website Like This for Your Business?
            </h3>
            <p className="text-slate-300 mb-6">
              If you run a local business and want a high-conversion website
              focused on leads and growth, let’s discuss your requirements.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold hover:brightness-95 transition"
            >
              Discuss Your Project
            </Link>

            <div className="mt-4">
              <Link
                href="https://bahubali-cabs.vercel.app/"
                target="_blank"
                className="text-sm text-[#f3d07a] hover:underline"
              >
                View live project →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

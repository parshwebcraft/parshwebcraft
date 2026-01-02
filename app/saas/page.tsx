"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SaaSPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-28 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto">
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium">
            SaaS Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Production-Ready SaaS Products
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            We design and build scalable SaaS platforms that are ready for real
            users, real traffic, and real business growth.
          </p>
        </div>

        {/* ================= FEATURED SAAS ================= */}
        <div className="rounded-3xl border border-[#f3d07a55] bg-[#0b0f19] p-10 mb-24">
          <span className="text-[#f3d07a] font-semibold text-sm">
            🚀 Featured SaaS Product
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            FreshMart — Hyperlocal Grocery & Order Management App
          </h2>

          <p className="text-slate-300 mt-4 max-w-4xl">
            FreshMart is a Blinkit / Grocbay-style hyperlocal grocery delivery
            platform designed for local stores and city-level operations. It
            includes a customer-facing ordering app and a powerful admin
            dashboard for store owners.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Feature text="Variant-based product catalog (Grocbay-grade)" />
            <Feature text="Customer app with cart, checkout & orders" />
            <Feature text="Admin dashboard with orders & revenue reports" />
            <Feature text="Banner & promotion management" />
            <Feature text="Address & delivery management" />
            <Feature text="Scalable FastAPI + MongoDB backend" />
          </div>

          {/* ================= GOLDEN REVEAL CTA ================= */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={
                !reduce
                  ? {
                      boxShadow:
                        "0 12px 40px rgba(18,24,38,0.65), 0 0 42px rgba(243,208,122,0.28)",
                      scale: 1.015,
                    }
                  : undefined
              }
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="
                relative overflow-hidden rounded-2xl
                border border-[rgba(243,208,122,0.28)]
                bg-[#0b1220]
                p-8 md:p-10
                flex flex-col md:flex-row
                items-center justify-between gap-6
              "
            >
              {/* Gold Glow Layer */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
                "
              />

              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Want to See FreshMart in Action?
                </h3>
                <p className="text-slate-300">
                  Request a guided demo to understand how FreshMart can work for
                  your grocery store or local delivery business.
                </p>
              </div>

              <a
                href="/contact"
                className="
                  relative z-10
                  inline-flex items-center justify-center
                  px-8 py-4
                  rounded-full
                  bg-[#f3d07a]
                  text-black
                  font-semibold
                  hover:brightness-95
                  transition
                "
              >
                Request FreshMart Demo
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= WHY SAAS ================= */}
        <div className="text-center mb-24">
          <h3 className="text-3xl font-bold text-white">
            Why Choose Our SaaS Solutions?
          </h3>

          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            Our SaaS products are not prototypes. They are production-ready
            platforms built with scalability, performance, and real business
            operations in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Reason
              title="Production-Ready"
              text="Built with real-world use cases, security, and performance in mind."
            />
            <Reason
              title="Customizable"
              text="White-label, custom branding, and feature extensions available."
            />
            <Reason
              title="Scalable"
              text="Designed to grow from local businesses to city-wide operations."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-300">
      <span className="text-[#f3d07a] mt-1">✔</span>
      <span>{text}</span>
    </div>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-[#2a2a2a]">
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-slate-300 mt-3">{text}</p>
    </div>
  );
}

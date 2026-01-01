"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function FreshmartSaaSPage() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-24 bg-black text-white">
      {/* =========================
         HERO
      ========================= */}
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="text-[#f3d07a]">FreshMart</span> – Hyperlocal Grocery
          Ordering SaaS
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto"
        >
          A Blinkit / Grocbay-style grocery ordering system built for local
          stores, franchises, and hyperlocal startups. Launch your own branded
          grocery platform with admin control, payments, and real-time orders.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
          >
            Request Demo
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-slate-600 text-slate-200"
          >
            Talk to Us
          </Link>
        </motion.div>
      </section>

      {/* =========================
         SCREENSHOT PLACEHOLDERS
      ========================= */}
      <section className="max-w-6xl mx-auto mt-28">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
        >
          Product Preview
        </motion.h2>

        <p className="text-center text-slate-400 mt-3">
          Real screenshots will be added here
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {["Home", "Cart & Checkout", "Admin Dashboard"].map((label, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-48 rounded-xl border border-[#2a2a2a] flex items-center justify-center text-slate-500"
            >
              {label} Screenshot
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         FEATURES
      ========================= */}
      <section className="max-w-6xl mx-auto mt-28">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            "Variant-based product system",
            "Real-time cart & checkout",
            "Razorpay payment integration",
            "Admin order & revenue management",
            "Banner & category promotions",
            "Scalable SaaS-ready architecture",
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-xl border border-[#2a2a2a] bg-transparent"
            >
              <p className="text-slate-200">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         WHO IS THIS FOR
      ========================= */}
      <section className="max-w-5xl mx-auto mt-28 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Who Is This For?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            "Local grocery & kirana stores",
            "Hyperlocal delivery startups",
            "Retail chains & franchises",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-[#2a2a2a]"
            >
              <p className="text-slate-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         FINAL CTA
      ========================= */}
      <section className="max-w-4xl mx-auto mt-28 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Want This System for Your Business?
        </motion.h2>

        <p className="text-slate-400 mt-4">
          Get a ready-to-launch grocery SaaS customized for your brand and
          operations.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
          >
            Get Demo
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-slate-600 text-slate-200"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}

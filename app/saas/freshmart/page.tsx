"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FreshmartSaaSPage() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = !reduce
    ? {
        y: -6,
        scale: 1.02,
        boxShadow:
          "0 12px 40px rgba(18,24,38,0.6), 0 0 32px rgba(243,208,122,0.22)",
      }
    : {};

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
         PRODUCT PREVIEW
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
          Real screenshots from the FreshMart system
        </p>

        <div className="relative w-full aspect-[9/16] bg-black">
          {[
            {
              src: "/freshmart/home.png",
              label: "Customer App – Home",
            },
            {
              src: "/freshmart/cart-checkout.png",
              label: "Cart & Checkout Flow",
            },
            {
              src: "/freshmart/admin-dashboard.png",
              label: "Admin Dashboard",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={cardHover}
              className="rounded-xl border border-[#2a2a2a] bg-[#0b1220] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={`${item.label} – FreshMart grocery SaaS`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />

              <div className="p-4 text-center">
                <p className="text-sm text-slate-300">{item.label}</p>
              </div>
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
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={cardHover}
              className="
          group relative
          p-6 rounded-2xl
          border border-[#2a2a2a]
          bg-[#0b1220]
          transition
        "
            >
              {/* subtle gold glow layer */}
              <div
                className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
          opacity-0 group-hover:opacity-100 transition
        "
              />

              <p className="relative z-10 text-slate-200 font-medium">
                {feature}
              </p>

              <span className="relative z-10 mt-3 inline-block text-sm text-[#f3d07a] opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </span>
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
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={cardHover}
              className="
          group relative
          p-6 rounded-2xl
          border border-[#2a2a2a]
          bg-[#0b1220]
          transition
        "
            >
              <div
                className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-[radial-gradient(circle_at_bottom_right,rgba(243,208,122,0.18),transparent_60%)]
          opacity-0 group-hover:opacity-100 transition
        "
              />

              <p className="relative z-10 text-slate-300 font-medium">{item}</p>

              <span className="relative z-10 mt-3 inline-block text-sm text-[#f3d07a] opacity-0 group-hover:opacity-100 transition">
                Perfect fit →
              </span>
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

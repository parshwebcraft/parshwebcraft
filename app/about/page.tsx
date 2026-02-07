"use client";

import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/**
 * Client-only About page
 */

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeInOut: [number, number, number, number] = [0.65, 0, 0.35, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
      duration: 0.45,
      ease: easeOut,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeInOut },
  },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About ParshWebCraft</title>
        <meta
          name="description"
          content="Why ParshWebCraft exists, who it is built for, and how we design websites, SaaS platforms, and internal systems with clarity and long-term thinking."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* ================= HERO ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto py-20"
        >
          <motion.h1 variants={itemUp} className="text-5xl font-extrabold mb-4">
            About <span className="text-[#f3d07a]">ParshWebCraft</span>
          </motion.h1>

          <motion.p
            variants={itemUp}
            className="text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            ParshWebCraft exists to help businesses build clear, reliable, and
            future-ready digital products — from high-performance websites to
            custom SaaS platforms and internal business systems.
          </motion.p>
        </motion.section>

        {/* ================= ORIGIN STORY ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div
            variants={itemUp}
            className="glass p-8 rounded-xl"
            whileHover={glowHover}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Why ParshWebCraft Started
            </h2>

            <p className="text-slate-300 leading-relaxed">
              ParshWebCraft didn’t begin as a startup idea — it began with a
              pattern I kept noticing.
              <br />
              <br />
              Local businesses and service providers were either using outdated
              websites or had no digital presence at all. Many invested in
              low-cost websites that looked acceptable on the surface but failed
              in performance, mobile usability, SEO, and long-term stability.
            </p>

            <p className="mt-4 text-slate-300">
              ParshWebCraft was built to fix that gap — not by selling templates,
              but by creating dependable digital systems businesses can rely on
              as they grow.
            </p>
          </motion.div>
        </motion.section>

        {/* ================= WHO WE HELP ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-6">
            Who ParshWebCraft Is For
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Local Businesses",
                body: "Shops and service providers who want systems that actually work day-to-day.",
              },
              {
                title: "Coaching & Education",
                body: "Institutes that need trust-focused websites or scalable learning platforms.",
              },
              {
                title: "Growing Brands",
                body: "Businesses ready to scale with reliable and maintainable systems.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={itemUp}
                whileHover={glowHover}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-slate-300 mt-2">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= WHAT WE BUILD ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-6">
            What We Build
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Business Websites",
                body: "Fast, SEO-optimized websites built for trust and conversions.",
              },
              {
                title: "SaaS & Web Applications",
                body: "Custom SaaS platforms designed for real business workflows.",
              },
              {
                title: "Internal Systems",
                body: "Admin dashboards and automation tools for daily operations.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={itemUp}
                whileHover={glowHover}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-slate-300 mt-2">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= PARSHVYAPAR ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div
            variants={itemUp}
            whileHover={glowHover}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="glass p-8 rounded-xl border border-[#f3d07a33]"
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-sm font-semibold bg-[#f3d07a22] text-[#f3d07a]">
              Founder-Built SaaS
            </span>

            <h2 className="text-3xl font-bold mb-4">
              ParshVyapar — A Live SaaS Built In-House
            </h2>

            <p className="text-slate-300 leading-relaxed max-w-3xl">
              ParshVyapar is our own production-ready SaaS product — a billing
              and inventory management system built for Indian retail shops.
              It handles billing, GST invoices, stock tracking, and business
              reports in real operational environments.
            </p>

            <p className="text-slate-300 leading-relaxed max-w-3xl mt-4">
              Building and running ParshVyapar internally shapes how we approach
              every project — focusing on real workflows, data safety,
              performance, and long-term maintainability.
            </p>

            <div className="mt-6">
              <Link
                href="/saas/parshvyapar"
                className="text-[#f3d07a] font-semibold hover:underline"
              >
                View ParshVyapar case study →
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* ================= FOUNDER ================= */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <motion.div
            variants={itemUp}
            whileHover={glowHover}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="glass p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="/images/gauransh-founder.png"
                    alt="Gauransh Jaroli – Founder of ParshWebCraft"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">About the Founder</h2>

                <p className="text-slate-300 leading-relaxed">
                  I’m <strong>Gauransh Jaroli</strong>, Founder of{" "}
                  <strong>ParshWebCraft</strong>. I build scalable web platforms,
                  SaaS applications, and internal business systems with a strong
                  focus on clarity and long-term usability.
                </p>

                <p className="mt-4 text-slate-400">
                  The goal is simple — help businesses grow without confusion or
                  technical debt.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}

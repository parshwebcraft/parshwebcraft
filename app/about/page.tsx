// app/about/page.tsx
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
          content="Why ParshWebCraft exists, who it is built for, and how we build websites, SaaS platforms, and internal systems with clarity and honesty."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* Hero */}
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
            ParshWebCraft was created to help businesses build honest,
            professional, and future-ready digital products — from
            high-performance websites to custom SaaS platforms and internal
            business systems.
          </motion.p>
        </motion.section>

        {/* Origin Story */}
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
            <h2 className="text-3xl font-bold mb-4">Why ParshWebCraft Started</h2>

            <p className="text-slate-300 leading-relaxed">
              ParshWebCraft didn’t start as a business idea — it started as a
              problem I saw around me.
              <br />
              <br />
              Local businesses, coaching institutes, and service providers were
              either struggling with outdated websites or had no online presence
              at all. Many paid for cheap websites that looked fine but failed in
              speed, mobile experience, SEO, and long-term maintainability.
            </p>

            <p className="mt-4 text-slate-300">
              I built ParshWebCraft to change that — by offering not just
              websites, but complete digital systems that businesses can rely on
              as they grow. This includes scalable websites, internal dashboards,
              and SaaS-style applications designed for real-world usage.
            </p>
          </motion.div>
        </motion.section>

        {/* Who We Help */}
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
                body: "Shops, services, and startups that want a strong online presence without technical confusion.",
              },
              {
                title: "Coaching & Education",
                body: "Institutes that need trust, clarity, and scalable digital platforms — not just brochure websites.",
              },
              {
                title: "Growing Brands",
                body: "Businesses ready to scale with systems that won’t break after a few months.",
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

        {/* What We Build */}
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
                body: "Fast, SEO-optimized, and mobile-first websites built to establish trust and generate leads.",
              },
              {
                title: "SaaS & Web Applications",
                body: "Custom SaaS platforms and web applications built to solve specific business problems and scale over time.",
              },
              {
                title: "Internal Business Systems",
                body: "Dashboards, admin panels, and workflow or inventory systems designed for clarity and daily use.",
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

        {/* How We Work */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-6">
            How We Work
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Honest Solutions",
                body: "No over-promises, no fake guarantees. Only solutions that genuinely help your business operate better and scale responsibly.",
              },
              {
                title: "Built for Performance",
                body: "Fast loading, mobile-first, and structured for long-term scalability.",
              },
              {
                title: "Clear Communication",
                body: "We explain things simply so you always know what you’re paying for and why.",
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

        {/* Founder */}
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
            className="glass p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="/images/gauransh .png"
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
                  I’m{" "}
                  <span className="text-white font-semibold">
                    Gauransh Jaroli
                  </span>
                  , Founder of{" "}
                  <span className="text-white font-semibold">
                    ParshWebCraft
                  </span>
                  . I build reliable, scalable web platforms — including
                  websites, SaaS applications, and internal business systems —
                  with a strong focus on clarity, performance, and real-world
                  usability.
                </p>

                <p className="mt-4 text-slate-400">
                  My goal is simple — help businesses grow online without
                  confusion, shortcuts, or technical debt.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-4">
            Ready to Build Something Meaningful?
          </motion.h2>

          <motion.p variants={itemUp} className="text-slate-300 mb-8">
            If you value clarity, quality, and long-term growth, let’s talk.
          </motion.p>

          <motion.div variants={itemUp}>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-md font-semibold text-black
              bg-gradient-to-br from-[#f3d07a] to-[#e6c35a]
              hover:scale-[1.03] transition
              shadow-[0_6px_24px_rgba(243,208,122,0.35)]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}

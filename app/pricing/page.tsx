"use client";

import Head from "next/head";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

/* ================= TYPES ================= */

type PricingPlan = {
  key: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
};

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

/* ================= HELPERS ================= */

function parseOneTimePrice(priceStr: string): number | null {
  const digits = priceStr.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

function formatINR(num: number): string {
  return "₹" + new Intl.NumberFormat("en-IN").format(Math.round(num));
}

/* ================= COMPONENT ================= */

export default function PricingPage(): React.ReactElement {
  const reduce = useReducedMotion();

  const glowHover = {
    scale: 1.02,
    boxShadow: "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18)",
  };

  const ADDONS = {
    seo: 2999,
    hosting: 500,
    maintenance: 500,
  };

  const recurringTotal = ADDONS.seo + ADDONS.hosting + ADDONS.maintenance;

  /* ================= PLANS ================= */

  const primaryPlans: PricingPlan[] = [
    {
      key: "starter",
      name: "Starter Presence",
      price: "₹4,999",
      subtitle: "Basic online presence for small local businesses.",
      features: [
        "Single Page Website",
        "Mobile Responsive Layout",
        "Business Details & Services",
        "Google Map Embed",
        "Direct Call Button",
        "Free Hosting + Domain (1 Year)",
        "Delivery: 3–5 Days",
      ],
    },
    {
      key: "business",
      name: "Business Growth",
      price: "₹14,999",
      subtitle: "Designed to generate enquiries and real customers.",
      popular: true,
      features: [
        "6–8 Professional Pages",
        "Premium UI/UX Design",
        "WhatsApp Enquiry Integration",
        "Contact & Lead Forms",
        "Local SEO Setup",
        "Analytics & Tracking",
        "Free Hosting + Domain (1 Year)",
        "Delivery: 7–10 Days",
      ],
    },
    {
      key: "premium",
      name: "Premium Website",
      price: "₹34,999+",
      subtitle: "Conversion-focused website with booking or enquiry.",
      features: [
        "10–15 Pages",
        "High-Conversion Landing Page",
        "Booking / Enquiry Flow",
        "Basic Payment Setup",
        "Performance + SEO Optimization",
        "Automation & Lead CRM",
        "Delivery: 10–15 Days",
      ],
    },
  ];

  const advancedPlans: PricingPlan[] = [
    {
      key: "saas",
      name: "SaaS Platform Development",
      price: "₹1,20,000+",
      subtitle: "Custom SaaS platforms & web applications.",
      features: [
        "Custom SaaS Architecture",
        "User Authentication & Roles",
        "Admin Dashboard",
        "Subscription / Payment Integration",
        "Scalable Backend & APIs",
        "Security & Performance Optimization",
      ],
    },
    {
      key: "enterprise",
      name: "Enterprise (Custom)",
      price: "Contact",
      subtitle: "Large-scale systems & marketplaces.",
      features: [
        "Full Custom Development",
        "E-commerce / Marketplace",
        "Advanced Integrations & APIs",
        "Dedicated Hosting",
        "Analytics & Automation",
        "Priority Support",
      ],
    },
  ];

  /* ================= CARD RENDER ================= */

  const renderPlanCard = (plan: PricingPlan): React.ReactElement => {
    const oneTime = parseOneTimePrice(plan.price);
    const firstMonthTotal = oneTime !== null ? oneTime + recurringTotal : null;

    const isPopular = plan.popular === true;

    return (
      <motion.div
        key={plan.key}
        className={`glass p-6 rounded-2xl flex flex-col justify-between relative border ${
          isPopular ? "border-[#f3d07a]" : "border-[rgba(255,255,255,0.05)]"
        }`}
        variants={fadeUp}
        whileHover={!reduce ? glowHover : undefined}
      >
        {isPopular && (
          <div className="absolute -top-3 right-4">
            <span className="px-3 py-1 text-xs font-semibold bg-[#f3d07a] text-black rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <div className="text-3xl font-extrabold mt-3">{plan.price}</div>
          <p className="text-sm text-slate-300 mt-2">{plan.subtitle}</p>

          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-[#f3d07a]">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          {firstMonthTotal !== null && (
            <div className="text-xs text-slate-400 mb-3">
              With add-ons:{" "}
              <span className="text-slate-200 font-medium">
                {formatINR(firstMonthTotal)}
              </span>
            </div>
          )}

          <Link
            href="/contact"
            className={`block text-center px-4 py-3 rounded-full font-semibold transition ${
              isPopular
                ? "bg-[#f3d07a] text-black shadow-lg"
                : "border border-[rgba(255,255,255,0.08)] text-slate-200 hover:bg-[#f3d07a] hover:text-black"
            }`}
          >
            {plan.key === "enterprise" || plan.key === "saas"
              ? "Request Quote"
              : "Choose Plan"}
          </Link>
        </div>
      </motion.div>
    );
  };

  /* ================= RENDER ================= */

  return (
    <>
      <Head>
        <title>
          Website & SaaS Development Pricing in Udaipur | ParshWebCraft
        </title>
        <meta
          name="description"
          content="Transparent website and SaaS development pricing by ParshWebCraft. Clear plans for businesses, startups, and enterprises in India."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* ================= PRICING HEADER (RESTORED) ================= */}
        <section className="max-w-4xl mx-auto text-center py-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm text-[#f3d07a] font-semibold"
          >
            Our Pricing
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold mt-3"
          >
            Simple & Transparent{" "}
            <span className="text-[#f3d07a]">Pricing Plans</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-300 mt-4 max-w-2xl mx-auto"
          >
            Choose a plan based on your business stage — from basic online
            presence to advanced SaaS platforms and enterprise systems.
          </motion.p>
        </section>

        {/* PRIMARY PLANS */}
        <section className="max-w-6xl mx-auto py-6">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {primaryPlans.map(renderPlanCard)}
          </motion.div>
        </section>

        {/* ADVANCED PLANS */}
        <section className="max-w-5xl mx-auto py-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-2xl font-extrabold text-center mb-6"
          >
            Advanced & Custom Solutions
          </motion.h2>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advancedPlans.map(renderPlanCard)}
          </motion.div>
        </section>

        {/* SMART COMPARISON LINKS */}
        <section className="max-w-4xl mx-auto py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold mb-3">
              Confused between options?
            </h3>

            <p className="text-slate-300 text-sm mb-6 max-w-2xl">
              Before choosing a plan, understand the real difference between
              cheap websites, custom builds, freelancers, and agencies. These
              comparisons help you make the right long-term decision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/compare/cheap-vs-custom-website"
                className="text-sm font-medium text-[#f3d07a] hover:underline"
              >
                ₹8k website vs custom website →
              </Link>

              <Link
                href="/compare/freelancer-vs-agency"
                className="text-sm font-medium text-[#f3d07a] hover:underline"
              >
                Freelancer vs Agency — what’s better for business? →
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

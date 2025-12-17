"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14, willChange: "opacity, transform" },
  visible: { opacity: 1, y: 0, willChange: "opacity, transform" },
};

function parseOneTimePrice(priceStr: string | undefined | null): number | null {
  if (!priceStr || typeof priceStr !== "string") return null;
  // remove non-digits (keeps numerals only)
  const digits = priceStr.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

function formatINR(num: number | null | undefined): string {
  if (num == null || !Number.isFinite(num)) return "";
  // Use Intl.NumberFormat for proper grouping (en-IN)
  return "₹" + new Intl.NumberFormat("en-IN").format(Math.round(num));
}

export default function PricingPage(): React.ReactElement {
  const reduce = useReducedMotion();

  // exact same glow used on About page
  const glowHover = {
    scale: 1.02,
    boxShadow:
      "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
  };

  // recurring addon prices (standardized)
  const ADDONS = {
    seo: 2999, // per month
    hosting: 500, // per month
    maintenance: 500, // per month
  };
  const recurringTotal = ADDONS.seo + ADDONS.hosting + ADDONS.maintenance; // 3999

  const plans = [
    {
      key: "starter",
      name: "Starter Presence",
      price: "₹4,999",
      subtitle: "Basic online presence for small local businesses.",
      features: [
        "Single Page Website (Home + Contact Info)",
        "Mobile Responsive Layout",
        "Business Details & Services Overview",
        "Google Map Embed",
        "Call Button (Direct Call Only)",
        "Basic On-page Setup (No SEO)",
        "Free Hosting + Domain (1 Year)",
        "Delivery: 3–5 Days",
      ],
    },

    {
      key: "business",
      name: "Business Growth",
      price: "₹14,999",
      subtitle: "Designed to generate enquiries, leads & real customers.",
      popular: true,
      features: [
        "6–8 Professional Pages",
        "Premium UI/UX with Trust-focused Design",
        "WhatsApp Enquiry Integration (Primary CTA)",
        "Contact & Lead Generation Forms",
        "Google Map + Business Profile Integration",
        "Basic SEO Setup (Local Search Ready)",
        "Website Speed & Security Optimization",
        "Visitor Analytics & Tracking",
        "Free Hosting + Domain (1 Year)",
        "Delivery: 7–10 Days",
      ],
    },

    {
      key: "premium",
      name: "Premium Website",
      price: "₹34,999+",
      subtitle:
        "Conversion-focused website with booking or product enquiry (not full app).",
      features: [
        "10–15 Pages",
        "High-Conversion Landing Page",
        "Booking System OR Product Enquiry Flow",
        "Basic Payment Setup (Booking / Advance / COD info)",
        "Performance + SEO Optimization",
        "Lead CRM + WhatsApp / Email Automation",
        "Free Hosting + Domain (1 Year)",
        "Delivery: 10–15 Days",
      ],
    },
    {
      key: "enterprise",
      name: "Enterprise (Custom)",
      price: "Contact",
      subtitle:
        "Custom apps, full e-commerce systems, marketplaces & automation.",
      features: [
        "Custom Pages (12+)",
        "Full E-commerce / App Development",
        "Cart, Orders, Stock & Admin Panel",
        "Custom Integrations & APIs",
        "Advanced SEO & Brand Strategy",
        "Dedicated Hosting & Priority Support",
        "Analytics, Dashboards & Automation",
        "Delivery: Quote-based",
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-6xl mx-auto py-12">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            className="inline-block text-sm text-[#f3d07a] font-semibold"
            variants={fadeUp}
            transition={{ duration: 0.36 }}
          >
            Our Plans
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            Simple & Transparent{" "}
            <span className="text-[#f3d07a]">Pricing Plans</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 mt-4 max-w-2xl"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.02 }}
          >
            Choose a plan that suits your business. No hidden charges — just
            premium websites built for performance and conversions.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.04 }}
        >
          <Link
            href="/pricing/why"
            className="inline-block mt-4 text-sm text-[#f3d07a] hover:underline"
          >
            Why our pricing makes sense →
          </Link>
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.06 }}
        >
          <Link
            href="/contact?intent=free-review"
            className="inline-block mt-2 text-sm text-slate-300 hover:text-[#f3d07a] transition"
          >
            Not sure which plan fits?{" "}
            <span className="text-[#f3d07a] font-medium">
              Get a free website review →
            </span>
          </Link>
        </motion.div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-6xl mx-auto py-6">
        <motion.div
          className="grid gap-6 md:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {plans.map((plan, i) => {
            const oneTime = parseOneTimePrice(plan.price);
            const firstMonthTotal =
              oneTime !== null ? oneTime + recurringTotal : null;

            return (
              <motion.div
                key={plan.key}
                className={`glass p-6 rounded-2xl relative flex flex-col justify-between border border-[rgba(255,255,255,0.04)] group`}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                whileHover={!reduce ? glowHover : undefined}
                whileTap={reduce ? { scale: 0.98 } : { scale: 0.99 }}
                style={{ willChange: "transform" }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 right-3">
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f3d07a] text-black shadow-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                  </div>

                  <div className="mt-4">
                    <div>
                      <div className="text-3xl font-extrabold">
                        {plan.price}
                      </div>
                      <div className="text-sm text-slate-300 mt-1">
                        {plan.subtitle}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-slate-300">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="text-[#f3d07a] mt-0.5">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ===== MOVE ADD-ON NOTE HERE (above the CTA) ===== */}
                <div className="mt-6">
                  {plan.key === "enterprise" ? (
                    <div className="text-xs text-slate-400 text-center mb-3">
                      Contact for custom pricing & add-ons
                    </div>
                  ) : (
                    <div className="text-sm text-slate-300 bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.03)] rounded-md p-3 mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="text-xs text-slate-400">
                          Add SEO / Hosting / Maintenance →
                          <span className="ml-2 text-[#f3d07a] font-semibold">
                            +{formatINR(recurringTotal)}/mo
                          </span>
                        </div>
                        {firstMonthTotal !== null && (
                          <div className="text-xs text-slate-400 text-right">
                            First month (one-time + addons):{" "}
                            <span className="text-slate-200 font-medium">
                              {formatINR(firstMonthTotal)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-400 mt-2">
                        You can add any combination — SEO, hosting or
                        maintenance. Exact quote provided on request.
                      </div>
                    </div>
                  )}

                  {/* CTA button */}
                  <motion.div
                    whileHover={
                      !reduce
                        ? {
                            scale: 1.06,
                            boxShadow: "0 8px 26px rgba(243,208,122,0.18)",
                          }
                        : undefined
                    }
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    style={{ willChange: "transform" }}
                    className="rounded-full"
                  >
                    <Link
                      href="/contact"
                      className={`block w-full text-center px-4 py-3 font-semibold rounded-full ${
                        plan.popular
                          ? "bg-[#f3d07a] text-black"
                          : plan.key === "enterprise"
                          ? "bg-transparent border border-[rgba(255,255,255,0.06)] text-slate-200"
                          : "bg-transparent border border-[rgba(255,255,255,0.06)] text-slate-200"
                      }`}
                    >
                      {plan.key === "enterprise"
                        ? "Contact for Quote"
                        : "Choose Plan"}
                    </Link>
                  </motion.div>

                  <div className="text-xs text-slate-400 text-center mt-3">
                    Need customization?{" "}
                    <Link href="/contact" className="text-[#f3d07a]">
                      Contact us
                    </Link>
                  </div>
                </div>
                {/* ===== end moved block ===== */}
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <section className="max-w-6xl mx-auto py-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={!reduce ? glowHover : undefined}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="glass p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-semibold">
              Not sure which plan is right for you?
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Get a free, honest review of your website or business needs.
            </p>
          </div>

          <Link
            href="/contact?intent=free-review"
            className="px-5 py-3 rounded-full font-semibold text-black
                 bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                 hover:scale-[1.03] transition
                 shadow-[0_6px_24px_rgba(243,208,122,0.35)]"
          >
            Free Website Review →
          </Link>
        </motion.div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="max-w-6xl mx-auto py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="text-sm text-[#f3d07a] font-semibold">
              Comparison
            </span>
            <h2 className="text-2xl font-extrabold mt-2">
              What’s Included in Each Plan
            </h2>
            <p className="text-slate-300 mt-2 max-w-2xl">
              See which plan fits your exact business needs.
            </p>
          </div>

          <div className="wj-card overflow-x-auto bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="text-left text-slate-300/90">
                  <th className="py-3 pl-4">Features</th>
                  <th className="py-3">Starter</th>
                  <th className="py-3">Business Growth</th>
                  <th className="py-3">Premium Marketing</th>
                  <th className="py-3">Enterprise</th>
                </tr>
              </thead>

              <tbody className="text-slate-300">
                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Pages Included</td>
                  <td className="text-center">1–5</td>
                  <td className="text-center">6–8</td>
                  <td className="text-center">10–15</td>
                  <td className="text-center">Custom</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Modern UI/UX</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔ (Premium)</td>
                  <td className="text-center">✔ (Conversion)</td>
                  <td className="text-center">✔ (Custom)</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Animations</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Premium</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced + Branding</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Responsiveness</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">E-commerce</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic Shop</td>
                  <td className="text-center">Full E-commerce</td>
                  <td className="text-center">Custom Marketplace</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Booking System</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced + Events</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">SEO Optimization</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Optimized</td>
                  <td className="text-center">Full SEO</td>
                  <td className="text-center">Full + Branding SEO</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Hosting + Domain</td>
                  <td className="text-center">✔ (1yr)</td>
                  <td className="text-center">✔ (1yr)</td>
                  <td className="text-center">✔ (1yr)</td>
                  <td className="text-center">Managed</td>
                </tr>

                <tr className="border-t border-[rgba(255,255,255,0.04)]">
                  <td className="py-3 pl-4">Recommended Monthly Add-ons</td>
                  <td className="text-center">
                    {formatINR(recurringTotal)}/mo
                  </td>
                  <td className="text-center">
                    {formatINR(recurringTotal)}/mo
                  </td>
                  <td className="text-center">
                    {formatINR(recurringTotal)}/mo
                  </td>
                  <td className="text-center">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="wj-cta-band glass p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4"
            whileHover={!reduce ? glowHover : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <div>
              <h3 className="text-xl font-semibold">
                Need Help Choosing a Plan?
              </h3>
              <p className="text-slate-300">
                Contact us — we’ll guide you to the best plan for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-3 md:mt-0 inline-block px-5 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
            >
              Contact Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const WA_URL =
  "https://wa.me/919521347419?text=Hi%20ParshWebCraft%2C%20I%20want%20to%20know%20which%20plan%20fits%20my%20business.";

const plans = [
  {
    name: "Starter Website",
    price: "₹17,999",
    tagline: "A high-performance custom single-page presence built with Next.js.",
    features: [
      "Single-page premium Next.js website",
      "Clean headless speed & mobile-first UI",
      "Framer motion page micro-animations",
      "Smart contact forms & lead capture",
      "Delivery: 3–5 working days",
    ],
    cta: "Choose Starter",
    href: "/pricing#starter",
    featured: false,
  },
  {
    name: "Business Website",
    price: "₹34,999",
    tagline: "Built to attract enquiries, build trust, and rank high on search engines.",
    features: [
      "6–8 custom Next.js pages",
      "Bespoke UI/UX design & motion",
      "WhatsApp & smart lead forms",
      "Local SEO optimization foundation",
      "Advanced security headers built-in",
      "Delivery: 7–10 working days",
    ],
    cta: "Most Chosen — Get Started",
    href: "/pricing#business",
    featured: true,
    badge: "Most Chosen",
  },
  {
    name: "Premium Website",
    price: "₹59,999",
    tagline: "For brands seeking advanced automation, custom databases, and scaling.",
    features: [
      "10–15 custom pages & sections",
      "Conversion-focused design flows",
      "Booking or enquiry calendars",
      "AI Chatbot integration out-of-the-box",
      "Advanced performance tuning",
      "Delivery: 15–20 working days",
    ],
    cta: "Request Quote",
    href: "/pricing#premium",
    featured: false,
  },
];

export default function PricingTeaser() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-20 px-6 lg:px-24"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f3d07a]">
            Transparent Pricing
          </span>
          <h2
            id="pricing-teaser-heading"
            className="mt-3 text-3xl md:text-4xl font-bold text-white"
          >
            Plans Built for Udaipur Businesses
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            No hidden fees. No overbuilding. Pick the plan that fits your
            business stage — or WhatsApp us and we'll help you choose.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl border p-7 flex flex-col gap-5 h-full transition-all ${
                plan.featured
                  ? "pricing-featured border-[#f3d07a]/35"
                  : "border-white/10 bg-white/[0.02]"
              }`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={
                !reduce
                  ? {
                      y: -6,
                      boxShadow:
                        "0 12px 36px rgba(18,24,38,0.55), 0 0 28px rgba(243,208,122,0.18)",
                    }
                  : undefined
              }
            >
              {/* Badge */}
              {plan.badge && (
                <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-[#f3d07a] text-black">
                  {plan.badge}
                </span>
              )}

              {/* Price */}
              <div>
                <p className="text-slate-400 text-sm font-medium">{plan.name} Plan</p>
                <div className="text-4xl font-extrabold text-white mt-1">
                  {plan.price}
                </div>
                <p className="text-slate-400 text-sm mt-2 leading-6">
                  {plan.tagline}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check
                      size={15}
                      className="text-[#f3d07a] flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`block text-center py-3 px-5 rounded-full text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-[#f3d07a] text-black hover:brightness-95"
                    : "border border-[#f3d07a]/40 text-[#f3d07a] hover:bg-[#f3d07a]/10"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp nudge */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
          >
            <span>Not sure which plan fits you?</span>
            <span className="text-[#25D366] font-semibold">
              WhatsApp us in 2 minutes →
            </span>
          </a>
          <p className="text-xs text-slate-500 mt-1">
            We reply within 2 hours · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}

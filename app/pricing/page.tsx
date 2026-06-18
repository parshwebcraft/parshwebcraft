"use client";

import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/* ================= MAINTENANCE ADD-ON ================= */

const MaintenanceAddon = () => (
  <div className="mt-5 rounded-xl border border-[#f3d07a33] bg-[#f3d07a14] p-4 text-sm">
    <p className="font-semibold text-[#f3d07a] mb-1">
      🔧 Monthly Maintenance Add-on
    </p>
    <p className="text-slate-300">
      ₹3,500 / month — recommended for business stability
    </p>
    <ul className="mt-2 text-slate-300 list-disc list-inside">
      <li>SEO monitoring & health checks</li>
      <li>Hosting & server management</li>
      <li>Security updates & technical support</li>
    </ul>
  </div>
);

/* ================= PAGE ================= */

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Premium Website & SaaS Pricing | ParshWebCraft</title>
        <meta
          name="description"
          content="Transparent, value-driven pricing plans for custom React/Next.js websites, headless e-commerce, and SaaS apps. Engineered by ParshWebCraft."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* ================= HERO ================= */}
        <section className="max-w-4xl mx-auto text-center py-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium"
          >
            Pricing
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Bespoke Pricing for{" "}
            <span className="text-[#f3d07a]">Premium Results</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-300 mt-4 max-w-2xl mx-auto"
          >
            We don&apos;t build cheap, slow templates. We build modern, lightning-fast
            Next.js web applications, headless e-commerce systems, and SaaS platforms
            engineered for growth, safety, and long-term scale.
          </motion.p>
        </section>

        {/* ================= WEBSITE PLANS ================= */}
        <section className="max-w-7xl mx-auto py-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            Website & E-Commerce Plans
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">Starter Website</h3>
                <div className="text-3xl font-extrabold mb-2">₹17,999</div>
                <p className="text-sm text-slate-400 mb-4">
                  A high-performance custom single-page presence built with Next.js.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Single-page premium Next.js website</li>
                  <li>Clean headless speed & mobile-first UI</li>
                  <li>Basic Framer Motion animations</li>
                  <li>Business details & contact capture</li>
                  <li>Delivery: 3–5 working days</li>
                </ul>

                <MaintenanceAddon />
              </div>

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Choose Starter
              </Link>
            </motion.div>

            {/* Business */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow:
                  "0 14px 42px rgba(18,24,38,0.6), 0 0 36px rgba(243,208,122,0.32)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full relative"
            >
              <span className="absolute -top-3 right-4 bg-[#f3d07a] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Most Chosen
              </span>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business Website</h3>
                <div className="text-3xl font-extrabold mb-2">₹34,999</div>
                <p className="text-sm text-slate-400 mb-4">
                  Built to attract enquiries, build trust, and rank high on search engines.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li>6–8 custom Next.js pages</li>
                  <li>Bespoke UI/UX design & motion</li>
                  <li>WhatsApp & smart lead forms</li>
                  <li>Local SEO optimization foundation</li>
                  <li>Advanced security headers built-in</li>
                  <li>Delivery: 7–10 working days</li>
                </ul>

                <MaintenanceAddon />
              </div>

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full bg-[#f3d07a] text-black font-semibold"
              >
                Choose Business
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Website</h3>
                <div className="text-3xl font-extrabold mb-2">₹59,999</div>
                <p className="text-sm text-slate-400 mb-4">
                  For brands seeking advanced automation, custom databases, and scaling.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li>10–15 custom pages & sections</li>
                  <li>Conversion-focused design flows</li>
                  <li>Booking or enquiry calendars</li>
                  <li>AI Chatbot integration out-of-the-box</li>
                  <li>Advanced performance tuning</li>
                  <li>Delivery: 15–20 working days</li>
                </ul>

                <MaintenanceAddon />
              </div>

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Request Quote
              </Link>
            </motion.div>

            {/* Ecommerce */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">E-Commerce Store</h3>
                <div className="text-3xl font-extrabold mb-2">₹1,20,000</div>
                <p className="text-sm text-slate-400 mb-4">
                  Decoupled headless storefront built for blazing-fast speed and sales.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Next.js storefront + Shopify/Supabase catalog</li>
                  <li>Sub-second mobile load times (High conversion)</li>
                  <li>Custom Cart drawer & checkout experience</li>
                  <li>Razorpay/Stripe payment gateway integration</li>
                  <li>Order & invoice automation backend</li>
                  <li>Delivery: 15–25 working days</li>
                </ul>

                <MaintenanceAddon />
              </div>

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Launch Store
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================= STRATEGIC INCLUSIONS ================= */}
        <section className="max-w-6xl mx-auto py-16 border-t border-b border-white/5 my-10">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] text-sm font-medium">
              The Next-Gen Tech Advantage
            </span>
            <h2 className="text-3xl font-bold">
              Why Our Websites Stand Out
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto text-sm">
              We don&apos;t build cheap, slow, vulnerable template sites. Every line of code is engineered for speed, safety, and modern AI capability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 rounded-2xl bg-white/5 p-6 relative overflow-hidden group hover:border-[#f3d07a]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(243,208,122,0.1),transparent_60%)] pointer-events-none" />
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-[#f3d07a] mb-2">Next.js & Headless Speed</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No slow, bloated WordPress templates. We write custom-coded React/Next.js pages that load in under 1 second. Sub-second load times crush bounce rates, boost Google SEO rankings, and skyrocket sales conversions.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl bg-white/5 p-6 relative overflow-hidden group hover:border-[#f3d07a]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(243,208,122,0.1),transparent_60%)] pointer-events-none" />
              <div className="text-2xl mb-3">🔐</div>
              <h3 className="text-lg font-semibold text-[#f3d07a] mb-2">Built-in Advanced Security</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your brand security is non-negotiable. We implement enterprise-grade JWT token-based authentication (stored in HttpOnly secure cookies), Row-Level Security (RLS) on your databases, and full API endpoint protection out of the box.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl bg-white/5 p-6 relative overflow-hidden group hover:border-[#f3d07a]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(243,208,122,0.1),transparent_60%)] pointer-events-none" />
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-[#f3d07a] mb-2">Trained RAG AI Chatbots</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with your customers 24/7. Our premium projects include a custom Retrieval-Augmented Generation (RAG) AI Chatbot trained specifically on your business documents to capture leads and answer client queries automatically.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SAAS & ENTERPRISE ================= */}
        <section className="max-w-5xl mx-auto py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            SaaS & Custom Development
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* SaaS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                SaaS App Development
              </h3>
              <div className="text-3xl font-extrabold mb-2">₹2,20,000</div>
              <p className="text-sm text-slate-400 mb-4">
                Custom-built full-stack SaaS apps engineered for infinite scale and security.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>Custom Next.js frontend + Node/Supabase database</li>
                <li>JWT Authentication & Role-Based Access Control (RBAC)</li>
                <li>Secure Row-Level Security (RLS) policies</li>
                <li>Stripe/Razorpay automated subscription billing</li>
                <li>Admin dashboard & analytics reports</li>
                <li>Delivery: Minimum 1 Month (depends on app features)</li>
              </ul>

              <MaintenanceAddon />

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Discuss SaaS Project
              </Link>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                Enterprise / Custom Systems
              </h3>
              <div className="text-3xl font-extrabold mb-2">Custom Pricing</div>
              <p className="text-sm text-slate-400 mb-4">
                Large-scale platforms, internal systems & long-term products.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>Fully custom system architecture</li>
                <li>ERP / CRM / internal dashboards</li>
                <li>Advanced integrations</li>
                <li>Dedicated cloud infrastructure</li>
                <li>Priority technical support & SLA</li>
              </ul>

              <MaintenanceAddon />

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Schedule Discussion
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURE COMPARISON ================= */}
        <section className="max-w-6xl mx-auto py-20">
          {/* Section Head */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] text-sm font-medium">
              Comparison
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What’s Included in Each Plan
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Compare features clearly and choose the plan that fits your
              business stage — not just your budget.
            </p>
          </div>

          {/* Table Wrapper */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-4">Starter</th>
                  <th className="text-center py-4 px-4">Business</th>
                  <th className="text-center py-4 px-4">Premium</th>
                  <th className="text-center py-4 px-4">E-Commerce</th>
                  <th className="text-center py-4 px-4">SaaS / Custom</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3 px-4">Modern UI / UX Design</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔✔</td>
                  <td className="text-center">✔✔✔</td>
                  <td className="text-center">✔✔✔</td>
                  <td className="text-center">✔✔✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Animations & Interactions</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Smooth</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Custom Motion</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Mobile Responsiveness</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Pages / Screens</td>
                  <td className="text-center">1 Page</td>
                  <td className="text-center">6–8 Pages</td>
                  <td className="text-center">10–15 Pages</td>
                  <td className="text-center">Custom Store</td>
                  <td className="text-center">Unlimited</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Lead Forms / Enquiry Flow</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔✔</td>
                  <td className="text-center">✔✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Booking / Automation</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Fully Custom</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">SEO Optimization</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Local SEO</td>
                  <td className="text-center">Advanced SEO</td>
                  <td className="text-center">Advanced SEO</td>
                  <td className="text-center">Technical + Growth SEO</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Payment Integration</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Full Integration</td>
                  <td className="text-center">Subscriptions / Custom</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Admin Dashboard</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Optional</td>
                  <td className="text-center">Order & Catalog DB</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Hosting + Domain</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Maintenance & Support</td>
                  <td className="text-center">Add-on</td>
                  <td className="text-center">Add-on</td>
                  <td className="text-center">Add-on</td>
                  <td className="text-center">Add-on</td>
                  <td className="text-center">Add-on / Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= COMPARISON SECTION ================= */}
        <section className="max-w-5xl mx-auto py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 12px 36px rgba(18,24,38,0.55), 0 0 30px rgba(243,208,122,0.22)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-3">
              Still unsure which option is right?
            </h3>

            <p className="text-slate-300 text-sm max-w-2xl mb-6">
              Many clients come to us after choosing the wrong solution earlier.
              These comparisons explain what actually works for long-term
              business growth.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/compare/cheap-vs-custom-website"
                className="group rounded-xl border border-white/10 p-5 hover:border-[#f3d07a] transition"
              >
                <h4 className="font-semibold mb-2 group-hover:text-[#f3d07a]">
                  ₹8k Website vs Custom Website
                </h4>
                <p className="text-sm text-slate-400">
                  Why cheap websites fail and when custom development actually
                  saves money.
                </p>
                <span className="inline-block mt-3 text-sm text-[#f3d07a]">
                  Compare →
                </span>
              </Link>

              <Link
                href="/compare/freelancer-vs-agency"
                className="group rounded-xl border border-white/10 p-5 hover:border-[#f3d07a] transition"
              >
                <h4 className="font-semibold mb-2 group-hover:text-[#f3d07a]">
                  Freelancer vs Agency
                </h4>
                <p className="text-sm text-slate-400">
                  Reliability, scalability, and support — explained clearly.
                </p>
                <span className="inline-block mt-3 text-sm text-[#f3d07a]">
                  Compare →
                </span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= FINAL GOLDEN CTA ================= */}
        <section className="max-w-5xl mx-auto py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                boxShadow:
                  "0 12px 40px rgba(18,24,38,0.65), 0 0 42px rgba(243,208,122,0.28)",
                scale: 1.015,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="
        relative overflow-hidden rounded-2xl
        border border-[rgba(243,208,122,0.28)]
        bg-[#0b1220]
        p-10
        text-center
      "
            >
              {/* Gold Glow Layer */}
              <div
                className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
        "
              />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">
                  Not Sure Which Plan Fits Your Business?
                </h3>

                <p className="text-slate-300 mb-6">
                  Tell us about your business, goals, and budget. We’ll help you
                  choose the right website, SaaS solution, or custom system —
                  without overbuilding.
                </p>

                <Link
                  href="/contact"
                  className="
            inline-flex items-center justify-center
            px-6 py-3
            rounded-full
            bg-[#f3d07a]
            text-black
            font-semibold
            hover:brightness-95
            transition
          "
                >
                  Get Honest Guidance
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

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
        <title>Website & SaaS Pricing in Udaipur | ParshWebCraft</title>
        <meta
          name="description"
          content="Website, SaaS and custom development pricing by ParshWebCraft. Transparent plans designed for Udaipur businesses and startups."
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
            Honest Pricing for{" "}
            <span className="text-[#f3d07a]">Real Business Needs</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-300 mt-4 max-w-2xl mx-auto"
          >
            Whether you’re a local Udaipur business or a growing startup, these
            plans are designed to deliver clarity, performance, and long-term
            value — not shortcuts.
          </motion.p>
        </section>

        {/* ================= WEBSITE PLANS ================= */}
        <section className="max-w-6xl mx-auto py-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            Website Development Plans
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Starter Website</h3>
              <div className="text-3xl font-extrabold mb-2">₹4,999</div>
              <p className="text-sm text-slate-400 mb-4">
                Ideal for small shops, clinics, and service businesses starting
                online.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>Single-page professional website</li>
                <li>Mobile-friendly & fast loading</li>
                <li>Business details & services</li>
                <li>Google Map & contact access</li>
                <li>Delivery: 3–5 working days</li>
              </ul>

              <MaintenanceAddon />

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
              className="border-2 border-[#f3d07a] rounded-2xl p-6 relative"
            >
              <span className="absolute -top-3 right-4 bg-[#f3d07a] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Most Chosen
              </span>

              <h3 className="text-lg font-semibold mb-2">Business Website</h3>
              <div className="text-3xl font-extrabold mb-2">₹14,999</div>
              <p className="text-sm text-slate-400 mb-4">
                Built to attract enquiries, build trust, and convert visitors.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>6–8 structured business pages</li>
                <li>Premium UI/UX design</li>
                <li>WhatsApp & enquiry forms</li>
                <li>Local SEO foundation</li>
                <li>Analytics & tracking setup</li>
                <li>Delivery: 7–10 working days</li>
              </ul>

              <MaintenanceAddon />

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
              className="border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Premium Website</h3>
              <div className="text-3xl font-extrabold mb-2">₹34,999+</div>
              <p className="text-sm text-slate-400 mb-4">
                For brands that want automation, conversions, and scale.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>10–15 custom pages</li>
                <li>Conversion-focused landing flows</li>
                <li>Booking or enquiry automation</li>
                <li>Basic payment integration</li>
                <li>Performance & SEO optimization</li>
              </ul>

              <MaintenanceAddon />

              <Link
                href="/contact"
                className="block mt-6 text-center px-4 py-3 rounded-full border border-white/15 hover:bg-[#f3d07a] hover:text-black transition"
              >
                Request Quote
              </Link>
            </motion.div>
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
              className="border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                SaaS Platform Development
              </h3>
              <div className="text-3xl font-extrabold mb-2">₹1,20,000+</div>
              <p className="text-sm text-slate-400 mb-4">
                Custom-built SaaS products designed for growth and scale.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>Custom architecture & database design</li>
                <li>User authentication & roles</li>
                <li>Admin dashboards & controls</li>
                <li>Payments / subscriptions</li>
                <li>Secure APIs & performance tuning</li>
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
                <li>Dedicated infrastructure</li>
                <li>Priority technical support</li>
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
            <table className="w-full min-w-[720px] text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-4">Starter</th>
                  <th className="text-center py-4 px-4">Business</th>
                  <th className="text-center py-4 px-4">Premium</th>
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
                </tr>

                <tr>
                  <td className="py-3 px-4">Animations & Interactions</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Smooth</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Custom Motion</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Mobile Responsiveness</td>
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
                  <td className="text-center">Unlimited</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Lead Forms / Enquiry Flow</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Booking / Automation</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Fully Custom</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">SEO Optimization</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Local SEO</td>
                  <td className="text-center">Advanced SEO</td>
                  <td className="text-center">Technical + Growth SEO</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Payment Integration</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Subscriptions / Custom</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Admin Dashboard</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">Optional</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Hosting + Domain</td>
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
                  <td className="text-center">Add-on / Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= COMPARISON SECTION ================= */}
        <section className="max-w-5xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
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
      </main>
    </>
  );
}

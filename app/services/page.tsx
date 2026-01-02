"use client";

import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// SAME glow used site-wide
const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function ServicesPage() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>
          Website Design & Web Development Services in Udaipur | ParshWebCraft
        </title>
        <meta
          name="description"
          content="ParshWebCraft offers professional website design, web development, SaaS platforms, and business system solutions in Udaipur. SEO-optimized, fast, and scalable digital services."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* ================= HERO ================= */}
        <section className="py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-[#f3d07a] text-sm tracking-wide uppercase font-semibold"
              variants={fadeUp}
            >
              Website Design & Development Services
            </motion.span>

            <motion.h1
              className="text-4xl font-extrabold mt-3 leading-snug"
              variants={fadeUp}
            >
              Professional Web Solutions That <br />
              <span className="text-[#f3d07a]">
                Support Real Business Growth
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-300 max-w-2xl mx-auto mt-6"
              variants={fadeUp}
            >
              We design websites, SaaS platforms, and internal systems that are
              built for clarity, performance, and long-term business use — not
              just visual appeal.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <span className="text-[#f3d07a] text-sm tracking-wide uppercase font-semibold">
              What We Offer
            </span>

            <h2 className="text-3xl font-bold mt-2">
              Websites, SaaS & Business Systems
            </h2>

            <p className="text-slate-300 max-w-xl mx-auto mt-3">
              Solutions designed to match your business stage — from simple
              websites to scalable internal systems.
            </p>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((srv, i) => (
              <motion.div
                key={i}
                className="
                  glass p-6 rounded-xl 
                  border border-[rgba(243,208,122,0.15)]
                  bg-transparent cursor-pointer
                "
                variants={fadeUp}
                whileHover={!reduce ? glowHover : undefined}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-3">{srv.icon}</div>

                <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>

                <p className="text-slate-300 mb-4">{srv.desc}</p>

                <ul className="text-slate-300 space-y-1 text-sm">
                  {srv.items.map((it, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#f3d07a]">•</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= GOLDEN REVEAL CTA ================= */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
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
                p-10
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
                <h3 className="text-2xl font-bold mb-2">
                  Need a Website or Business System?
                </h3>
                <p className="text-slate-300">
                  Tell us about your business. We’ll help you decide whether you
                  need a simple website, a SaaS platform, or a custom internal
                  system — and build it the right way.
                </p>
              </div>

              <a
                href="/contact"
                className="
                  relative z-10
                  px-6 py-3
                  rounded-full
                  bg-[#f3d07a]
                  text-black
                  font-semibold
                  hover:brightness-95
                  transition
                "
              >
                Start Your Project
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: "💻",
    title: "Business Website Design",
    desc: "Professional websites built to establish trust and generate enquiries.",
    items: ["Company websites", "Portfolio sites", "Mobile-first UI"],
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "High-converting pages designed for campaigns and lead generation.",
    items: ["Lead capture", "Sales pages", "Marketing funnels"],
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    desc: "Scalable online stores with secure payments and modern UX.",
    items: ["Product catalog", "Payments", "Order management"],
  },
  {
    icon: "⚙️",
    title: "SaaS & Web Applications",
    desc: "Custom SaaS platforms aligned with real business logic.",
    items: ["Dashboards", "Role-based access", "Scalable systems"],
  },
  {
    icon: "📊",
    title: "Internal Business Systems",
    desc: "Custom tools to manage operations, inventory, and workflows.",
    items: ["Admin panels", "Inventory systems", "Automation tools"],
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    desc: "Ongoing support to keep your systems fast and secure.",
    items: ["Bug fixes", "Security updates", "Performance monitoring"],
  },
];

"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function MaintenanceServicePage() {
  const reduce = useReducedMotion();

  return (
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
            Service
          </motion.span>

          <motion.h1 className="text-4xl font-extrabold mt-3" variants={fadeUp}>
            Website Maintenance & Support
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            Keep your website secure, fast, and up-to-date with ongoing
            maintenance and professional support.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Regular Updates",
              desc: "Core, plugin, and dependency updates.",
            },
            {
              title: "Security Monitoring",
              desc: "Protection against vulnerabilities and threats.",
            },
            {
              title: "Automated Backups",
              desc: "Safe backups with quick recovery options.",
            },
            {
              title: "Performance Checks",
              desc: "Speed and uptime monitoring.",
            },
            {
              title: "Bug Fixes",
              desc: "Quick fixes for minor issues and errors.",
            },
            {
              title: "Priority Support",
              desc: "Fast response for maintenance-related queries.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass p-6 rounded-xl border border-[rgba(243,208,122,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MAINTENANCE PRICING (ADD-ON) ================= */}
      <section className="py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center glass p-10 rounded-2xl border border-[rgba(243,208,122,0.12)]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={!reduce ? glowHover : undefined}
        >
          <h2 className="text-3xl font-bold mb-4">
            Maintenance as an Add-On Service
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Website maintenance is offered as an optional add-on with all
            website plans. It ensures your website stays secure, updated, and
            performs at its best even after launch.
          </p>

          <div className="text-lg font-semibold text-[#f3d07a] mb-6">
            Starting at ₹3,997 / month
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                   text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              View Pricing Plans
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-[#f3d07a]
                   text-[#f3d07a] hover:bg-[#f3d07a]/10 transition"
            >
              Ask About Maintenance
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <motion.div
          className="max-w-5xl mx-auto glass p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[rgba(243,208,122,0.12)]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={!reduce ? glowHover : undefined}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Need Ongoing Website Support?
            </h3>
            <p className="text-slate-300">
              Let ParshWebCraft handle maintenance while you focus on growth.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                       text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Maintenance Plan
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

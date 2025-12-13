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

export default function EcommerceServicePage() {
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

          <motion.h1
            className="text-4xl font-extrabold mt-3"
            variants={fadeUp}
          >
            eCommerce Website Development
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            High-converting online stores built for performance,
            scalability, and seamless customer experience.
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
              title: "Custom Store Design",
              desc: "Premium UI tailored to your brand and customers.",
            },
            {
              title: "Payment Integration",
              desc: "Secure payments via Razorpay, Stripe, PayPal, and more.",
            },
            {
              title: "Product Management",
              desc: "Easy product uploads, pricing, and inventory control.",
            },
            {
              title: "Cart & Checkout Flow",
              desc: "Optimized checkout experience to reduce cart abandonment.",
            },
            {
              title: "Mobile Commerce",
              desc: "Fast and smooth shopping experience on all devices.",
            },
            {
              title: "Scalable Architecture",
              desc: "Built to handle traffic growth and sales spikes.",
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
              Ready to Sell Online?
            </h3>
            <p className="text-slate-300">
              Let’s build a powerful eCommerce store that converts visitors into buyers.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                       text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Build My Store
          </Link>
        </motion.div>
      </section>

    </main>
  );    
}

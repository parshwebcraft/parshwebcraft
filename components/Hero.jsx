"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  // Exact same glow from About page (respects reduced motion)
  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
      }
    : {};

  const spring = { type: "spring", stiffness: 300, damping: 22 };

  const delays = {
    badge: 0,
    heading: 0.08,
    subtext: 0.16,
    ctas: 0.24,
  };

  const services = [
    { icon: "💻", title: "Premium Web Design", text: "Modern UI/UX, animations and aesthetic layouts." },
    { icon: "⚙️", title: "Custom Development", text: "Next.js, WordPress, E-commerce, booking systems." },
    { icon: "📈", title: "SEO + Growth", text: "Rank higher and get more leads with professional SEO." },
  ];

  const process = [
    { step: "Step 1", title: "Requirement Call", desc: "We understand your business goals & needs." },
    { step: "Step 2", title: "Design & UI", desc: "Clean UI, premium visuals & animations." },
    { step: "Step 3", title: "Build & Launch", desc: "Fully responsive, optimized & live." },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-4xl mx-auto py-20 relative">
        <motion.div
          aria-hidden
          className="absolute -right-10 -top-6 w-44 h-44 rounded-full pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle,#f3d07a33,transparent 40%)" }}
          animate={!reduce ? { y: [0, -8, 0] } : undefined}
          transition={!reduce ? { duration: 4, repeat: Infinity } : undefined}
        />

        <div className="relative z-10">
          <motion.span
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium tracking-wide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: delays.badge }}
          >
            Premium Website Services
          </motion.span>

          <motion.h1
            className="text-5xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: delays.heading }}
          >
            <div>
              Build{" "}
              <span
                className="inline-block text-[#f3d07a]"
                style={{
                  textShadow:
                    "0px 4px 14px rgba(243,208,122,0.15), 0px 0px 8px rgba(243,208,122,0.10)",
                }}
              >
                Premium Web Experiences
              </span>
            </div>
            <div>for Your Business</div>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.subtext }}
          >
            I create modern, high-performance websites with animations, lead capture,
            and full business automation — tailored for agencies, coaches, freelancers,
            and small to medium businesses.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.ctas }}
          >
            <motion.a
              href="/pricing"
              className="px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold inline-flex items-center justify-center"
              whileHover={glowHover}
              transition={spring}
            >
              View Pricing
            </motion.a>

            <motion.a
              href="/contact"
              className="px-6 py-3 rounded-full border border-slate-500 text-slate-200 inline-flex items-center justify-center"
              whileHover={glowHover}
              transition={spring}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f3d07a] font-medium">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Everything You Need for A Modern Website
            </h2>
            <p className="text-slate-300 mt-3">
              From design, development to automation — we handle everything.
            </p>
          </motion.div>

          {/* --- SERVICE CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.a
                key={i}
                href="/services"
                className="p-6 rounded-xl border border-[#2a2a2a] bg-transparent transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * (i + 1) }}
                whileHover={!reduce ? glowHover : undefined}
                
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-300 mt-2">{item.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f3d07a] font-medium">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Our Project Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {process.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl border border-[#2d2d2d] bg-transparent transition-all cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * (i + 1) }}
                whileHover={!reduce ? glowHover : undefined}
                
              >
                <span className="text-[#f3d07a] text-sm font-medium">{item.step}</span>
                <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                <p className="text-slate-300 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="p-10 bg-[#f3d07a22] rounded-2xl border border-[#f3d07a55] flex flex-col md:flex-row md:items-center md:justify-between transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={!reduce ? glowHover : undefined}
            
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Start Your Website?</h3>
              <p className="text-slate-300 mt-2">
                Get a premium website with automation & stunning UI.
              </p>
            </div>

            <motion.a
              href="/contact"
              className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold inline-flex"
              whileHover={!reduce ? glowHover : undefined}
              transition={spring}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

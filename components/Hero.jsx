"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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
    secondary: 0.32,
  };

  const services = [
    {
      icon: "💻",
      title: "Premium Web Design",
      text: "Modern UI/UX, clean layouts, and smooth animations.",
    },
    {
      icon: "⚙️",
      title: "Web Apps & Systems",
      text: "Custom dashboards, SaaS platforms, and internal tools.",
    },
    {
      icon: "📈",
      title: "SEO & Performance",
      text: "Optimized websites built for speed, trust, and growth.",
    },
  ];

  const process = [
    {
      step: "Step 1",
      title: "Requirement Call",
      desc: "We understand your business stage, goals, and constraints.",
    },
    {
      step: "Step 2",
      title: "Design & Build",
      desc: "Clean UI, scalable architecture, and production-grade code.",
    },
    {
      step: "Step 3",
      title: "Launch & Support",
      desc: "Optimized, deployed, and ready to grow with your business.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-4xl mx-auto py-20 relative">
        {/* Floating Logo */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute -right-3 top-[260px] z-0"
          animate={{ y: [-0, 28, -0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <div className="relative w-56 h-56 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full blur-3xl bg-[#f3d07a26]" />
            <Image
              src="/images/logo-hero.png"
              alt="ParshWebCraft Logo"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </motion.div>

        <div className="relative z-10">
          <motion.span
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium tracking-wide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.badge }}
          >
            Premium Web & SaaS Solutions
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
              <span className="text-[#f3d07a]">
                Premium Digital Products
              </span>
            </div>
            <div>That Grow With Your Business</div>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.subtext }}
          >
            I help businesses build high-performance websites, SaaS platforms,
            and internal systems — designed for clarity, speed, and long-term
            scalability. Not every business needs an app; the right solution
            depends on your stage and goals.
          </motion.p>

          {/* PRIMARY CTAs */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.ctas }}
          >
            <motion.a
              href="/portfolio"
              className="px-6 py-3 rounded-full bg-[#f3d07a] text-black font-semibold inline-flex items-center justify-center"
              whileHover={glowHover}
              transition={spring}
            >
              View Portfolio
            </motion.a>

            <motion.a
              href="/contact"
              className="px-6 py-3 rounded-full border border-slate-500 text-slate-200 inline-flex items-center justify-center"
              whileHover={glowHover}
              transition={spring}
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* SECONDARY TRUST CTA */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.secondary }}
          >
            <a
              href="/contact?intent=free-review"
              className="inline-flex items-center gap-2 text-sm text-[#f3d07a] hover:underline"
            >
              Not sure what you need?
              <span className="font-semibold">
                Get a free website review →
              </span>
            </a>
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
              Built for Real Business Needs
            </h2>
            <p className="text-slate-300 mt-3">
              Websites, SaaS platforms, and systems designed to scale.
            </p>
          </motion.div>

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
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              A Clear, Proven Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {process.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl border border-[#2d2d2d]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * (i + 1) }}
                whileHover={!reduce ? glowHover : undefined}
              >
                <span className="text-[#f3d07a] text-sm font-medium">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const reduce = useReducedMotion();

  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.25), inset 0 0 18px rgba(243,208,122,0.05)",
      }
    : {};

  const spring = { type: "spring", stiffness: 300, damping: 22 };

  const delays = {
    badge: 0,
    heading: 0.08,
    subtext: 0.16,
    ctas: 0.32,
    secondary: 0.4,
  };

  const services = [
    {
      icon: "💻",
      title: "Website Design in Udaipur",
      text: "Professional business websites with modern UI/UX.",
      link: "/web-design-udaipur",
    },
    {
      icon: "⚙️",
      title: "Web Development Company in Udaipur",
      text: "Custom dashboards, SaaS platforms, and systems.",
      link: "/web-development-udaipur",
    },
    {
      icon: "📈",
      title: "SEO Optimized Websites",
      text: "Fast, secure, and search-engine-ready websites.",
      link: "/seo-services-udaipur",
    },
  ];

  const process = [
    {
      step: "Step 1",
      title: "Requirement Discussion",
      desc: "We understand your business goals, target audience, and website requirements.",
    },
    {
      step: "Step 2",
      title: "Design & Development",
      desc: "We design and build scalable, SEO-friendly websites with clean code and UI.",
    },
    {
      step: "Step 3",
      title: "Launch & Growth",
      desc: "Your website is optimized, deployed, and ready to support business growth.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section
        className="max-w-4xl mx-auto py-20 relative"
        aria-labelledby="homepage-hero-title"
      >
        {/* Floating Logo */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute -right-3 top-[280px] z-0"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
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
            Premium Web & SaaS Solutions in Udaipur
          </motion.span>

          <motion.h1
            id="homepage-hero-title"
            className="text-5xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: delays.heading }}
          >
            <span className="block">
              Web Development Company in{" "}
              <span className="text-[#f3d07a]">Udaipur</span>
            </span>
            <span className="block text-3xl mt-2 font-semibold text-slate-300">
              Websites, SaaS Development & Digital Marketing for Business Growth
            </span>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delays.subtext }}
          >
            ParshWebCraft is a leading web development company in Udaipur
            and digital marketing agency offering website development, ecommerce
            website development, custom SaaS development, SEO services, branding,
            social media management, reel marketing, GST billing software, and
            business growth solutions across Rajasthan and India.
          </motion.p>

          {/* 🔥 FEATURED SAAS — PARSHVYAPAR */}

          {/* PRIMARY CTAs */}
            {/* ✅ FIXED CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            
            {/* PRIMARY */}
            <motion.a
              href="/portfolio"
              aria-label="View ParshWebCraft portfolio and website projects"
              className="px-6 py-3 rounded-xl bg-[#f3d07a] text-black font-semibold text-center"
              whileHover={glowHover}
              transition={spring}
            >
              View Portfolio →
            </motion.a>

            {/* SECONDARY */}
            <motion.a
              href="/web-development-udaipur"
              aria-label="Explore web development services in Udaipur"
              className="px-6 py-3 rounded-xl border border-[#f3d07a]/40 text-[#f3d07a] text-center"
              whileHover={glowHover}
              transition={spring}
            >
              Web Development in Udaipur
            </motion.a>

            {/* OUTLINE */}
            <motion.a
              href="/contact"
              aria-label="Contact ParshWebCraft for website and marketing consultation"
              className="px-6 py-3 rounded-xl border border-white/20 text-slate-300 text-center"
              whileHover={glowHover}
              transition={spring}
            >
              Contact Us
            </motion.a>
          </div>

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
              <span className="font-semibold">Get a free website review →</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24" aria-labelledby="homepage-services-title">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f3d07a] font-medium">Our Services</span>
            <h2
              id="homepage-services-title"
              className="text-3xl md:text-4xl font-bold mt-2 text-white"
            >
              Website Development, SaaS & Digital Marketing Services in Udaipur
            </h2>
            <p className="text-slate-300 mt-3">
              Website development services, ecommerce website development, SEO,
              social media management, branding, landing pages, and SaaS
              solutions built for real business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                aria-label={`Explore ${item.title}`}
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
      <section className="py-24" aria-labelledby="homepage-process-title">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f3d07a] font-medium">How It Works</span>
            <h2
              id="homepage-process-title"
              className="text-3xl md:text-4xl font-bold mt-2 text-white"
            >
              A Proven Web Development Process
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
      <section
        className="py-24 max-w-4xl mx-auto"
        aria-labelledby="homepage-faq-title"
      >
        <h2 id="homepage-faq-title" className="text-3xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-slate-300">
          <p>
            <strong>
              What is the best web development company in Udaipur?
            </strong>
            <br />
            ParshWebCraft is one of the leading web development companies in
            Udaipur offering modern website design and SaaS solutions.
          </p>

          <p>
            <strong>Do you provide ecommerce website development?</strong>
            <br />
            Yes, we build ecommerce websites for jewellery, fashion, and local
            businesses.
          </p>

          <p>
            <strong>How much does a website cost in Udaipur?</strong>
            <br />
            Website cost depends on features, design, and functionality. Contact
            us for a custom quote.
          </p>
        </div>
      </section>
    </div>
  );
}

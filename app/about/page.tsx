// app/about/page.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/**
 * Client-only About page
 */

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeInOut: [number, number, number, number] = [0.65, 0, 0.35, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
      duration: 0.45,
      ease: easeOut,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeInOut },
  },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me — ParshWebCraft</title>
        <meta
          name="description"
          content="Learn more about ParshWebCraft and its founder — who we are, what we do, and our mission."
        />
      </Head>

      <main className="min-h-screen pt-24 px-6 lg:px-24">
        {/* Hero */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto py-20"
        >
          <motion.h1 variants={itemUp} className="text-5xl font-extrabold mb-4">
            About <span className="text-[#f3d07a]">ParshWebCraft</span>
          </motion.h1>

          <motion.p
            variants={itemUp}
            className="text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            ParshWebCraft builds premium web experiences for business growth.
          </motion.p>
        </motion.section>

        {/* Story */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div
            variants={itemUp}
            className="glass p-8 rounded-xl"
            whileHover={glowHover}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <h2 className="text-3xl font-bold mb-4">My Story</h2>

            <p className="text-slate-300 leading-relaxed">
              I started ParshWebCraft with a simple goal — to provide businesses
              with modern, high-performance websites that not only look premium
              but also convert visitors into customers.
              <br />
              <br />
              Over time, I learned that most businesses struggle with:
            </p>

            <motion.ul
              variants={container}
              className="mt-4 space-y-2 text-slate-300 list-none pl-0"
            >
              {[
                "Outdated websites",
                "Slow loading speeds",
                "Poor mobile experience",
                "No automated lead capture system",
              ].map((text) => (
                <motion.li
                  key={text}
                  variants={itemUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#f3d07a] font-semibold">•</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={itemUp} className="mt-4 text-slate-300">
              This is exactly what ParshWebCraft solves — modern, optimized, and
              high-converting websites built with Next.js, Tailwind CSS, and
              Supabase automation.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-6">
            Mission & Values
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality First",
                body: "Pixel-perfect design, performance optimization, and clean code — every project is built with quality in mind.",
              },
              {
                title: "Client-Centric",
                body: "Your business goals come first. The website is designed exactly around what your brand needs.",
              },
              {
                title: "Growth Driven",
                body: "Websites aren’t just for show — they must drive leads, sales, and real growth.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={itemUp}
                whileHover={glowHover}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-slate-300 mt-2">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== ABOUT ME – CEO ===== */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div
            variants={itemUp}
            whileHover={glowHover}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="glass p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="/images/gauransh .png"
                    alt="Gauransh Jaroli – CEO of ParshWebCraft"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">About Me</h2>

                <p className="text-slate-300 leading-relaxed">
                  I’m{" "}
                  <span className="text-white font-semibold">
                    Gauransh Jaroli
                  </span>
                  , Founder & CEO of{" "}
                  <span className="text-white font-semibold">
                    ParshWebCraft
                  </span>
                  . I build premium, scalable web platforms focused on
                  performance, security, and modern UI.
                </p>

                <p className="mt-4 text-slate-400">
                  My goal is to help businesses grow online with reliable,
                  future-ready digital solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <motion.h2 variants={itemUp} className="text-3xl font-bold mb-4">
            Let’s Build Something Amazing
          </motion.h2>

          <motion.p variants={itemUp} className="text-slate-300 mb-8">
            Whether you need a simple landing page or a full business website, I
            can build it end-to-end.
          </motion.p>

          <motion.div variants={itemUp}>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-md text-slate-200 hover:text-white bg-gradient-to-br from-transparent to-transparent border border-[#2b2f3a] glass-button"
            >
              Contact
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
  outcomes: string[];
  tech?: string[];
  href?: string;
  status: "in-progress" | "live" | "concept";
};

export default function PortfolioPage() {
  const reduce = useReducedMotion();

  const glowHover = {
    scale: 1.02,
    boxShadow:
      "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
  };

  const projects: Project[] = [
    {
      title: "Anand Fashion",
      category: "Business Website",
      image: "/portfolio/anand-fashion.jpg",
      description:
        "A local clothing store website built to create a clean online presence and generate WhatsApp enquiries from nearby customers.",
      outcomes: ["Lead Generation", "Local Business", "Mobile Optimized"],
      tech: ["Next.js", "Tailwind CSS"],
      href: "/case-studies/anand-fashion",
      status: "in-progress",
    },

    {
      title: "Jayesh Sir – E-Learning Platform",
      category: "EdTech Platform",
      image: "/portfolio/jayesh-sir.jpg",
      description:
        "A SaaS-style learning platform designed for structured courses, secure student access, and future Android app deployment.",
      outcomes: ["PWA-Ready", "Secure Login", "Scalable Courses"],
      tech: ["Next.js", "Supabase", "TypeScript"],
      href: "/case-studies/jayesh-sir-elearning",
      status: "in-progress",
    },

    {
      title: "EasyMed – Pharmacy Inventory",
      category: "Inventory System",
      image: "/portfolio/easymed.jpg",
      description:
        "A retail-first inventory system created to simplify medicine stock tracking, expiry visibility, and daily pharmacy operations.",
      outcomes: ["Stock Control", "Expiry Tracking", "Retail-Focused UX"],
      tech: ["React", "FastAPI", "MongoDB"],
      href: "/case-studies/easymed",
      status: "concept",
    },

    {
      title: "FreshMart – Grocery Admin System",
      category: "Internal Business System",
      image: "/portfolio/freshmart.jpg",
      description:
        "A Blinkit-style grocery management system built to handle products, orders, and admin workflows in real-world conditions.",
      outcomes: ["Admin Dashboard", "Order Management", "Scalable Backend"],
      tech: ["React", "FastAPI", "MongoDB Atlas"],
      href: "/case-studies/freshmart",
      status: "concept",
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto py-20">
        {/* ================= HERO HEADING ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="text-sm text-[#f3d07a] font-semibold">
              Our Work
            </span>
            <h1 className="text-4xl font-extrabold mt-2 mb-3">
              A Showcase of Real Projects & Systems
            </h1>
            <p className="text-slate-300 max-w-2xl">
              Clean, scalable websites and SaaS-ready systems built for real
              businesses — focused on clarity, usability, and long-term growth.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= PORTFOLIO SECTION ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <motion.div variants={fadeUp}>
            <span className="text-sm text-[#f3d07a] font-semibold">
              Portfolio
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-3">Recent Projects</h2>
            <p className="text-slate-300 max-w-2xl">
              Websites, platforms, and internal systems designed and developed
              for different industries and business stages.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.05)] bg-transparent"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Image */}
              <div className="relative h-44 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Header */}
              <div className="px-4 pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#f3d07a] bg-[rgba(243,208,122,0.08)] px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <span className="text-xs text-slate-400 capitalize">
                  {p.status.replace("-", " ")}
                </span>
              </div>

              {/* Body */}
              <div className="px-4 pb-4 pt-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{p.description}</p>

                {/* Outcomes */}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.outcomes.map((o) => (
                    <span
                      key={o}
                      className="bg-[rgba(255,255,255,0.04)] px-2 py-1 rounded text-slate-300"
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {p.href && (
                  <Link
                    href={p.href}
                    className="inline-block mt-4 text-sm text-[#f3d07a] hover:underline"
                  >
                    View case study →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA – GOLDEN REVEAL ================= */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{
              boxShadow:
                "0 10px 40px rgba(18,24,38,0.6), 0 0 40px rgba(243,208,122,0.25)",
              scale: 1.015,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="
      relative overflow-hidden rounded-xl 
      border border-[rgba(243,208,122,0.25)]
      bg-[#0b1220]
      p-8
      flex flex-col md:flex-row items-center justify-between gap-6
    "
          >
            {/* Golden Glow Layer */}
            <div
              className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
      "
            />

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl font-semibold">
                Want a system like this?
              </h3>
              <p className="text-slate-300 mt-2">
                We design clean websites and SaaS-ready systems built for real
                business growth — not over-engineered solutions.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
        relative z-10
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        font-semibold
        text-black
        bg-[#f3d07a]
        hover:brightness-95
        transition
      "
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

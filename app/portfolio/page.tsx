"use client";

import Link from "next/link";
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
  tag?: string;
  tech?: string[];
  href?: string;
  status?: "in-progress" | "live";
};

export default function PortfolioPage() {
  const reduce = useReducedMotion();

  // exact same glow used across site
  const glowHover = {
    scale: 1.02,
    boxShadow:
      "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
  };

  // Portfolio projects
  const projects: Project[] = [
    {
      title: "Anand Fashion",
      description:
        "A local clothing store website built to establish a structured online presence. Visual assets and final content are currently being prepared by the client.",
      tag: "Clothing Store Website",
      tech: ["Next.js", "Tailwind CSS"],
      href: "/case-studies/anand-fashion",
      status: "in-progress",
    },
    {
      title: "Anand Fashion",
      description:
        "A local clothing store website built to establish a structured online presence. Visual assets and final content are currently being prepared by the client.",
      tag: "Client Website",
      tech: ["Next.js", "Tailwind CSS"],
      href: "/case-studies/anand-fashion",
      status: "in-progress",
    },

    {
      title: "Jayesh Sir E-Learning Platform",
      description:
        "A PWA-first online learning platform designed for structured courses, secure student access, and scalable content delivery. Built with a production-ready architecture for future Android deployment.",
      tag: "EdTech Platform",
      tech: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Supabase Auth",
        "PWA",
      ],
      // no href yet – case study can be added later
      status: "in-progress",
    },

    {
      title: "EasyMed – Pharmacy Inventory System",
      description:
        "A batch-wise medicine inventory system focused on expiry tracking, stock visibility, and owner-centric usability. Built as a real-world case study after analyzing limitations of existing ERP workflows.",
      tag: "Inventory System",
      tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB"],
      status: "in-progress",
    },

    {
      title: "FreshMart – Grocery Admin & Order System",
      description:
        "A Blinkit-style grocery management system featuring admin dashboards, product catalogs, cart flow, and order handling. Built with heavy real-world debugging and backend integration experience.",
      tag: "Internal System",
      tech: ["React", "FastAPI", "MongoDB Atlas"],
      status: "in-progress",
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto py-20">
        {/* Section Heading */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-sm text-[#f3d07a] font-semibold">
              Portfolio
            </span>
            <h1 className="text-4xl font-extrabold mt-2 mb-3">
              Recent Projects
            </h1>
            <p className="text-slate-300 mb-8">
              A selection of real client work and production-grade builds.
            </p>
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
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
              className="block rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] bg-transparent"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              whileTap={{ scale: reduce ? 0.99 : 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Header / Status */}
              <div className="px-4 pt-4 flex items-center justify-between">
                <span className="inline-block text-xs font-medium text-[#f3d07a] bg-[rgba(243,208,122,0.06)] px-3 py-1 rounded-full">
                  {p.tag}
                </span>

                {p.status === "in-progress" && (
                  <span className="text-xs text-slate-400">In Progress</span>
                )}
              </div>

              {/* Body */}
              <div className="px-4 pb-4 pt-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                  {p.tech?.map((t) => (
                    <span
                      key={t}
                      className="bg-[rgba(255,255,255,0.02)] px-2 py-1 rounded"
                    >
                      {t}
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

        {/* CTA Band */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="glass p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4"
            whileHover={!reduce ? glowHover : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <div>
              <h3 className="text-xl font-semibold">
                Want a website like this?
              </h3>
              <p className="text-slate-300">
                We build clean, scalable websites tailored to your business
                stage.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-3 md:mt-0 inline-block px-5 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

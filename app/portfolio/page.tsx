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

export default function PortfolioPage() {
  const reduce = useReducedMotion();

  // exact same glow used on About page
  const glowHover = {
    scale: 1.02,
    boxShadow:
      "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
  };

  // Add your real projects when ready
  type Project = {
    title: string;
    description: string;
    thumb?: string;
    tag?: string;
    tech?: string[];
    href?: string;
  };
  const projects: Project[] = [];
  // empty for now

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto py-20">
        {/* Section Heading */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-sm text-[#f3d07a] font-semibold">Portfolio</span>
            <h1 className="text-4xl font-extrabold mt-2 mb-3">Recent Projects</h1>
            <p className="text-slate-300 mb-8">Websites designed and developed for clients across industries.</p>
          </motion.div>
        </motion.div>

        {/* If no projects, show clean Coming Soon */}
        {projects.length === 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-slate-400 py-20"
          >
            <h3 className="text-2xl font-semibold mb-2">Portfolio Coming Soon</h3>
            <p className="text-slate-500">New projects are being added. Check back shortly.</p>
          </motion.div>
        )}

        {/* Portfolio Grid (will appear when projects added) */}
        {projects.length > 0 && (
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] bg-transparent"
                variants={fadeUp}
                whileHover={!reduce ? glowHover : undefined}
                whileTap={{ scale: reduce ? 0.99 : 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {/* Thumbnail */}
                <div className="w-full h-44 md:h-36 lg:h-40 overflow-hidden bg-[rgba(255,255,255,0.02)]">
                  {p.thumb ? (
                    // prefer next/image in production, this keeps your structure
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.thumb} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                      No preview
                    </div>
                  )}
                </div>

                {/* Tag */}
                <div className="px-4 pt-4">
                  <span className="inline-block text-xs font-medium text-[#f3d07a] bg-[rgba(243,208,122,0.06)] px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 pb-4 pt-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-slate-300 mt-2 text-sm">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    {p.tech?.map((t) => (
                      <span key={t} className="bg-[rgba(255,255,255,0.02)] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

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
              <h3 className="text-xl font-semibold">Want a website like these?</h3>
              <p className="text-slate-300">We create custom premium websites tailored to your business.</p>
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

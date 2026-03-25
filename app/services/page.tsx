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
  boxShadow: "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18)",
};

export default function ServicesPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-[#f3d07a] text-sm uppercase font-semibold"
            variants={fadeUp}
          >
            Website Design & Development Services in Udaipur
          </motion.span>

          <motion.h1 className="text-4xl font-extrabold mt-3" variants={fadeUp}>
            Web Solutions Built for{" "}
            <span className="text-[#f3d07a]">Real Business Growth</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            We offer website design, web development, SaaS platforms, and
            business systems in Udaipur — built for performance, SEO, and
            long-term growth.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold">Our Services</h2>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((srv, i) => (
            <motion.div
              key={i}
              className="glass p-6 rounded-xl border border-[#f3d07a]/20"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
            >
              <div className="text-4xl mb-3">{srv.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>

              <p className="text-slate-300 mb-4">{srv.desc}</p>

              <ul className="text-slate-300 space-y-1 text-sm">
                {srv.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🔥 INTERNAL SEO LINKS (VERY IMPORTANT) */}
      <section className="py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Explore Our Specialized Services
        </h2>

        <p className="text-slate-300 mb-6">
          We offer dedicated solutions for website design and web development in
          Udaipur.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-udaipur"
            className="px-6 py-3 rounded-xl border border-[#f3d07a]/40 text-[#f3d07a]"
          >
            Website Design in Udaipur →
          </Link>

          <Link
            href="/web-development-udaipur"
            className="px-6 py-3 rounded-xl border border-[#f3d07a]/40 text-[#f3d07a]"
          >
            Web Development in Udaipur →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Build Your Website?
        </h3>

        <p className="text-slate-300 mb-6">
          Let’s create a website or system that actually grows your business.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-[#f3d07a] text-black rounded-xl font-semibold"
        >
          Start Your Project →
        </Link>
      </section>
    </main>
  );
}

/* SERVICES DATA */

const services = [
  {
    icon: "💻",
    title: "Business Website Design",
    desc: "Professional websites for local businesses.",
    items: ["Company websites", "Portfolio", "Mobile-first UI"],
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "High-converting landing pages.",
    items: ["Lead capture", "Sales pages", "Funnels"],
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    desc: "Modern online stores.",
    items: ["Products", "Payments", "Orders"],
  },
  {
    icon: "⚙️",
    title: "SaaS Applications",
    desc: "Custom dashboards and systems.",
    items: ["Admin panels", "Auth", "Scalable"],
  },
  {
    icon: "📊",
    title: "Business Systems",
    desc: "Internal tools & automation.",
    items: ["Inventory", "Reports", "Automation"],
  },
  {
    icon: "🛠️",
    title: "Maintenance",
    desc: "Ongoing support.",
    items: ["Bug fixes", "Security", "Performance"],
  },
];

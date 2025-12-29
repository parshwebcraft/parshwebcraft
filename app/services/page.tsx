"use client";

import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// SAME glow hover as About page
const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function ServicesPage() {
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
            Our Services
          </motion.span>

          <motion.h1
            className="text-4xl font-extrabold mt-3 leading-snug"
            variants={fadeUp}
          >
            Premium Digital Solutions That <br />
            <span className="text-[#f3d07a]">Support Business Growth</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            From high-performance websites to custom SaaS platforms and internal
            business systems — ParshWebCraft builds digital products designed for
            clarity, performance, and long-term use.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= GRID HEAD ================= */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <span className="text-[#f3d07a] text-sm tracking-wide uppercase font-semibold">
            What We Offer
          </span>

          <h2 className="text-3xl font-bold mt-2">
            Websites, SaaS & Business Systems
          </h2>

          <p className="text-slate-300 max-w-xl mx-auto mt-3">
            We focus on building systems that are simple to use, scalable, and
            aligned with real business workflows.
          </p>
        </div>

        {/* ================= SERVICE GRID ================= */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((srv, i) => (
            <motion.div
              key={i}
              className="glass p-6 rounded-xl border border-[rgba(243,208,122,0.15)] bg-transparent 
                         transition-all duration-300 cursor-pointer"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-3">{srv.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>

              <p className="text-slate-300 mb-4">{srv.desc}</p>

              <ul className="text-slate-300 space-y-1 text-sm">
                {srv.items.map((it, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#f3d07a]">•</span> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA SECTION ================= */}
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
              Looking to Build a Reliable Digital System?
            </h3>
            <p className="text-slate-300">
              Whether it’s a website, SaaS product, or internal tool — we’ll help
              you build it right.
            </p>
          </div>

          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f3d07a] to-[#e6c35a]
                       text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>
    </main>
  );
}

/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: "💻",
    title: "Business Websites",
    desc: "Fast, responsive, and SEO-optimized websites built for trust and lead generation.",
    items: ["Company websites", "Portfolio sites", "Mobile-first UI"],
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "High-converting landing pages for marketing campaigns and ads.",
    items: ["Lead capture pages", "Sales funnels", "Campaign microsites"],
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    desc: "Clean, scalable online stores with modern UX and secure payments.",
    items: ["Product catalogs", "Payment integration", "Order management"],
  },
  {
    icon: "⚙️",
    title: "SaaS & Web Applications",
    desc: "Custom SaaS platforms and web applications tailored to your business logic.",
    items: ["Role-based access", "Dashboards", "Scalable architecture"],
  },
  {
    icon: "📊",
    title: "Internal Business Systems",
    desc: "Custom systems built to simplify operations and daily workflows.",
    items: ["Admin panels", "Inventory systems", "Workflow tools"],
  },
  {
    icon: "📅",
    title: "Booking & Appointment Systems",
    desc: "Automated scheduling solutions for service-based businesses.",
    items: ["Calendar sync", "Auto confirmations", "WhatsApp & email alerts"],
  },
  {
    icon: "⚡",
    title: "SEO & Performance Optimization",
    desc: "Improve visibility and speed for better user experience and rankings.",
    items: ["Technical SEO", "Core Web Vitals", "Mobile optimization"],
  },
  {
    icon: "🤖",
    title: "Automation & Integrations",
    desc: "Automate repetitive tasks and connect your tools seamlessly.",
    items: ["CRM integration", "Lead automation", "Custom workflows"],
  },
  {
    icon: "🛠️",
    title: "Website Maintenance & Support",
    desc: "Ongoing support to keep your system secure and stable.",
    items: ["Bug fixes", "Security updates", "Performance monitoring"],
  },
];

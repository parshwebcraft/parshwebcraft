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
            Premium Website Services That <br />
            <span className="text-[#f3d07a]">Grow Your Business</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 max-w-2xl mx-auto mt-6"
            variants={fadeUp}
          >
            From high-converting landing pages to full business websites — ParshWebCraft
            provides everything your brand needs for a powerful online presence.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= GRID HEAD ================= */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <span className="text-[#f3d07a] text-sm tracking-wide uppercase font-semibold">
            What We Offer
          </span>

          <h2 className="text-3xl font-bold mt-2">Complete Website Solutions</h2>

          <p className="text-slate-300 max-w-xl mx-auto mt-3">
            We build premium digital experiences that convert visitors into customers.
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
            <h3 className="text-2xl font-bold mb-2">Need a Premium Website for Your Business?</h3>
            <p className="text-slate-300">
              Let ParshWebCraft create a high-performance, elegant, and modern website for you.
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

/* Services Data */
const services = [
  {
    icon: "💻",
    title: "Website Development",
    desc: "Fully responsive, premium, and high-performance business websites.",
    items: ["Business websites", "Portfolio websites", "Modern UI/UX"],
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "High converting landing pages for ad campaigns & lead generation.",
    items: ["Sales funnels", "Lead capture pages", "Marketing campaigns"],
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    desc: "Premium online stores with advanced features & clean UI.",
    items: ["WooCommerce setups", "Payment integration", "Product management"],
  },
  {
    icon: "📅",
    title: "Booking & Appointment System",
    desc: "Automated booking systems for service-based businesses.",
    items: ["Auto-confirmation", "Calendar sync", "WhatsApp & email alerts"],
  },
  {
    icon: "📈",
    title: "Sales Funnels",
    desc: "High-performance funnels to increase conversions & revenue.",
    items: ["Lead magnet funnel", "Checkout funnel", "Upsell/downsell pages"],
  },
  {
    icon: "🎨",
    title: "Branding + UI/UX",
    desc: "Premium branding visuals and modern UI frameworks.",
    items: ["Brand identity", "Color palette", "UI components"],
  },
  {
    icon: "⚡",
    title: "SEO & Speed Optimization",
    desc: "Rank higher and optimize speed for peak performance.",
    items: ["Technical SEO", "PageSpeed boost", "Mobile SEO"],
  },
  {
    icon: "🤖",
    title: "Automation & CRM Integration",
    desc: "Automate your business with CRM workflows.",
    items: ["HubSpot setup", "Lead automation", "Email & WhatsApp flows"],
  },
  {
    icon: "🛠️",
    title: "Website Maintenance",
    desc: "Keep your website secure and updated.",
    items: ["Security updates", "Backups", "Bug fixing"],
  },
];

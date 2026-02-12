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
  mentorship?: boolean;
};

export default function PortfolioPage() {
  const reduce = useReducedMotion();

  const glowHover = {
    scale: 1.02,
    boxShadow:
      "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
  };

  /* ================= PROJECTS ================= */

  const projects: Project[] = [
    // 🥇 TOP 1 — PARSHVYAPAR
    {
      title: "ParshVyapar — Billing & Inventory SaaS",
      category: "SaaS • Business Management",
      image: "/portfolio/parshvyapar.png",
      description:
        "A live, production-ready billing and inventory management SaaS built for Indian retail shops and growing businesses. Designed, developed, and launched as an in-house product by ParshWebCraft.",
      outcomes: [
        "Live SaaS Product",
        "GST Billing & PDF Invoices",
        "Subscription-Based Model",
      ],
      tech: ["FastAPI", "MongoDB", "React", "Next.js", "Cloud Hosting"],
      href: "https://www.parshvyapar.in/",
      status: "live",
    },

    {
      title: "Valentine Special – Interactive Celebration Website",
      category: "Interactive Campaign Website",
      image: "/portfolio/valentine-special.jpg",
      description:
        "A fully interactive Valentine-themed website built for personalized greetings, image uploads, animations, and shareable private links. Designed for high engagement and emotional impact.",
      outcomes: [
        "Custom Slug-Based Pages",
        "Image Upload Feature",
        "Razorpay Integration (Test Mode)",
      ],
      tech: [
        "Next.js",
        "MongoDB",
        "Razorpay",
        "Framer Motion",
        "Cloud Hosting",
      ],
      href: "https://valentine-special.vercel.app/", // 👈 replace with your exact live domain if different
      status: "live",
    },

    {
      title: "Kharka Mining LLP – Asset Website",
      category: "Mining & Industrial Asset",
      image: "/portfolio/kharka-mining-llp.png",
      description:
        "A professional asset-focused website built to present a large-scale mining operation, attract qualified operators, and enable structured contract or transfer discussions.",
      outcomes: [
        "Investor-Ready Presentation",
        "Qualified Lead Filtering",
        "Industrial-Grade UX",
      ],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      href: "https://kharka-mining-llp.vercel.app/",
      status: "live",
    },

    {
      title: "Bahubali Cabs – Taxi Service Website",
      category: "Local Business Website",
      image: "/portfolio/bahubali-cabs.png",
      description:
        "A premium taxi service website built for local SEO, instant WhatsApp bookings, and mobile-first customer conversion for Udaipur-based cab services.",
      outcomes: ["Local SEO Ready", "WhatsApp Booking CTA", "Mobile-First UX"],
      tech: ["React", "Tailwind CSS", "Vercel"],
      href: "https://bahubalicabs.com/",
      status: "live",
    },

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
      title: "Yashvi Rajpal – Portfolio Website",
      category: "Mentorship Project",
      image: "/portfolio/yashvirajpal.png",
      description:
        "Mentored a Computer Science undergraduate by designing, building, and deploying a production-ready portfolio website with real-world deployment practices.",
      outcomes: [
        "1:1 Mentorship",
        "Production Deployment",
        "Custom Domain & SSL",
      ],
      tech: ["React", "Tailwind CSS", "GitHub", "Vercel", "DNS & SSL"],
      href: "https://yashvirajpal.dev",
      status: "live",
      mentorship: true,
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
      title: "EasyMed – Pharmacy Inventory System",
      category: "Inventory System",
      image: "/portfolio/easymed.jpg",
      description:
        "A retail-first inventory system designed to simplify medicine stock tracking, expiry visibility, and daily pharmacy operations.",
      outcomes: ["Stock Control", "Expiry Tracking", "Retail-Focused UX"],
      tech: ["React", "FastAPI", "MongoDB"],
      href: "/case-studies/easymed",
      status: "concept",
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto py-20">
        {/* ================= HERO ================= */}
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
              A Showcase of Real Products & Projects
            </h1>
            <p className="text-slate-300 max-w-2xl">
              From live SaaS products to business websites and mentorship-driven
              builds. Everything here is designed for real usage, not demos.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= PORTFOLIO GRID ================= */}
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
              className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.05)] bg-transparent relative"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Mentorship badge */}
              {p.mentorship && (
                <span className="absolute top-3 right-3 z-10 text-xs font-semibold text-[#0e0e11] bg-[#f3d07a] px-3 py-1 rounded-full">
                  Mentorship
                </span>
              )}

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
                <span
                  className={`text-xs capitalize ${
                    p.status === "live" ? "text-green-400" : "text-slate-400"
                  }`}
                >
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

                {/* Tech */}
                {p.tech && (
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[rgba(243,208,122,0.25)] px-2 py-1 rounded text-[#f3d07a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.href && (
                  <Link
                    href={p.href}
                    target={p.status === "live" ? "_blank" : undefined}
                    className="inline-block mt-4 text-sm text-[#f3d07a] hover:underline"
                  >
                    {p.status === "live"
                      ? "View live project →"
                      : "View case study →"}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

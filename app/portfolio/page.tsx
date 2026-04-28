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

  const projects: Project[] = [
    {
      title: "ParshVyapar — Billing & Inventory SaaS",
      category: "SaaS • Business Management",
      image: "/portfolio/parshvyapar.png",
      description:
        "A live, production-ready billing and inventory management SaaS built for Indian retail shops and growing businesses.",
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
      title: "Medexia Journal – Academic Publishing Website",
      category: "Journal & Research Website",
      image: "/portfolio/medexia-journal.png",
      description:
        "A professional international journal website built for research publication, article access, and author submissions with trust-focused design.",
      outcomes: [
        "Responsive Publishing Platform",
        "SEO Optimized Structure",
        "Author Submission Ready Pages",
        "Professional Academic Branding",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
      href: "https://www.medexiajournal.org/",
      status: "live",
    },
    {
      title: "Kharka Mining LLP – Asset Website",
      category: "Mining & Industrial Asset",
      image: "/portfolio/kharka-mining-llp.png",
      description:
        "An industrial-grade website built to present mining operations and attract qualified operators.",
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
        "A mobile-first taxi website built for local SEO and instant WhatsApp bookings.",
      outcomes: ["Local SEO Ready", "WhatsApp Booking CTA", "Mobile-First UX"],
      tech: ["React", "Tailwind CSS", "Vercel"],
      href: "https://bahubalicabs.com/",
      status: "live",
    },
    {
      title: "OSPF Official Website",
      category: "Organization Website",
      image: "/portfolio/ospf-platform.png",
      description:
        "A professional website developed for an organization with member access, structured information pages, and secure login features.",
      outcomes: [
        "Professional Brand Presence",
        "Secure Login System",
        "Member Access Section",
        "Responsive Website Experience",
      ],
      tech: ["React", "Node.js", "MongoDB"],
      href: "https://www.ospfudr.com/",
      status: "live",
    },

    // 🔥 NEW PROJECTS

    {
      title: "Him Cream Naturals — QR Ordering System",
      category: "Restaurant Tech • QR Ordering",
      image: "/portfolio/him-cream.png",
      description:
        "A complete QR-based ordering system deployed for Him Cream Naturals, enabling customers to scan and order directly from their table.",
      outcomes: [
        "QR Menu System Live",
        "Table-Based Ordering Flow",
        "Deployed in Udaipur Store",
      ],
      tech: ["Next.js", "MongoDB", "QR System", "Vercel"],
      href: "https://www.himcreamnaturals.com/select-table",
      status: "live",
    },

    {
      title: "Anand Fashion Udaipur — Ecommerce Website",
      category: "Ecommerce Website",
      image: "/portfolio/anand-fashion.png",
      description:
        "A product-heavy ecommerce-style website built for Anand Fashion with large inventory handling and catalog browsing.",
      outcomes: [
        "500+ Product Handling",
        "Catalog-Based Browsing",
        "Client Revenue Enablement",
      ],
      tech: ["React", "MongoDB", "Vercel"],
      href: "https://www.anandfashionudaipur.com/",
      status: "live",
    },

    {
      title: "Bullet Raja Showroom — Digital Presence",
      category: "Showroom Website",
      image: "/portfolio/bullet-raja.png",
      description:
        "A showroom-focused website designed to highlight premium bike inventory and improve local reach.",
      outcomes: [
        "Showroom Branding",
        "Inventory Highlight",
        "Local Customer Reach",
      ],
      tech: ["React", "Tailwind CSS"],
      href: "https://bulletrajweb.vercel.app/",
      status: "live",
    },
    {
      title: "Strong Fit — Fitness Brand Website",
      category: "Fitness Website",
      image: "/portfolio/strong-fit.png",
      description:
        "A fitness-focused website built to represent the Strong Fit brand and convert visitors into gym members.",
      outcomes: ["Brand Positioning", "Lead Capture", "Mobile-First Design"],
      tech: ["Next.js", "Tailwind CSS"],
      href: "https://strongfitweb.vercel.app/",
      status: "live",
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto py-20">
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
              Everything here is built for real usage, not demos.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="rounded-lg overflow-hidden border border-white/5 bg-transparent relative"
              variants={fadeUp}
              whileHover={!reduce ? glowHover : undefined}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {p.mentorship && (
                <span className="absolute top-3 right-3 z-10 text-xs font-semibold text-black bg-[#f3d07a] px-3 py-1 rounded-full">
                  Mentorship
                </span>
              )}

              <div className="relative h-44 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={p.status === "live"}
                />
              </div>

              <div className="px-4 pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#f3d07a] bg-[#f3d07a]/10 px-3 py-1 rounded-full">
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

              <div className="px-4 pb-4 pt-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.outcomes.map((o) => (
                    <span
                      key={o}
                      className="bg-white/5 px-2 py-1 rounded text-slate-300"
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {p.tech && (
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[#f3d07a]/25 px-2 py-1 rounded text-[#f3d07a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.href && (
                  <Link
                    href={p.href}
                    target="_blank"
                    className="inline-block mt-4 text-sm text-[#f3d07a] hover:underline"
                  >
                    View live project →
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

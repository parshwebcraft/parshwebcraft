"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ParshVyaparPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-28 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto">
        {/* ================= HERO ================= */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium">
            LIVE SaaS Product
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            ParshVyapar
          </h1>

          <p className="text-xl text-[#f3d07a] font-semibold mt-3">
            Billing & Inventory Management SaaS for Indian Businesses
          </p>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            ParshVyapar is a production-ready billing, inventory, and business
            management platform built for local shops, retailers, and growing
            businesses in India. Designed, developed, and launched by
            ParshWebCraft.
          </p>
        </div>

        {/* ================= WHAT IS PARSHVYAPAR ================= */}
        <Section
          title="What is ParshVyapar?"
          desc="ParshVyapar is a cloud-based business management SaaS that helps shop owners handle billing, inventory, GST invoices, and reports from a single dashboard. It replaces manual billing, Excel sheets, and outdated software with a modern, secure system."
        />

        {/* ================= CORE FEATURES ================= */}
        <Section title="Core Features">
          <FeatureGrid
            items={[
              "Product & inventory management with stock tracking",
              "Fast billing system for daily sales",
              "Customer details capture (name, mobile)",
              "GST-compliant invoice generation",
              "Shop profile with name, address & GSTIN",
              "Admin dashboard with sales overview",
            ]}
          />
        </Section>

        {/* ================= GST BILLING ================= */}
        <Section
          title="GST Billing & Invoicing"
          desc="ParshVyapar supports proper GST billing as per Indian compliance. Shop owners can generate GST invoices with accurate tax calculations and business details."
        >
          <FeatureGrid
            items={[
              "GSTIN configuration per shop",
              "CGST, SGST, IGST calculation",
              "Tax breakup shown clearly on invoices",
              "Invoice numbering & date tracking",
              "Business name & address printed on bill",
            ]}
          />
        </Section>

        {/* ================= PDF INVOICES ================= */}
        <Section
          title="PDF Invoice Generation"
          desc="Every bill generated in ParshVyapar can be downloaded or shared as a professional PDF invoice."
        >
          <FeatureGrid
            items={[
              "Auto-generated PDF bills",
              "Printable invoice layout",
              "Customer & shop details included",
              "GST breakdown visible on PDF",
              "Ready for WhatsApp or email sharing",
            ]}
          />
        </Section>

        {/* ================= SUBSCRIPTION MODEL ================= */}
        <Section
          title="Subscription-Based SaaS Model"
          desc="ParshVyapar works on a simple and affordable subscription model designed for small and medium businesses."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <Pricing
              title="Starter"
              price="₹199 / month"
              features={[
                "Billing & inventory",
                "Basic reports",
                "PDF invoices",
                "Single device access",
              ]}
            />
            <Pricing
              title="Business"
              price="₹399 / month"
              highlight
              features={[
                "All Starter features",
                "GST billing",
                "Advanced reports",
                "Priority support",
              ]}
            />
            <Pricing
              title="Enterprise"
              price="Custom"
              features={[
                "Multiple users",
                "Custom features",
                "Dedicated support",
                "White-label option",
              ]}
            />
          </div>
        </Section>

        {/* ================= WHY PARSHVYAPAR ================= */}
        <Section
          title="Why Businesses Choose ParshVyapar"
          desc="ParshVyapar is not a demo or college project. It is a real SaaS product built to handle real shops, real transactions, and real business growth."
        >
          <FeatureGrid
            items={[
              "Built specifically for Indian retail use cases",
              "No complex setup or training required",
              "Secure cloud-based system",
              "Designed to scale as business grows",
              "Founder-built & actively maintained",
            ]}
          />
        </Section>

        {/* ================= CTA ================= */}
        <motion.div
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white">
            Want to Use ParshVyapar for Your Business?
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Contact us to get early access, pricing details, or a customized
            version for your business category.
          </p>

          <a
            href="/contact?intent=parshvyapar"
            className="inline-flex mt-8 px-8 py-4 rounded-full bg-[#f3d07a] text-black font-semibold hover:brightness-95 transition"
          >
            Get ParshVyapar for Your Shop
          </a>
        </motion.div>
      </section>
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      {desc && <p className="text-slate-300 mt-4 max-w-3xl">{desc}</p>}
      {children}
    </div>
  );
}

function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-4 rounded-xl border border-[#2a2a2a] text-slate-300"
        >
          <span className="text-[#f3d07a] mt-1">✔</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Pricing({
  title,
  price,
  features,
  highlight,
}: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-2xl border ${
        highlight ? "border-[#f3d07a] bg-[#0b1220]" : "border-[#2a2a2a]"
      }`}
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-2xl font-bold text-[#f3d07a] mt-2">{price}</p>

      <ul className="mt-6 space-y-2 text-slate-300">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}

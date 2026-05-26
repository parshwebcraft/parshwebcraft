import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parsh Care Clinic ERP Case Study | Healthcare SaaS by ParshWebCraft",
  description:
    "Case study of Parsh Care, a live clinic ERP and diagnostics platform for patient records, appointments, prescriptions, billing, payroll, lab workflow, and clinic analytics.",
  keywords: [
    "clinic ERP software",
    "healthcare SaaS",
    "diagnostics ERP",
    "clinic management software",
    "SaaS development company",
  ],
  openGraph: {
    title: "Parsh Care Clinic ERP Case Study",
    description:
      "A live clinic ERP and diagnostics platform built by ParshWebCraft for modern healthcare operations.",
    url: "https://www.parshwebcraft.in/case-studies/parsh-care",
    images: ["/portfolio/parsh-care.svg"],
  },
};

const goldHover =
  "transition-all duration-300 hover:-translate-y-1 hover:border-[#f3d07a]/50 hover:shadow-[0_0_40px_rgba(243,208,122,0.15)]";

export default function ParshCareCaseStudy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <header className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f3d07a]">
          Healthcare SaaS · Live ERP Platform
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          Parsh Care — Clinic ERP & Diagnostics Platform
        </h1>
        <p className="text-slate-300 max-w-3xl leading-8">
          Parsh Care is a live clinic ERP built for clinics and diagnostic
          centers that need a clean daily workflow across reception, patient
          records, appointments, prescriptions, lab operations, billing,
          expenses, payroll, and analytics.
        </p>
      </header>

      <section className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <Image
          src="/portfolio/parsh-care.svg"
          alt="Parsh Care clinic ERP login and diagnostics platform interface"
          width={1200}
          height={675}
          priority
          className="w-full"
        />
      </section>

      <section className="mb-14 grid gap-5 sm:grid-cols-3">
        {[
          ["Live Platform", "Deployed at care.parshwebcraft.in"],
          ["Healthcare ERP", "Patients, billing, diagnostics and reports"],
          ["Secure Access", "Separate account for every center"],
        ].map(([title, text]) => (
          <div
            key={title}
            className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${goldHover}`}
          >
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </section>

      <section className="mb-14 border-l-2 border-[#f3d07a]/40 pl-6">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          Clinics often manage patients, billing, lab entries, staff attendance,
          expenses, and reporting across scattered tools. Parsh Care brings
          those workflows into one web-based ERP so clinic teams can work faster
          and owners can see operations clearly.
        </p>
      </section>

      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Core Modules</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Patient records and visit history",
            "Appointments and reception workflow",
            "Prescriptions, reports and diagnostics flow",
            "Billing, expenses and clinic analytics",
            "Payroll and staff attendance support",
            "Separate secure account for every center",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-black/20 p-4 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className={`mb-14 rounded-2xl border border-white/10 bg-white/5 p-8 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Business Impact</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Cleaner daily workflow for reception, lab, billing and admin</li>
          <li>Better visibility into clinic operations and financial activity</li>
          <li>Reduced dependency on manual registers and scattered spreadsheets</li>
          <li>Scalable architecture for multi-center clinic operations</li>
        </ul>
      </section>

      <section
        className={`relative rounded-3xl border border-[#f3d07a]/30 bg-gradient-to-br from-[#f3d07a]/15 via-transparent to-transparent p-10 ${goldHover}`}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Need a Clinic ERP or Healthcare SaaS?
        </h2>
        <p className="text-slate-300 mb-6 max-w-2xl">
          ParshWebCraft builds custom ERP and SaaS platforms for healthcare,
          diagnostics, retail, education, and service businesses with secure
          dashboards and scalable workflows.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://care.parshwebcraft.in/login"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:shadow-md transition"
          >
            View Live Platform
          </Link>
          <Link
            href="/contact?intent=clinic-erp"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black font-semibold"
          >
            Build Similar ERP
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ParshHire Case Study | ParshWebCraft",
  description:
    "Case study of ParshHire, a complete applicant tracking system (ATS) and recruitment platform built by ParshWebCraft.",
};

export default function ParshHireCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-14">
        <h1 className="text-4xl font-bold mb-4">
          ParshHire — Recruitment & ATS Platform
        </h1>
        <p className="text-slate-400 max-w-2xl">
          A modern, full-stack Applicant Tracking System (ATS) built to streamline candidate pipelines, parse resumes, and organize hiring workflows.
        </p>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-slate-400">
          For growing companies and agencies, managing job postings across multiple channels and tracking candidate pipelines manually is highly inefficient. ParshHire was developed as a unified workspace where recruiters can post jobs, receive applications, run automated resume parses, and manage interview schedules in a single drag-and-drop workflow.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Visual Candidate Pipeline (Applied, Interview, Offered, Hired)</li>
          <li>AI-powered resume parsing highlighting key skills and experience</li>
          <li>Recruiter dashboard showing application rates, open listings, and time-to-hire</li>
          <li>Custom public job board with structured application forms</li>
          <li>Interviewer notes and scoring systems out-of-the-box</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Next.js & React</li>
          <li>Supabase (Database, Auth & Real-Time updates)</li>
          <li>Tailwind CSS & Framer Motion for premium drag-and-drop animation</li>
          <li>Cloud File Storage for resume uploads</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
        <p className="text-slate-400">
          ParshHire provides a lightweight yet powerful recruitment tool that replaces complex legacy enterprise systems, reducing time-to-hire and automating resume screening workflows for operations teams.
        </p>
      </section>

      {/* Back link */}
      <Link
        href="/case-studies"
        className="text-amber-400 hover:underline"
      >
        ← Back to Case Studies
      </Link>
    </main>
  );
}

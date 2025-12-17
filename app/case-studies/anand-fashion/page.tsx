import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anand Fashion Case Study | ParshWebCraft",
  description:
    "Case study of a local clothing store website built by ParshWebCraft using Next.js.",
};

export default function AnandFashionCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Anand Fashion — Clothing Store Website
        </h1>
        <p className="text-slate-400 max-w-2xl">
          A real client project focused on creating a clean, structured online
          presence for a local clothing store.
        </p>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-slate-400">
          Anand Fashion required a modern website to showcase their clothing
          categories and brand identity. The goal was to build a fast,
          mobile-friendly website that clearly presents products and store
          information without overcomplicating the system.
        </p>
      </section>

      {/* What We Built */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What We Built</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Multi-page clothing store website</li>
          <li>Category-based product structure (Shirts, Jeans, etc.)</li>
          <li>Mobile-first, responsive layout</li>
          <li>SEO-friendly page structure</li>
          <li>Fast deployment with modern tooling</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Next.js (App Router)</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Vercel Deployment</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
        <p className="text-slate-400">
          The project resulted in a structured, production-ready website that
          provides Anand Fashion with a strong digital presence and a foundation
          for future enhancements.
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

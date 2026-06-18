import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbon AI Case Study | ParshWebCraft",
  description:
    "Case study of Carbon AI, an advanced voice calling AI agent and call sentiment analytics platform built by ParshWebCraft.",
};

export default function CarbonAICaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Carbon AI — Voice Calling Agent & Analyst
        </h1>
        <p className="text-slate-400 max-w-2xl">
          An advanced AI voice agent dashboard designed to automate voice calling, provide real-time transcriptions, and run post-call sentiment analysis.
        </p>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-slate-400">
          Carbon AI was built to solve the challenges of manual sales calling and customer feedback collection. By decoupling the interface from legacy telephony networks and using AI-powered voice models, the system enables businesses to initiate automated calls that sound natural, capture details, and summarize findings in a unified analytics dashboard.
        </p>
      </section>

      {/* What We Built */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Automated Voice Calling with natural, customizable AI voices</li>
          <li>Real-time call transcription and user intent detection</li>
          <li>Executive post-call sentiment summaries and analysis</li>
          <li>CRM integration to log call status, duration, and conversion rates</li>
          <li>Telemetry dashboard with charts monitoring active agents and call volume</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Next.js & React (App Router)</li>
          <li>Twilio API & WebSockets for audio streaming</li>
          <li>Generative AI & LLM Voice Models</li>
          <li>Tailwind CSS & Chart.js for data visualization</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
        <p className="text-slate-400">
          The system enables businesses to handle hundreds of concurrent automated calls with sub-second audio response latency, freeing up support teams and providing managers with deep, structured analytical summaries of customer feedback.
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

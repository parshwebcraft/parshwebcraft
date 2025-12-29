import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayesh Sir E-Learning Platform | Case Study",
  description:
    "Case study of a PWA-first e-learning platform built for structured courses and secure student access.",
};

export default function JayeshSirCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Jayesh Sir — E-Learning Platform
      </h1>

      <p className="text-slate-300 mb-6">
        This project involved designing and building a PWA-first online learning
        platform focused on structured course delivery, secure authentication,
        and future scalability.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>PWA-first architecture using Next.js App Router</li>
        <li>Secure authentication and protected routes</li>
        <li>Course structure, enrollment flow, and admin access</li>
        <li>Planned Android deployment via Capacitor</li>
        <li>Built for real educator workflows, not demo usage</li>
      </ul>
    </main>
  );
}

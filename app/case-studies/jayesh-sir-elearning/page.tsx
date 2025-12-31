import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "E-Learning Platform Case Study – Jayesh Sir | Students from Udaipur, Jaipur & Rajasthan",
  description:
    "Case study of a PWA-first e-learning platform built for Jayesh Sir, serving students across Udaipur, Banswara, Jaipur and nearby regions. Secure access, structured courses, and scalable architecture.",
};

export default function JayeshSirCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Jayesh Sir — E-Learning Platform (Rajasthan-Based Students)
      </h1>

      <p className="text-slate-300 mb-6">
        This case study covers the design and development of a PWA-first
        e-learning platform built for Jayesh Sir, a Rajasthan-based educator.
        The platform currently supports students from Udaipur, Banswara,
        Jaipur, Chittorgarh, and surrounding regions, enabling structured
        online learning beyond a single city.
      </p>

      <p className="text-slate-300 mb-6">
        The goal was to create a scalable and secure digital learning system
        that allows students from multiple locations to access courses,
        notes, and learning material through a single, reliable web platform.
        The solution was designed with real classroom workflows in mind,
        ensuring smooth adoption by both students and educators.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>
          PWA-first architecture using Next.js App Router for fast and reliable
          access across devices
        </li>
        <li>
          Secure authentication and protected routes for enrolled students
        </li>
        <li>
          Structured course delivery supporting students across Udaipur,
          Jaipur, Banswara, and Chittorgarh
        </li>
        <li>
          Enrollment flow and admin access designed for real coaching
          institute operations
        </li>
        <li>
          Planned Android app deployment via Capacitor to expand reach further
          across Rajasthan
        </li>
        <li>
          Built for live educational use, not as a demo or experimental system
        </li>
      </ul>
    </main>
  );
}

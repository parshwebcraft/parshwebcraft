import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreshMart — Grocery Admin & Order System | Case Study",
  description:
    "Internal case study of a Blinkit-style grocery management system built with real-world backend debugging and admin workflows.",
};

export default function FreshMartCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        FreshMart — Grocery Admin & Order System
      </h1>

      <p className="text-slate-300 mb-6">
        FreshMart was built as an internal system to explore real-world challenges
        involved in developing a hyperlocal grocery platform, including admin
        workflows, inventory handling, and order processing.
      </p>

      <p className="text-slate-300 mb-6">
        Unlike surface-level demo apps, this project involved deep debugging of
        backend connectivity, authentication flow mismatches, and deployment
        issues commonly faced in production systems.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>

      <ul className="list-disc pl-6 space-y-3 text-slate-300 mb-8">
        <li>
          Blinkit-style admin dashboard for managing products, categories,
          banners, and orders
        </li>
        <li>
          Cart, checkout, and order flow with backend validation
        </li>
        <li>
          Extensive real-world debugging including MongoDB Atlas TLS issues,
          CORS configuration, and dependency conflicts
        </li>
        <li>
          Authentication and token handling fixes between frontend and backend
        </li>
        <li>
          Focused on stability, clarity, and admin usability over feature bloat
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>Frontend: React (CRA) with Tailwind CSS</li>
        <li>Backend: FastAPI</li>
        <li>Database: MongoDB Atlas</li>
        <li>Authentication: Token-based auth</li>
        <li>Tools: Git, GitHub, VS Code</li>
      </ul>
    </main>
  );
}

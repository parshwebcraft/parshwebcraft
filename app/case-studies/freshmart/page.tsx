import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperlocal Grocery Admin System Case Study – FreshMart | Udaipur",
  description:
    "Case study of a Blinkit-style hyperlocal grocery admin and order management system built for a Udaipur-based business. Focused on real-world backend debugging, admin workflows, and production stability.",
};

export default function FreshMartCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        FreshMart — Grocery Admin & Order System (Udaipur)
      </h1>

      <p className="text-slate-300 mb-6">
        FreshMart is a hyperlocal grocery admin and order management system
        developed as a real-world case study for a Udaipur-based retail
        business. The project was designed to understand the practical
        challenges involved in building a Blinkit-style grocery platform,
        including inventory control, admin workflows, and order processing.
      </p>

      <p className="text-slate-300 mb-6">
        Unlike surface-level demo applications, this system involved hands-on
        production debugging and backend problem-solving. The focus was on
        resolving real deployment issues, authentication mismatches, and
        frontend–backend integration challenges commonly faced by hyperlocal
        delivery platforms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>

      <ul className="list-disc pl-6 space-y-3 text-slate-300 mb-8">
        <li>
          Blinkit-style admin dashboard for managing products, categories,
          banners, pricing, and customer orders
        </li>
        <li>
          End-to-end cart, checkout, and order flow with backend-side validation
          and error handling
        </li>
        <li>
          Extensive real-world debugging including MongoDB Atlas TLS issues,
          CORS configuration, API mismatches, and dependency conflicts
        </li>
        <li>
          Authentication and token handling fixes between frontend and backend
          services
        </li>
        <li>
          Strong emphasis on system stability, admin usability, and operational
          clarity over unnecessary feature bloat
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>Frontend: React (CRA) with Tailwind CSS</li>
        <li>Backend: FastAPI</li>
        <li>Database: MongoDB Atlas</li>
        <li>Authentication: Token-based authentication</li>
        <li>Tools: Git, GitHub, VS Code</li>
      </ul>
    </main>
  );
}

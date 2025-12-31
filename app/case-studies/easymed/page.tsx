import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Inventory Management System Case Study – EasyMed | Udaipur",
  description:
    "Case study of a batch-wise pharmacy inventory management system built for a Udaipur-based medical store. Focused on expiry tracking, stock visibility, and owner-friendly usability.",
};

export default function EasyMedCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        EasyMed — Pharmacy Inventory System (Udaipur)
      </h1>

      <p className="text-slate-300 mb-6">
        EasyMed is a pharmacy inventory management system developed as a
        real-world case study after closely analyzing how small medical store
        owners in Udaipur manage stock, expiry dates, and day-to-day operations
        using traditional software and manual processes.
      </p>

      <p className="text-slate-300 mb-6">
        The goal of this system was not to replace full-scale ERP software, but
        to provide a lightweight, decision-support inventory solution that
        improves visibility, reduces errors, and simplifies inventory control
        for pharmacy owners.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>Batch-wise medicine tracking with clear expiry date visibility</li>
        <li>
          Automatic low-stock and out-of-stock alerts for better purchasing
          decisions
        </li>
        <li>Owner-centric user interface designed to reduce cognitive load</li>
        <li>
          Built using React, FastAPI, and MongoDB for performance and
          reliability
        </li>
        <li>
          Positioned as a practical inventory support system rather than a
          complex ERP replacement
        </li>
      </ul>
    </main>
  );
}

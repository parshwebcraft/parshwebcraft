import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyMed — Pharmacy Inventory System | Case Study",
  description:
    "Case study of a batch-wise pharmacy inventory system focused on expiry and stock control.",
};

export default function EasyMedCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        EasyMed — Pharmacy Inventory System
      </h1>

      <p className="text-slate-300 mb-6">
        EasyMed was built as a real-world inventory management case study after
        analyzing how small medical store owners interact with existing ERP
        systems.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-slate-300">
        <li>Batch-wise medicine tracking with expiry dates</li>
        <li>Automatic low-stock and out-of-stock visibility</li>
        <li>Owner-centric UI to reduce cognitive load</li>
        <li>Built with React, FastAPI, and MongoDB</li>
        <li>Positioned as a decision-support system, not an ERP replacement</li>
      </ul>
    </main>
  );
}

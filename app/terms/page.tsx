"use client";

import { motion } from "framer-motion";

/* Animations (same system-wide style) */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const glowHover = {
  scale: 1.02,
  boxShadow:
    "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center py-14">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35 }}
          className="inline-block text-sm text-[#f3d07a] font-semibold"
        >
          Legal
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold mt-3"
        >
          Terms & <span className="text-[#f3d07a]">Conditions</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
        >
          Please read these terms carefully before using ParshWebCraft services.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto pb-28 space-y-6">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="glass p-6 rounded-xl border border-[rgba(255,255,255,0.06)]"
            whileHover={glowHover}
          >
            <h2 className="text-xl font-semibold mb-3">{sec.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {sec.body}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

/* ===== Terms Content ===== */
const sections = [
  {
    title: "1. Services",
    body:
      "ParshWebCraft provides website design, development, SEO, maintenance, and related digital services. The scope of work is defined and agreed upon before project initiation.",
  },
  {
    title: "2. Payments",
    body:
      "All payments must be made as agreed before or during project milestones. Delays in payment may result in project pause or suspension.",
  },
  {
    title: "3. Project Timelines",
    body:
      "Estimated timelines are provided based on requirements. Delays caused by missing content, approvals, or third-party services are not the responsibility of ParshWebCraft.",
  },
  {
    title: "4. Revisions & Changes",
    body:
      "Reasonable revisions are included as per the selected plan. Major scope changes may require additional charges and timeline adjustments.",
  },
  {
    title: "5. Intellectual Property",
    body:
      "Upon full payment, ownership of the final website is transferred to the client. ParshWebCraft reserves the right to showcase completed projects in its portfolio.",
  },
  {
    title: "6. Maintenance & Support",
    body:
      "Ongoing maintenance is provided only if a maintenance plan is purchased. Otherwise, support beyond project delivery is not guaranteed.",
  },
  {
    title: "7. Limitation of Liability",
    body:
      "ParshWebCraft is not liable for any indirect or consequential damages arising from the use or inability to use the website or services.",
  },
  {
    title: "8. Termination",
    body:
      "Either party may terminate the agreement if terms are violated. Completed work up to the termination date must be compensated.",
  },
  {
    title: "9. Changes to Terms",
    body:
      "ParshWebCraft reserves the right to update these terms at any time. Continued use of services implies acceptance of the updated terms.",
  },
];

"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Animations (system-wide style) */
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
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto text-center py-14">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block text-sm text-[#f3d07a] font-semibold"
        >
          Legal
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold mt-3"
        >
          Terms & <span className="text-[#f3d07a]">Conditions</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
        >
          These terms explain how ParshWebCraft provides website development,
          SaaS platforms, and ongoing maintenance services. Please read them
          carefully before engaging with our services.
        </motion.p>
      </section>

      {/* ================= TERMS CONTENT ================= */}
      <section className="max-w-4xl mx-auto pb-20 space-y-6">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={!reduce ? glowHover : undefined}
            className="
              glass p-6 rounded-xl
              border border-[rgba(255,255,255,0.06)]
            "
          >
            <h2 className="text-xl font-semibold mb-3">{sec.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {sec.body}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ================= GOLDEN CTA ================= */}
      <motion.section
        className="pb-28"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={
            !reduce
              ? {
                  boxShadow:
                    "0 12px 40px rgba(18,24,38,0.65), 0 0 42px rgba(243,208,122,0.28)",
                  scale: 1.015,
                }
              : undefined
          }
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="
            relative overflow-hidden rounded-2xl
            border border-[rgba(243,208,122,0.28)]
            bg-[#0b1220]
            p-10
            max-w-4xl mx-auto
            text-center
          "
        >
          {/* Gold Glow */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(243,208,122,0.18),transparent_60%)]
            "
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">
              Have Questions About These Terms?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              If you’re planning a website, SaaS product, or long-term system
              and want clarity on payments, ownership, or maintenance, feel free
              to reach out before starting.
            </p>

            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                rounded-full
                bg-[#f3d07a]
                text-black
                font-semibold
                hover:brightness-95
                transition
              "
            >
              Contact ParshWebCraft
            </a>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

/* ================= TERMS CONTENT ================= */

const sections = [
  {
    title: "1. Scope of Services",
    body: "ParshWebCraft provides professional website development, SaaS application development, internal business systems, UI/UX design, SEO foundations, and optional maintenance services.\n\nThe exact scope of work is discussed and confirmed before the project begins. Any work outside the agreed scope may require additional time and cost.",
  },
  {
    title: "2. Website & SaaS Development",
    body: "Websites are typically built for marketing, lead generation, or informational purposes. SaaS platforms and internal systems involve more complex logic such as user roles, data storage, automation, and scalability.\n\nWe guide clients on whether a website or SaaS solution is appropriate, but the final decision rests with the client.",
  },
  {
    title: "3. Payments & Pricing",
    body: "Project pricing is agreed upon before work starts. Payments are usually milestone-based or upfront, depending on the project type.\n\nAll payments are non-refundable once work has commenced. Delayed payments may result in paused development or delayed delivery.",
  },
  {
    title: "4. Subscriptions & Maintenance Plans",
    body: "Maintenance services are offered as a monthly subscription and may include hosting support, security updates, performance monitoring, and minor fixes.\n\nMaintenance plans are optional but recommended for business-critical websites and SaaS systems. Subscription fees are billed monthly and can be cancelled with prior notice.",
  },
  {
    title: "5. Client Responsibilities",
    body: "Clients are responsible for providing accurate content, approvals, credentials, and timely feedback. Delays in providing these may affect project timelines.\n\nParshWebCraft is not responsible for delays caused by third-party services, hosting providers, payment gateways, or APIs.",
  },
  {
    title: "6. Revisions & Changes",
    body: "Reasonable revisions are included as per the selected plan. Major design changes, new features, or scope expansion after approval may require additional charges and revised timelines.",
  },
  {
    title: "7. Ownership & Intellectual Property",
    body: "Once full payment is received, ownership of the final website or system is transferred to the client, unless otherwise agreed.\n\nParshWebCraft retains the right to showcase completed projects or anonymized system screenshots in its portfolio and case studies.",
  },
  {
    title: "8. SaaS Usage & Responsibility",
    body: "For SaaS platforms developed by ParshWebCraft, ongoing usage, data management, and compliance responsibilities rest with the client.\n\nParshWebCraft is not responsible for misuse, data loss due to client actions, or legal compliance related to the client’s business operations.",
  },
  {
    title: "9. Limitation of Liability",
    body: "ParshWebCraft shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use any website, SaaS platform, or system.",
  },
  {
    title: "10. Termination",
    body: "Either party may terminate the engagement if terms are violated. Work completed up to the termination date must be paid for.\n\nNo refunds are provided for completed or in-progress work.",
  },
  {
    title: "11. Updates to Terms",
    body: "These terms may be updated periodically. Continued use of ParshWebCraft services implies acceptance of the latest version of these terms.",
  },
];

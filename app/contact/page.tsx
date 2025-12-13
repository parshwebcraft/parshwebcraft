"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const reduce = useReducedMotion();

  function handleSuccess() {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3200);
  }

  const whatsappNumber = "918442097839";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi ParshWebCraft! I want to discuss a website project."
  )}`;

  const glowHover = !reduce
    ? {
        scale: 1.02,
        boxShadow:
          "0 6px 24px rgba(18,24,38,0.5), 0 0 28px rgba(243,208,122,0.18), inset 0 0 18px rgba(243,208,122,0.03)",
      }
    : {};

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center py-12">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.35 }}
          className="inline-block text-sm text-[#f3d07a] font-semibold"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.03 }}
          className="text-4xl md:text-5xl font-extrabold mt-3"
        >
          Let’s Build Something <span className="text-[#f3d07a]">Amazing</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, delay: 0.06 }}
          className="text-slate-300 mt-4 max-w-2xl mx-auto"
        >
          Have a project in mind? Contact us and we’ll bring your vision to
          life.
        </motion.p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-start gap-10 py-10">
        {/* LEFT : CONTACT DETAILS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass p-6 rounded-2xl border border-[rgba(255,255,255,0.06)] max-w-md mx-auto md:mx-0 h-fit"
          whileHover={glowHover}
        >
          <h2 className="text-xl font-bold mb-2">Contact Details</h2>
          <p className="text-slate-300 text-sm mb-4">
            Reach out to us anytime — we are always happy to help.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="text-xl">📞</div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href={`tel:+91${whatsappNumber}`} className="text-slate-300">
                  +91 84420 97839
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-xl">📍</div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-slate-300">Udaipur, RJ, India</p>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold mb-1">Social</h4>
              <a
                href="https://www.instagram.com/parshwebcraft/"
                target="_blank"
                rel="noreferrer"
                className="text-[#f3d07a] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT : FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.06)]"
          whileHover={glowHover}
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm onSuccess={handleSuccess} />
        </motion.div>
      </section>

      {/* MAP */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[60%]"
          >
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>

            <motion.div
              className="relative rounded-xl overflow-hidden border border-[rgba(243,208,122,0.25)]"
              whileHover={glowHover}
            >
              <iframe
                src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
                loading="lazy"
                className="w-full h-[280px]"
                style={{ border: 0 }}
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
          whileHover={glowHover}
        >
          <div>
            <h3 className="text-xl font-semibold">
              Ready to Discuss Your Project?
            </h3>
            <p className="text-slate-300">
              Message me and I’ll get back to you within 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-3 md:mt-0 inline-block px-5 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
          >
            Start Now
          </Link>
        </motion.div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 bottom-6 right-6"
        whileHover={glowHover}
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg ring-4 ring-[rgba(243,208,122,0.08)]">
          <svg
            viewBox="0 0 32 32"
            width="22"
            height="22"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M16.003 3.2c-7.065 0-12.8 5.735-12.8 12.8 0 2.246.59 4.44 1.707 6.375L3.2 28.8l6.61-1.673a12.743 12.743 0 006.193 1.6h.001c7.065 0 12.8-5.735 12.8-12.8S23.068 3.2 16.003 3.2zm0 23.04a10.24 10.24 0 01-5.222-1.432l-.374-.224-3.918.99 1.046-3.82-.244-.393a10.2 10.2 0 01-1.58-5.434c0-5.647 4.595-10.24 10.292-10.24 5.648 0 10.24 4.593 10.24 10.24 0 5.647-4.592 10.24-10.24 10.24zm5.664-7.728c-.31-.155-1.83-.904-2.114-1.008-.284-.104-.492-.155-.7.155-.207.31-.803 1.008-.986 1.215-.18.207-.36.233-.67.078-.31-.155-1.31-.482-2.495-1.54-.923-.824-1.545-1.842-1.726-2.153-.18-.31-.02-.477.135-.63.14-.138.31-.36.465-.54.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.544-.078-.155-.7-1.688-.96-2.31-.252-.604-.508-.522-.7-.532l-.6-.01c-.207 0-.544.078-.83.388-.285.31-1.09 1.067-1.09 2.602 0 1.535 1.115 3.018 1.27 3.225.155.207 2.194 3.353 5.318 4.7.743.32 1.323.51 1.774.652.746.237 1.425.204 1.962.124.598-.09 1.83-.748 2.09-1.47.258-.724.258-1.345.18-1.47-.078-.124-.284-.207-.594-.362z" />
          </svg>
        </div>
      </motion.a>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/60" />
            <motion.div className="relative z-50 bg-[#0b1220] p-6 rounded-2xl max-w-md text-center">
              <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
              <p className="text-slate-300">
                Thanks for reaching out — I’ll contact you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

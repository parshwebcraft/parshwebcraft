"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSuccess() {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  const whatsappNumber = "919521347419";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi ParshWebCraft! I want to discuss a website or SaaS App development project."
  )}`;

  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Let’s Discuss Your Website Project
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Need a website, SaaS, or digital system? Share your requirements and
          get honest guidance.
        </p>

        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-black px-6 py-3 rounded-lg font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* GRID LAYOUT */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* CONTACT CARD */}
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold mb-3">Contact Details</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">📞 Phone / WhatsApp</p>
                <a href="tel:+919521347419" className="text-slate-300">
                  +91 95213 47419
                </a>
              </div>

              <div>
                <p className="font-semibold">📧 Email</p>
                <a
                  href="mailto:parshwebcraft@gmail.com"
                  className="text-slate-300"
                >
                  parshwebcraft@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold">📍 Location</p>
                <p className="text-slate-300">
                  Udaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold mb-3">Connect With Us</h2>

            <div className="flex gap-4 text-sm">
              <a
                href="https://www.instagram.com/parshwebcraft/"
                target="_blank"
                className="text-[#f3d07a]"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/parshwebcraft/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3Bxtm40fTJQoSDoLx2XHkrmQ%3D%3D"
                target="_blank"
                className="text-[#f3d07a]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border border-[#f3d07a]/20">
            <iframe
              title="Udaipur Location"
              src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
              className="w-full h-[250px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="glass p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-3">
            Get a Free Consultation
          </h2>

          <p className="text-slate-400 text-sm mb-6">
            Share your idea and we’ll guide you with the best approach.
          </p>

          <ContactForm onSuccess={handleSuccess} />
        </div>
      </section>

      {/* SUCCESS MESSAGE */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0b1220] text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent successfully ✅
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
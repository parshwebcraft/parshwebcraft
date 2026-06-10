"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_URL =
  "https://wa.me/919521347419?text=Hi%20ParshWebCraft%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20business.";

const NEED_OPTIONS = [
  "Website Design",
  "Web Development",
  "Digital Marketing / SEO",
  "QR Ordering / App",
  "ERP / Custom System",
  "Not Sure — Need Guidance",
];

export default function QuickEnquiryStrip() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!/^[0-9]{10}$/.test(phone.trim())) {
      setError("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: "",
          plan: need || "Not Specified",
          requirement: `Quick enquiry via homepage strip. Need: ${need || "Not specified"}`,
          message: "",
        }),
      });

      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp directly.");
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#f3d07a]/60 transition";

  return (
    <section className="enquiry-strip py-14 px-6 lg:px-24" aria-labelledby="quick-enquiry-heading">
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              {/* Heading */}
              <div className="text-center mb-8">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#f3d07a]">
                  Free Callback
                </span>
                <h2
                  id="quick-enquiry-heading"
                  className="mt-2 text-2xl md:text-3xl font-bold text-white"
                >
                  Tell Us What You Need — We'll Call Back
                </h2>
                <p className="mt-2 text-slate-400 text-sm">
                  Takes 30 seconds · No commitment · Udaipur-based team
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col md:flex-row gap-3">
                  {/* Name */}
                  <input
                    id="qe-name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(""); }}
                    className={inputClass}
                    aria-label="Your name"
                    required
                  />

                  {/* Phone */}
                  <input
                    id="qe-phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="WhatsApp Number (10 digits)"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, "").slice(0, 10)); setError(""); }}
                    className={inputClass}
                    aria-label="WhatsApp number"
                    required
                  />

                  {/* Need */}
                  <select
                    id="qe-need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className={`${inputClass} appearance-none bg-[rgba(255,255,255,0.05)] cursor-pointer`}
                    aria-label="What do you need"
                  >
                    <option value="" className="bg-[#0b1220]">
                      I need… (select)
                    </option>
                    {NEED_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0b1220]">
                        {opt}
                      </option>
                    ))}
                  </select>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    id="qe-submit"
                    className="px-7 py-3 rounded-xl bg-[#f3d07a] text-black font-semibold text-sm whitespace-nowrap transition hover:brightness-95 disabled:opacity-60 disabled:cursor-wait"
                  >
                    {sending ? "Sending…" : "Get Free Callback"}
                  </button>
                </div>

                {error && (
                  <p className="mt-3 text-center text-sm text-red-400">{error}</p>
                )}
              </form>

              {/* WhatsApp fallback */}
              <p className="mt-5 text-center text-sm text-slate-500">
                Prefer instant chat?{" "}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold hover:underline"
                >
                  WhatsApp us directly →
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-white mb-2">
                We've Received Your Enquiry, {name}!
              </h3>
              <p className="text-slate-400 text-sm mb-5">
                Our team will call you back within 2 hours during business hours.
                For instant help, WhatsApp us now.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:brightness-95 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Extend Window to include the Google reCAPTCHA global (injected by their script)
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/* ── reCAPTCHA v3 ─────────────────────────────────────────────
   Add to your .env:
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "your_site_key_here"
   Get keys at: https://www.google.com/recaptcha/admin
   Script is loaded lazily and only fires on form submit.
   ─────────────────────────────────────────────────────────── */
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

function loadRecaptchaScript() {
  if (typeof window === "undefined") return;
  if (!RECAPTCHA_SITE_KEY) return;
  if (document.querySelector("#recaptcha-script")) return;
  const script = document.createElement("script");
  script.id = "recaptcha-script";
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
  script.async = true;
  document.head.appendChild(script);
}

async function getRecaptchaToken(action = "contact") {
  if (!RECAPTCHA_SITE_KEY) return "";
  if (typeof window === "undefined" || !window.grecaptcha) return "";
  try {
    await new Promise<void>((resolve) => window.grecaptcha.ready(() => resolve()));
    return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
  } catch {
    return "";
  }
}

type ContactFormProps = {
  onSuccess?: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  requirement: string;
  message: string;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    plan: "",
    requirement: "",
    message: "",
  });

  // Honeypot — hidden from humans, bots will fill it
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load reCAPTCHA lazily when component mounts
  useEffect(() => {
    loadRecaptchaScript();
  }, []);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("");
  }

  function validate(): boolean {
    const next: Record<string, string> = {};

    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.requirement.trim()) next.requirement = "Please describe what you want to build.";

    if (!form.email.trim() && !form.phone.trim()) {
      next.form = "Please provide either an email or a phone number.";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (form.phone.trim() && !/^[0-9]{10}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit phone number.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");

    // If honeypot is filled, silently pretend success (bot trap)
    if (honeypotRef.current?.value) {
      setStatus("Message sent — Thank you!");
      return;
    }

    if (!validate()) return;

    setSending(true);

    try {
      // Get reCAPTCHA token (empty string if not configured — backend handles gracefully)
      const recaptchaToken = await getRecaptchaToken("contact");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          recaptchaToken,
          // Honeypot field (empty for humans)
          website: honeypotRef.current?.value ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data?.error || "Something went wrong. Please try again later.");
        return;
      }

      setStatus("Message sent — thank you!");
      setForm({ name: "", email: "", phone: "", plan: "", requirement: "", message: "" });
      setErrors({});
      onSuccess?.();
    } catch {
      setStatus("Network error. Please try again or WhatsApp DM us directly.");
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full p-3 rounded-md bg-[rgba(255,255,255,0.02)] border text-slate-200 transition outline-none";
  const inputNormal = "border-[rgba(255,255,255,0.06)] focus:border-[#f3d07a]/60";
  const inputError = "border-red-400 ring-1 ring-red-400";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* ── Honeypot — visually hidden, bots fill it ── */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <label htmlFor="website-field">Website</label>
        <input
          id="website-field"
          ref={honeypotRef}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-name">Your Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={onChange}
          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          required
        />
        {errors.name && <p id="cf-name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-email">Email Address</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={onChange}
          className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email && <p id="cf-email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* PHONE */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-phone">Phone Number</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          placeholder="10-digit number"
          value={form.phone}
          onChange={onChange}
          className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
          aria-describedby={errors.phone ? "cf-phone-error" : undefined}
        />
        {errors.phone && <p id="cf-phone-error" className="mt-1 text-xs text-red-400">{errors.phone}</p>}
      </div>

      {/* PLAN */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-plan">
          Which Plan Are You Interested In?
        </label>
        <select
          id="cf-plan"
          name="plan"
          value={form.plan}
          onChange={onChange}
          className={`${inputBase} ${inputNormal} appearance-none bg-[rgba(255,255,255,0.02)] cursor-pointer`}
        >
          <option className="bg-[#0b1220]" value="">Select a plan (Optional)</option>
          <option className="bg-[#0b1220]" value="Starter Plan – ₹4,999">💎 Starter Plan – ₹4,999</option>
          <option className="bg-[#0b1220]" value="Business Growth Plan – ₹14,999">✨ Business Growth Plan – ₹14,999</option>
          <option className="bg-[#0b1220]" value="Premium Website Plan – ₹34,999+">🚀 Premium Website Plan – ₹34,999+</option>
          <option className="bg-[#0b1220]" value="SaaS Platform Development – Starting ₹1,20,000+">🧩 SaaS Platform Development – ₹1,20,000+</option>
          <option className="bg-[#0b1220]" value="Enterprise (Custom)">👑 Enterprise (Custom) Plan</option>
          <option className="bg-[#0b1220]" value="Not Sure">❓ Not Sure (Need Help)</option>
        </select>
      </div>

      {/* REQUIREMENT */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-requirement">Requirement</label>
        <textarea
          id="cf-requirement"
          name="requirement"
          placeholder="What do you want us to build?"
          value={form.requirement}
          onChange={onChange}
          className={`${inputBase} ${errors.requirement ? inputError : inputNormal} h-28 resize-none`}
          aria-describedby={errors.requirement ? "cf-req-error" : undefined}
          required
        />
        {errors.requirement && (
          <p id="cf-req-error" className="mt-1 text-xs text-red-400">{errors.requirement}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block text-sm text-slate-300 mb-1" htmlFor="cf-message">
          Additional Notes <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Anything else to add?"
          value={form.message}
          onChange={onChange}
          className={`${inputBase} ${inputNormal} h-24 resize-none`}
        />
      </div>

      {/* Form-level error */}
      {errors.form && <p className="text-sm text-red-300">{errors.form}</p>}

      {/* SUBMIT */}
      <button
        id="cf-submit"
        type="submit"
        disabled={sending}
        className={`w-full px-6 py-3 rounded-full font-semibold transition ${
          sending
            ? "bg-[#d8c186] text-black/70 cursor-wait"
            : "bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black hover:brightness-95"
        }`}
      >
        {sending ? "Sending…" : "Send Enquiry"}
      </button>

      {/* reCAPTCHA badge notice */}
      {RECAPTCHA_SITE_KEY && (
        <p className="text-center text-xs text-slate-600">
          Protected by reCAPTCHA.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:text-slate-400">
            Privacy
          </a>{" "}
          &amp;{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="hover:text-slate-400">
            Terms
          </a>
        </p>
      )}

      {/* Status message */}
      {status && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm text-center ${
            status.startsWith("Message sent") ? "text-green-300" : "text-amber-200"
          }`}
        >
          {status}
        </motion.div>
      )}
    </form>
  );
}

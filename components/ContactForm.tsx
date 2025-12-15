"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("");
  }

  function validate(): boolean {
    const next: Record<string, string> = {};

    if (!form.name.trim()) {
      next.name = "Name is required.";
    }

    if (!form.requirement.trim()) {
      next.requirement = "Please describe what you want to build.";
    }

    // 🔑 Either email OR phone required
    if (!form.email.trim() && !form.phone.trim()) {
      next.form = "Please provide either an email or a phone number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
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

    if (!validate()) return;

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        // 👇 show backend error (rate limit, invalid email, etc.)
        setStatus(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("Message sent — thank you!");
      setForm({
        name: "",
        email: "",
        phone: "",
        plan: "",
        requirement: "",
        message: "",
      });
      setErrors({});
      onSuccess?.();
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full p-3 rounded-md bg-[rgba(255,255,255,0.02)] border text-slate-200 transition";
  const inputNormal =
    "border-[rgba(255,255,255,0.06)] focus:border-[#f3d07a] focus:ring-0";
  const inputError = "border-red-400 ring-1 ring-red-400";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* NAME */}
      <label>Your Name</label>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={onChange}
        className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
      />

      {/* EMAIL */}
      <label>Email Address</label>
      <input
        name="email"
        type="email"
        placeholder="Enter your Email"
        value={form.email}
        onChange={onChange}
        className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
      />

      {/* PHONE */}
      <label>Phone Number</label>
      <input
        name="phone"
        type="tel"
        inputMode="numeric"
        placeholder="Enter your Phone number (10 digits)"
        value={form.phone}
        onChange={onChange}
        className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
      />

      {/* PLAN FIELD */}

      <label>Which Plan Are You Interested In?</label>
      <select
        name="plan"
        value={form.plan}
        onChange={onChange}
        className={`${inputBase} ${inputNormal} appearance-none bg-[rgba(255,255,255,0.02)]`}
      >
        <option className="bg-[#0b1220]" value="">
          Select a plan (Optional)
        </option>
        <option className="bg-[#0b1220]" value="Starter Plan – ₹7,999">
          💎 Starter Plan – ₹7,999
        </option>
        <option className="bg-[#0b1220]" value="Business Growth Plan – ₹14,999">
          ✨ Business Growth Plan – ₹14,999
        </option>
        <option
          className="bg-[#0b1220]"
          value="Premium Marketing Plan– ₹29,999"
        >
          🚀 Premium Marketing Plan – ₹29,999
        </option>
        <option className="bg-[#0b1220]" value="Enterprise (Custom) ">
          👑 Enterprise (Custom) Plan{" "}
        </option>
        <option className="bg-[#0b1220]" value="Not Sure">
          ❓ Not Sure (Need Help)
        </option>
      </select>

      {/* REQUIREMENT */}
      <label>Requirement</label>
      <textarea
        name="requirement"
        placeholder="What do you want us to build?"
        value={form.requirement}
        onChange={onChange}
        className={`${inputBase} ${
          errors.requirement ? inputError : inputNormal
        } h-28`}
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Additional message (optional)"
        value={form.message}
        onChange={onChange}
        className={`${inputBase} ${inputNormal} h-24`}
      />

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={sending}
        className={`w-full px-6 py-3 rounded-full font-semibold transition ${
          sending
            ? "bg-[#d8c186] text-black/70 cursor-wait"
            : "bg-gradient-to-r from-[#f3d07a] to-[#e6c35a] text-black"
        }`}
      >
        {sending ? "Sending..." : "Submit"}
      </button>

      {errors.form && <div className="text-sm text-red-300">{errors.form}</div>}

      {status && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm ${
            status.startsWith("Message sent")
              ? "text-green-300"
              : "text-amber-200"
          }`}
        >
          {status}
        </motion.div>
      )}
    </form>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ParshWebCraft",
  description:
    "ParshWebCraft Privacy Policy — how we collect, use, and protect your personal data in compliance with the Information Technology Act, 2000 and applicable Indian privacy laws.",
};

const LAST_UPDATED = "10 June 2025";
const COMPANY = "ParshWebCraft";
const EMAIL = "hello@parshwebcraft.in";
const PHONE = "+91-9521347419";
const ADDRESS = "Udaipur, Rajasthan, India";
const WEBSITE = "https://www.parshwebcraft.in";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f3d07a]">
            Legal
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-400">
            Last updated: <strong className="text-slate-300">{LAST_UPDATED}</strong>
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
              <a href={WEBSITE} className="text-[#f3d07a] hover:underline">{WEBSITE}</a> and
              provides web design, web development, digital marketing, SaaS development, and
              related technology services. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit our website or
              engage our services.
            </p>
            <p className="mt-3">
              This Policy is published in compliance with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Section 43A of the <strong>Information Technology Act, 2000</strong></li>
              <li>The <strong>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong></li>
              <li>The <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong></li>
              <li>Applicable provisions of the <strong>Personal Data Protection Bill / Digital Personal Data Protection Act, 2023</strong></li>
            </ul>
            <p className="mt-3">
              By using our website or services, you consent to the collection and use of
              information as described in this Policy. If you do not agree, please discontinue
              use of our website.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-white mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Contact details</strong>: Name, email address, phone/WhatsApp number</li>
              <li><strong>Project details</strong>: Business requirements, project specifications, and budget information shared via our contact form</li>
              <li><strong>Newsletter subscription</strong>: Email address</li>
              <li><strong>Payment information</strong>: Processed by third-party payment gateways; we do not store card details</li>
              <li><strong>AI chatbot conversations</strong>: Messages you send to our AI assistant and any contact details shared within those conversations</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2 mt-6">2.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Log data</strong>: IP address, browser type, operating system, referring URLs, pages visited, time and date of visit</li>
              <li><strong>Device information</strong>: Device type, screen resolution, language settings</li>
              <li><strong>Cookies and tracking</strong>: As described in our <Link href="/cookie-policy" className="text-[#f3d07a] hover:underline">Cookie Policy</Link></li>
              <li><strong>Analytics data</strong>: Aggregated usage statistics via Google Analytics</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2 mt-6">2.3 Sensitive Personal Data</h3>
            <p>
              We do not intentionally collect sensitive personal data as defined under the IT Rules
              2011 (e.g., financial information, health data, biometrics, passwords) through our
              public website. Any sensitive data shared voluntarily in project briefs is handled with
              strict confidentiality under separate service agreements.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>To respond to enquiries</strong>: Contacting you about your project requirements</li>
              <li><strong>To deliver services</strong>: Fulfilling contracts for website development, marketing, or software projects</li>
              <li><strong>To send newsletters</strong>: Sending business tips and updates (only with your consent; you may unsubscribe at any time)</li>
              <li><strong>To improve our services</strong>: Analysing how visitors use our website to improve user experience</li>
              <li><strong>To comply with legal obligations</strong>: Maintaining records as required by applicable Indian law</li>
              <li><strong>To prevent fraud and abuse</strong>: Detecting and preventing spam, bots, and fraudulent use of our forms</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
            <p>We process your data on the following bases:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Consent</strong>: For newsletter subscriptions and non-essential cookies</li>
              <li><strong>Contractual necessity</strong>: To deliver services you have requested</li>
              <li><strong>Legitimate interests</strong>: For website analytics, fraud prevention, and improving our services</li>
              <li><strong>Legal obligation</strong>: Where required by Indian law (e.g., GST record-keeping)</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Sharing with Third Parties</h2>
            <p>
              We may share your data with the following categories of third-party service providers
              who assist us in operating our business. These parties are contractually obligated to
              handle your data securely and only for specified purposes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Supabase Inc.</strong> — Database and authentication services (US-based; data stored per their Privacy Policy)</li>
              <li><strong>Google LLC</strong> — Analytics (Google Analytics), reCAPTCHA spam protection, and Google Workspace</li>
              <li><strong>Resend / email providers</strong> — Transactional email notifications</li>
              <li><strong>OpenAI</strong> — AI chatbot responses (messages processed per OpenAI Privacy Policy)</li>
              <li><strong>Vercel Inc.</strong> — Website hosting and deployment infrastructure</li>
            </ul>
            <p className="mt-3">
              We may disclose your information if required by law, court order, or governmental
              authority in India, or to protect the rights, property, or safety of {COMPANY}, our
              clients, or others.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Contact/lead data</strong>: Retained for up to <strong>3 years</strong> from the date of collection or last interaction, whichever is later</li>
              <li><strong>Newsletter subscriptions</strong>: Retained until you unsubscribe</li>
              <li><strong>AI chat history</strong>: Retained for up to <strong>90 days</strong>, then automatically purged</li>
              <li><strong>Website analytics</strong>: Aggregated, anonymised data retained per Google Analytics default retention settings</li>
              <li><strong>Financial records</strong>: As required by the Income Tax Act, 1961 and GST laws (minimum 6 years)</li>
            </ul>
            <p className="mt-3">
              You may request earlier deletion of your data by contacting our Grievance Officer
              (see Section 10).
            </p>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience
              and analyse website traffic. For detailed information on what cookies we use, their
              purpose, and how to control them, please read our{" "}
              <Link href="/cookie-policy" className="text-[#f3d07a] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* 8. Data Security */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Data Security</h2>
            <p>
              We implement industry-standard technical and organisational measures to protect your
              personal data, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>HTTPS encryption for all data in transit (TLS 1.2+)</li>
              <li>Row-level security (RLS) on our database</li>
              <li>HTTP security headers (Content-Security-Policy, X-Frame-Options, etc.)</li>
              <li>Role-based access controls for admin systems</li>
              <li>Rate limiting on all public-facing forms to prevent abuse</li>
              <li>Honeypot fields and reCAPTCHA to prevent automated spam</li>
            </ul>
            <p className="mt-3">
              Despite these measures, no internet transmission is 100% secure. In the event of a
              data breach that affects your rights and interests, we will notify you and the
              relevant authorities as required under Indian law.
            </p>
          </section>

          {/* 9. Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Your Rights</h2>
            <p>Under applicable Indian privacy laws, you have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Access</strong>: Request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong>: Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion</strong>: Request erasure of your personal data (subject to our legal retention obligations)</li>
              <li><strong>Withdrawal of consent</strong>: Withdraw consent for newsletter communications at any time</li>
              <li><strong>Grievance redressal</strong>: Lodge a complaint with our Grievance Officer</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact our Grievance Officer (see Section 10).
              We will respond to all requests within <strong>30 days</strong>.
            </p>
          </section>

          {/* 10. Grievance Officer */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000 and the IT Rules, 2021, we
              have designated a Grievance Officer to address privacy concerns:
            </p>
            <div className="mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-1">
              <p><strong className="text-white">Grievance Officer:</strong> Gauransh Jaroli</p>
              <p><strong className="text-white">Organisation:</strong> {COMPANY}</p>
              <p><strong className="text-white">Address:</strong> {ADDRESS}</p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a>
              </p>
              <p><strong className="text-white">Phone:</strong> {PHONE}</p>
              <p><strong className="text-white">Response time:</strong> Within 30 days of receipt</p>
            </div>
          </section>

          {/* 11. Children */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal data from minors. If you believe we have inadvertently collected
              information from a minor, please contact our Grievance Officer immediately.
            </p>
          </section>

          {/* 12. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. We will notify you of significant changes by updating the
              &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of our website after
              any changes constitutes acceptance of the updated Policy.
            </p>
          </section>

          {/* 13. Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">13. Contact Us</h2>
            <p>For any questions about this Privacy Policy, please contact:</p>
            <div className="mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-1">
              <p><strong className="text-white">{COMPANY}</strong></p>
              <p>{ADDRESS}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a>
              </p>
              <p>WhatsApp: {PHONE}</p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="text-[#f3d07a] hover:underline">Terms &amp; Conditions</Link>
          <Link href="/refund" className="text-[#f3d07a] hover:underline">Refund Policy</Link>
          <Link href="/cookie-policy" className="text-[#f3d07a] hover:underline">Cookie Policy</Link>
          <Link href="/contact" className="text-[#f3d07a] hover:underline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}

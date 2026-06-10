import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | ParshWebCraft",
  description:
    "ParshWebCraft Cookie Policy — learn what cookies we use, why, and how to control them.",
};

const LAST_UPDATED = "10 June 2025";
const COMPANY = "ParshWebCraft";
const EMAIL = "hello@parshwebcraft.in";
const WEBSITE = "https://www.parshwebcraft.in";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f3d07a]">Legal</span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">Cookie Policy</h1>
          <p className="mt-3 text-slate-400">
            Last updated: <strong className="text-slate-300">{LAST_UPDATED}</strong>
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-8">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device (computer, tablet, or mobile phone)
              when you visit a website. They help websites remember your preferences, understand how
              you use the site, and improve your experience over time. Similar technologies such as
              local storage, session storage, and pixel tags may also be used and are collectively
              referred to as &ldquo;cookies&rdquo; in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Cookies We Use</h2>
            <p className="mb-6">
              The following table describes the categories of cookies used on{" "}
              <a href={WEBSITE} className="text-[#f3d07a] hover:underline">{WEBSITE}</a>:
            </p>

            {/* Strictly Necessary */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="bg-[#f3d07a14] border-b border-white/5 px-5 py-3">
                <h3 className="font-semibold text-white">2.1 Strictly Necessary Cookies</h3>
                <p className="text-xs text-slate-400 mt-0.5">Always active — cannot be disabled</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="text-sm">
                  <p><strong className="text-slate-200">sb-* (Supabase Auth)</strong></p>
                  <p className="text-slate-400">Manages admin authentication sessions. Required for the admin dashboard to function. HttpOnly, Secure.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Provider: Supabase Inc. | Duration: Session / 24 hours</p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="bg-[#f3d07a14] border-b border-white/5 px-5 py-3">
                <h3 className="font-semibold text-white">2.2 Analytics &amp; Performance Cookies</h3>
                <p className="text-xs text-slate-400 mt-0.5">Help us understand how visitors use our site</p>
              </div>
              <div className="px-5 py-4 space-y-4 text-sm">
                <div>
                  <p><strong className="text-slate-200">_ga, _ga_* (Google Analytics)</strong></p>
                  <p className="text-slate-400">Tracks unique visitors, page views, session duration, and traffic sources to help us improve our website. Data is aggregated and anonymised.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Provider: Google LLC | Duration: 2 years (_ga), 1 year (_ga_*)</p>
                </div>
                <div>
                  <p><strong className="text-slate-200">Vercel Analytics (va_*)</strong></p>
                  <p className="text-slate-400">Privacy-friendly analytics that collects page views and performance metrics without identifying individual users.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Provider: Vercel Inc. | Duration: Session</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="bg-[#f3d07a14] border-b border-white/5 px-5 py-3">
                <h3 className="font-semibold text-white">2.3 Security &amp; Fraud Prevention</h3>
                <p className="text-xs text-slate-400 mt-0.5">Protect against spam and abuse</p>
              </div>
              <div className="px-5 py-4 space-y-3 text-sm">
                <div>
                  <p><strong className="text-slate-200">Google reCAPTCHA</strong></p>
                  <p className="text-slate-400">Used on our contact and newsletter forms to distinguish human visitors from automated bots. Sends data to Google for risk analysis.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Provider: Google LLC | Duration: 6 months</p>
                </div>
              </div>
            </div>

            {/* Functional */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="bg-[#f3d07a14] border-b border-white/5 px-5 py-3">
                <h3 className="font-semibold text-white">2.4 Local Storage (Not Cookies)</h3>
                <p className="text-xs text-slate-400 mt-0.5">Browser-side storage for UX preferences</p>
              </div>
              <div className="px-5 py-4 text-sm">
                <p><strong className="text-slate-200">sessionStorage (Admin login)</strong></p>
                <p className="text-slate-400">Temporarily stores failed login attempt count to prevent brute-force attacks. Cleared when the browser tab is closed.</p>
                <p className="text-slate-500 text-xs mt-0.5">Provider: {COMPANY} | Duration: Browser session only</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
            <p>
              Some cookies on our site are placed by third-party services. We do not control these
              cookies and they are governed by the respective third-party privacy policies:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Google</strong>:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline text-sm">
                  policies.google.com/privacy
                </a>
              </li>
              <li>
                <strong>Supabase</strong>:{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline text-sm">
                  supabase.com/privacy
                </a>
              </li>
              <li>
                <strong>Vercel</strong>:{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline text-sm">
                  vercel.com/legal/privacy-policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. How to Control Cookies</h2>
            <p>
              You can control and/or delete cookies through the following methods:
            </p>
            <h3 className="text-lg font-semibold text-white mb-2 mt-5">4.1 Browser Settings</h3>
            <p>
              All modern browsers allow you to control cookies through their settings menus. You can
              block, delete, or restrict cookies. Note that blocking strictly necessary cookies may
              impair website functionality.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2 mt-5">4.2 Opt-Out of Google Analytics</h3>
            <p>
              To opt out of Google Analytics tracking across all websites, install the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-[#f3d07a] hover:underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in the cookies we use or for
              operational, legal, or regulatory reasons. Please revisit this page periodically to
              stay informed. The &ldquo;Last updated&rdquo; date at the top indicates when changes were made.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Contact</h2>
            <p>For any questions about our use of cookies:</p>
            <div className="mt-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-1">
              <p><strong className="text-white">{COMPANY}</strong></p>
              <p>Udaipur, Rajasthan, India</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a></p>
            </div>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-[#f3d07a] hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-[#f3d07a] hover:underline">Terms &amp; Conditions</Link>
          <Link href="/refund" className="text-[#f3d07a] hover:underline">Refund Policy</Link>
          <Link href="/contact" className="text-[#f3d07a] hover:underline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | ParshWebCraft",
  description:
    "ParshWebCraft refund and cancellation policy for web design, development, and digital marketing services.",
};

const LAST_UPDATED = "10 June 2025";
const COMPANY = "ParshWebCraft";
const EMAIL = "hello@parshwebcraft.in";
const PHONE = "+91-9521347419";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f3d07a]">Legal</span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">Refund &amp; Cancellation Policy</h1>
          <p className="mt-3 text-slate-400">
            Last updated: <strong className="text-slate-300">{LAST_UPDATED}</strong>
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-8">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Overview</h2>
            <p>
              At {COMPANY}, we are committed to delivering high-quality web and digital services and
              to maintaining fair and transparent business practices in accordance with the
              <strong> Consumer Protection (E-Commerce) Rules, 2020</strong> and other applicable
              Indian regulations. This Refund Policy outlines the conditions under which refunds may
              be issued.
            </p>
            <p className="mt-3">
              Because our services are custom, knowledge-based, and time-intensive, they differ from
              physical product purchases. Please read this policy carefully before engaging our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Project Cancellation</h2>
            <h3 className="text-lg font-semibold text-white mb-3">2.1 Cancellation Before Work Commences</h3>
            <div className="p-4 rounded-xl border border-[#f3d07a]/20 bg-[#f3d07a]/5">
              <p className="text-white font-medium">Refund: 100% of advance payment</p>
              <p className="mt-1">
                If you cancel your project in writing <strong>before any design, development, or
                planning work has begun</strong>, we will refund 100% of any advance payment received.
                Processing time: 7–10 business days.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3 mt-6">2.2 Cancellation After Work Has Begun</h3>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left px-4 py-3 text-white">Project Completion Stage</th>
                    <th className="text-left px-4 py-3 text-white">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-4 py-3">Up to 25% complete</td>
                    <td className="px-4 py-3 text-green-400">75% of advance refunded</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">26%–50% complete</td>
                    <td className="px-4 py-3 text-yellow-400">50% of advance refunded</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">51%–75% complete</td>
                    <td className="px-4 py-3 text-orange-400">25% of advance refunded</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">76% or more complete</td>
                    <td className="px-4 py-3 text-red-400">No refund</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Project delivered / launched</td>
                    <td className="px-4 py-3 text-red-400">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              The completion percentage is determined by {COMPANY} based on hours invested and
              deliverables completed. We will provide documentation of work completed upon request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Non-Refundable Services</h2>
            <p>The following are <strong>non-refundable</strong> under any circumstances:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Domain name registration fees (third-party cost, non-recoverable)</li>
              <li>Hosting fees for periods already utilised</li>
              <li>Third-party software licences or API subscription fees purchased on your behalf</li>
              <li>Digital marketing campaigns (ad spend) once deployed</li>
              <li>Completed design revisions and delivered content</li>
              <li>Monthly maintenance or retainer fees for the period already served</li>
              <li>Rush/priority project fees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Revision &amp; Dispute Policy</h2>
            <p>
              Before initiating a refund request, we strongly encourage you to:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Review the deliverables against the agreed project scope</li>
              <li>Request revisions within the scope of the agreed Project Agreement</li>
              <li>Contact us to discuss any concerns — we are committed to your satisfaction</li>
            </ol>
            <p className="mt-3">
              If you believe the delivered work does not meet the agreed specifications, please
              notify us in writing within <strong>7 days of delivery</strong>. We will investigate
              and either resolve the issue through revisions or, where applicable, issue a partial
              refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. How to Request a Refund</h2>
            <p>To initiate a refund request:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Email us at <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a> with subject: <strong>Refund Request — [Your Name / Project Name]</strong></li>
              <li>Include: your name, project details, payment reference number, reason for cancellation</li>
              <li>We will acknowledge your request within <strong>2 business days</strong></li>
              <li>After review, refunds (where applicable) are processed within <strong>7–14 business days</strong> via the original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Force Majeure</h2>
            <p>
              {COMPANY} shall not be liable for delays or inability to perform services due to
              circumstances beyond our reasonable control, including natural disasters, government
              actions, internet outages, or other force majeure events. In such cases, project
              timelines will be extended accordingly, and refunds will not be applicable for delays
              caused by force majeure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Contact</h2>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-1">
              <p><strong className="text-white">{COMPANY}</strong></p>
              <p>Udaipur, Rajasthan, India</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a></p>
              <p>WhatsApp: {PHONE}</p>
            </div>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-[#f3d07a] hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-[#f3d07a] hover:underline">Terms &amp; Conditions</Link>
          <Link href="/cookie-policy" className="text-[#f3d07a] hover:underline">Cookie Policy</Link>
          <Link href="/contact" className="text-[#f3d07a] hover:underline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}

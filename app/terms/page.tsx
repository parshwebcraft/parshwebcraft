import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | ParshWebCraft",
  description:
    "Terms and Conditions for ParshWebCraft web design, development, and digital marketing services. Governed by Indian law.",
};

const LAST_UPDATED = "10 June 2025";
const COMPANY = "ParshWebCraft";
const EMAIL = "hello@parshwebcraft.in";
const PHONE = "+91-9521347419";
const ADDRESS = "Udaipur, Rajasthan, India";
const WEBSITE = "https://www.parshwebcraft.in";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f3d07a]">Legal</span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">Terms &amp; Conditions</h1>
          <p className="mt-3 text-slate-400">
            Last updated: <strong className="text-slate-300">{LAST_UPDATED}</strong>
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-8">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at <a href={WEBSITE} className="text-[#f3d07a] hover:underline">{WEBSITE}</a> or
              engaging the services of {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), you agree to be
              bound by these Terms &amp; Conditions and all applicable Indian laws and regulations.
              If you do not agree with any part of these terms, you must not use our website or
              services. These Terms constitute a legally binding agreement under the Indian Contract
              Act, 1872.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
            <p>{COMPANY} provides the following services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Website design and development</li>
              <li>E-commerce website development</li>
              <li>Custom SaaS (Software as a Service) development</li>
              <li>Search Engine Optimisation (SEO) services</li>
              <li>Digital marketing and social media management</li>
              <li>Graphic design and branding</li>
              <li>QR-based ordering systems and custom software solutions</li>
              <li>Hosting, domain, and maintenance services</li>
            </ul>
            <p className="mt-3">
              The specific scope, deliverables, timelines, and pricing for each project are defined
              in a separate <strong>Project Agreement or Statement of Work</strong> provided before
              commencement of any paid engagement. These Terms apply in conjunction with any such
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Project Engagement &amp; Payments</h2>
            <h3 className="text-lg font-semibold text-white mb-2">3.1 Payment Structure</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Projects typically require a <strong>50% advance payment</strong> before work commences</li>
              <li>Remaining balance is due before final delivery or deployment</li>
              <li>Exact payment milestones are defined in the individual Project Agreement</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2 mt-5">3.2 Late Payments</h3>
            <p>
              Payments not received within 7 days of the due date may result in suspension of work.
              We reserve the right to charge interest at 1.5% per month on overdue amounts.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2 mt-5">3.3 Taxes</h3>
            <p>
              All prices are exclusive of applicable GST (Goods and Services Tax) unless explicitly
              stated otherwise. GST will be charged at the prevailing rate (currently 18% for
              software/IT services) and will appear separately on invoices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate, complete, and timely information, content, and feedback required for project completion</li>
              <li>Review and provide feedback on deliverables within agreed timelines</li>
              <li>Ensure that any content (text, images, logos) you provide does not infringe third-party intellectual property rights</li>
              <li>Obtain all necessary licences, permissions, or regulatory approvals for your business</li>
              <li>Not use our services for any illegal, unethical, or prohibited purpose</li>
            </ul>
            <p className="mt-3">
              Delays caused by failure to provide required materials or approvals are not the
              responsibility of {COMPANY} and may affect delivery timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <h3 className="text-lg font-semibold text-white mb-2">5.1 Client-Owned Assets</h3>
            <p>
              Upon receipt of full and final payment, ownership of all custom deliverables (website
              design, custom code, graphics created specifically for your project) transfers to you,
              the client.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2 mt-5">5.2 ParshWebCraft IP</h3>
            <p>
              We retain ownership of our internal tools, frameworks, proprietary code libraries,
              templates, development methodologies, and any pre-existing intellectual property used
              in the delivery of services. A non-exclusive licence is granted to you to use these
              components as part of the delivered project.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2 mt-5">5.3 Portfolio Usage</h3>
            <p>
              We reserve the right to feature your completed project (including screenshots and
              descriptions) in our portfolio, case studies, and marketing materials unless you
              request otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary business information, trade
              secrets, or sensitive data shared during the course of the engagement. This obligation
              survives termination of the project. We will not disclose your project details, business
              strategies, or technical specifications to competitors or unrelated third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Warranties &amp; Disclaimers</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>We warrant that services will be performed with reasonable skill and care</li>
              <li>We do not guarantee specific rankings in search engines, as these depend on factors outside our control (Google algorithm, competition, etc.)</li>
              <li>We do not guarantee specific business outcomes (sales, revenue, conversions) from websites or marketing campaigns</li>
              <li>Third-party services (hosting, payment gateways, APIs) are subject to their respective terms and uptime guarantees</li>
              <li>The website is provided &ldquo;as is&rdquo; for informational purposes. We make no warranty of fitness for a particular purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable Indian law, {COMPANY}&apos;s total liability
              for any claim arising out of or relating to these Terms or our services shall not exceed
              the total amount paid by you to us in the three months preceding the claim.
            </p>
            <p className="mt-3">
              We shall not be liable for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from third-party service failures (hosting providers, payment processors, etc.)</li>
              <li>Losses resulting from your failure to fulfil your obligations under Section 4</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Termination</h2>
            <p>
              Either party may terminate a project engagement with <strong>14 days&apos; written notice</strong>.
              On termination:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>You shall pay for all work completed up to the termination date</li>
              <li>We shall deliver all completed work products for which payment has been received</li>
              <li>Advance payments for unstarted work phases are refundable per our <Link href="/refund" className="text-[#f3d07a] hover:underline">Refund Policy</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Acceptable Use</h2>
            <p>You agree not to use our services or website to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Violate any applicable Indian law or regulation</li>
              <li>Infringe intellectual property rights of any party</li>
              <li>Transmit spam, malware, or other harmful content</li>
              <li>Engage in activities that could harm minors</li>
              <li>Impersonate any person or entity</li>
              <li>Attempt unauthorised access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising out of or relating to these Terms or our services shall be subject
              to the <strong>exclusive jurisdiction of the courts in Udaipur, Rajasthan, India</strong>.
            </p>
            <p className="mt-3">
              Before initiating formal legal proceedings, both parties agree to attempt resolution
              through good-faith negotiation for a period of <strong>30 days</strong> from the date
              of written notice of the dispute.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon
              posting to this page with an updated date. For existing engagements, material changes
              will be communicated via email. Continued use of our services after changes constitutes
              acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">13. Contact</h2>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-1">
              <p><strong className="text-white">{COMPANY}</strong></p>
              <p>{ADDRESS}</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#f3d07a] hover:underline">{EMAIL}</a></p>
              <p>WhatsApp: {PHONE}</p>
            </div>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-[#f3d07a] hover:underline">Privacy Policy</Link>
          <Link href="/refund" className="text-[#f3d07a] hover:underline">Refund Policy</Link>
          <Link href="/cookie-policy" className="text-[#f3d07a] hover:underline">Cookie Policy</Link>
          <Link href="/contact" className="text-[#f3d07a] hover:underline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}

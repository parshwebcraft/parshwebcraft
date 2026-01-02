export const metadata = {
  title: "Privacy Policy — ParshWebCraft",
  description:
    "Learn how ParshWebCraft collects, uses, and protects your personal information across websites, SaaS platforms, and digital services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-4xl mx-auto py-20">
        {/* ================= HEADER ================= */}
        <h1 className="text-4xl font-extrabold mb-6">
          Privacy <span className="text-[#f3d07a]">Policy</span>
        </h1>

        <p className="text-slate-300 mb-6 leading-relaxed">
          At <strong>ParshWebCraft</strong>, we respect your privacy and are
          committed to protecting any personal information you share with us.
          This Privacy Policy explains how we collect, use, store, and safeguard
          your information when you visit our website or interact with our
          services.
        </p>

        {/* ================= SECTION 1 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          1. Information We Collect
        </h2>

        <p className="text-slate-300 mb-4">
          We collect only the information that is necessary to communicate with
          you and provide our services effectively. This may include:
        </p>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>
            Project or business details shared through contact forms or direct
            communication
          </li>
          <li>
            Basic technical information such as browser type or device (via
            analytics tools)
          </li>
        </ul>

        {/* ================= SECTION 2 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          2. How We Use Your Information
        </h2>

        <p className="text-slate-300 mb-4">
          The information you share with us is used strictly for legitimate
          business purposes, including:
        </p>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Responding to enquiries and messages</li>
          <li>Providing project discussions, estimates, or consultations</li>
          <li>Delivering website, SaaS, or system development services</li>
          <li>Improving our website, content, and service quality</li>
        </ul>

        {/* ================= SECTION 3 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          3. Data Sharing & Third Parties
        </h2>

        <p className="text-slate-300 mb-4">
          We do <strong>not</strong> sell, rent, or trade your personal
          information. Your data may only be shared with trusted third-party
          tools that are required to operate our services, such as:
        </p>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Email services used for communication</li>
          <li>
            Secure databases or form-handling services (e.g., Supabase) for
            storing enquiries
          </li>
          <li>
            Analytics tools to understand website usage and improve performance
          </li>
        </ul>

        <p className="text-slate-300 mt-4">
          These services are used only for operational purposes and follow their
          own data protection standards.
        </p>

        {/* ================= SECTION 4 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">4. Data Security</h2>

        <p className="text-slate-300 mb-4">
          We take reasonable technical and organizational measures to protect
          your information from unauthorized access, misuse, or disclosure.
          While no system can guarantee absolute security, we follow best
          practices to keep your data safe.
        </p>

        {/* ================= SECTION 5 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          5. Cookies & Analytics
        </h2>

        <p className="text-slate-300 mb-4">
          ParshWebCraft may use cookies or analytics tools to understand how
          visitors interact with the website. This helps us improve performance,
          usability, and content relevance. You can control or disable cookies
          through your browser settings.
        </p>

        {/* ================= SECTION 6 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          6. SaaS & Application Data
        </h2>

        <p className="text-slate-300 mb-4">
          For SaaS platforms or internal systems developed by ParshWebCraft, any
          user data collected within those systems is governed by the specific
          project agreement. Clients are responsible for how data is collected,
          stored, and used within their own applications.
        </p>

        {/* ================= SECTION 7 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">7. Your Rights</h2>

        <p className="text-slate-300 mb-4">
          You have the right to request access, correction, or deletion of your
          personal information shared with us. You may also request
          clarification on how your data is being used.
        </p>

        {/* ================= SECTION 8 ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          8. Changes to This Policy
        </h2>

        <p className="text-slate-300 mb-4">
          This Privacy Policy may be updated from time to time to reflect
          changes in our practices or legal requirements. Continued use of the
          website implies acceptance of the updated policy.
        </p>

        {/* ================= CONTACT ================= */}
        <h2 className="text-2xl font-bold mt-10 mb-3">9. Contact Us</h2>

        <p className="text-slate-300 mb-4">
          If you have any questions or concerns about this Privacy Policy or how
          your information is handled, you can contact us at:
        </p>

        <p className="text-slate-300">
          📧{" "}
          <a
            className="underline hover:text-[#f3d07a]"
            href="mailto:parshwebcraft@gmail.com"
          >
            parshwebcraft@gmail.com
          </a>
        </p>

        <p className="text-slate-400 text-sm mt-12">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}

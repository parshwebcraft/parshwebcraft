export const metadata = {
  title: "Privacy Policy — ParshWebCraft",
  description: "How ParshWebCraft handles user data and privacy.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 px-6 lg:px-24">
      <section className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>

        <p className="text-slate-300 mb-4">
          At <strong>ParshWebCraft</strong>, your privacy is extremely important to us.
          This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-slate-300 mb-4">
          We collect basic user information such as:
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Message details submitted via our contact form</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-slate-300 mb-4">
          Your information is used to:
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Reply to your queries</li>
          <li>Provide services or quotations</li>
          <li>Improve our website & services</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">3. Data Sharing</h2>
        <p className="text-slate-300 mb-4">
          We <strong>never</strong> sell or share your personal information with third parties,
          except trusted service providers such as:
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Email service providers (for notifications)</li>
          <li>Supabase (for securely storing form submissions)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">4. Data Security</h2>
        <p className="text-slate-300 mb-4">
          We follow industry-standard practices to keep your data secure and encrypted.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">5. Cookies</h2>
        <p className="text-slate-300 mb-4">
          We may use cookies or analytics tools to understand visitor behavior and improve the user experience.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">6. Contact Us</h2>
        <p className="text-slate-300 mb-4">
          If you have any questions regarding this Privacy Policy, you can contact us at:
        </p>
        <p className="text-slate-300">
          📧 <a className="underline" href="mailto:parshwebcraft@gmail.com">parshwebcraft@gmail.com</a>
        </p>

        <p className="text-slate-400 text-sm mt-12">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}

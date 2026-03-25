import Link from "next/link";

export const metadata = {
  title: "Web Development Company in Udaipur | ParshWebCraft",
  description:
    "Looking for web development in Udaipur? ParshWebCraft builds fast, SEO-optimized websites and SaaS platforms for businesses.",
};

export default function Page() {
  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">
      {/* HERO */}
      <h1 className="text-4xl font-bold">Web Development Company in Udaipur</h1>

      <p className="mt-6 text-lg text-gray-600">
        ParshWebCraft is a leading web development company in Udaipur offering
        modern website design, ecommerce development, and custom SaaS solutions.
        We help businesses build fast, SEO-optimized websites that generate real
        leads and drive long-term growth.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <Link
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Get a Free Quote →
        </Link>
      </div>

      {/* SERVICES */}
      <h2 className="text-2xl font-semibold mt-14">
        Our Web Development Services
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">
        <li>
          ✔ Business Website Development (Corporate, Portfolio, Landing Pages)
        </li>
        <li>✔ Ecommerce Website Development (Shopify, Custom Stores)</li>
        <li>✔ Custom SaaS Applications & Dashboards</li>
        <li>✔ SEO Optimized Websites for Google Ranking</li>
        <li>✔ Website Redesign & Performance Optimization</li>
      </ul>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-semibold mt-14">
        Why Choose ParshWebCraft?
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">
        <li>✔ Fast loading websites (Core Web Vitals optimized)</li>
        <li>✔ SEO-ready structure for better Google ranking</li>
        <li>✔ Mobile-first responsive design</li>
        <li>✔ Clean UI/UX focused on conversions</li>
        <li>✔ Ongoing support & scalability</li>
      </ul>

      {/* PROCESS */}
      <h2 className="text-2xl font-semibold mt-14">
        Our Web Development Process
      </h2>

      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          <strong>Step 1: Requirement Discussion</strong> <br />
          We understand your business goals, audience, and website requirements.
        </p>

        <p>
          <strong>Step 2: Design & Development</strong> <br />
          We design and develop your website with modern UI, clean code, and SEO
          best practices.
        </p>

        <p>
          <strong>Step 3: Launch & Optimization</strong> <br />
          Your website is deployed, optimized for speed, and ready to generate
          leads.
        </p>
      </div>

      {/* LOCAL SEO BOOST */}
      <h2 className="text-2xl font-semibold mt-14">
        Web Development Services in Udaipur for Local Businesses
      </h2>

      <p className="mt-4 text-gray-700">
        We work with businesses across Udaipur including retail shops,
        showrooms, service providers, and startups. Whether you need a simple
        business website or a complete SaaS system, we deliver solutions that
        help your business grow online.
      </p>

      {/* FINAL CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="px-8 py-4 bg-black text-white rounded-lg font-semibold"
        >
          Start Your Project →
        </Link>
      </div>
    </main>
  );
}

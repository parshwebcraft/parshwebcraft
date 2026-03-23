import Link from "next/link";

export const metadata = {
  title: "Web Development Company in Udaipur | ParshWebCraft",
  description:
    "Looking for web development in Udaipur? ParshWebCraft builds fast, SEO-optimized websites and SaaS platforms for businesses.",
};

export default function Page() {
  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">
        Web Development Company in Udaipur
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        ParshWebCraft is a leading web development company in Udaipur offering
        website design, ecommerce development, and custom SaaS solutions for
        businesses.
      </p>

      <h2 className="text-2xl font-semibold mt-12">
        Our Web Development Services
      </h2>

      <ul className="mt-4 space-y-2">
        <li>✔ Business Website Development</li>
        <li>✔ Ecommerce Website Development</li>
        <li>✔ Custom SaaS Applications</li>
        <li>✔ SEO Optimized Websites</li>
      </ul>

      <div className="mt-12">
        <a
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Get a Free Quote
        </a>
      </div>
    </main>
  );
}
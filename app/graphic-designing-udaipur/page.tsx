import Link from "next/link";

export const metadata = {
  title: "Graphic Design Services in Udaipur | ParshWebCraft",
  description:
    "Looking for graphic designing in Udaipur? We design logos, posters, social media creatives, and branding for businesses.",
};

export default function Page() {
  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">
      
      {/* HERO */}
      <h1 className="text-4xl font-bold">
        Graphic Design Services in Udaipur
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        ParshWebCraft offers professional graphic design services in Udaipur
        including logo design, posters, flyers, and social media creatives.
        We create designs that build brand identity and attract customers.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <Link
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Get a Design Quote →
        </Link>
      </div>

      {/* SERVICES */}
      <h2 className="text-2xl font-semibold mt-14">
        Our Graphic Design Services
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">
        <li>✔ Logo Design & Brand Identity</li>
        <li>✔ Poster & Flyer Design</li>
        <li>✔ Social Media Creatives</li>
        <li>✔ Instagram Reels & Ad Creatives</li>
        <li>✔ Business Cards & Marketing Materials</li>
      </ul>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-semibold mt-14">
        Why Choose Our Design Services?
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">
        <li>✔ Modern & Premium Design Style</li>
        <li>✔ Designs focused on brand & conversions</li>
        <li>✔ Fast delivery & revisions</li>
        <li>✔ Perfect for ads & marketing campaigns</li>
      </ul>

      {/* LOCAL SEO */}
      <h2 className="text-2xl font-semibold mt-14">
        Graphic Designing in Udaipur for Businesses
      </h2>

      <p className="mt-4 text-gray-700">
        We work with local businesses, showrooms, startups, and brands in
        Udaipur to create high-quality graphics that improve branding and
        marketing results.
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
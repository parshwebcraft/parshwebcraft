import Link from "next/link";

export const metadata = {
  title: "Website Design Company in Udaipur | ParshWebCraft",
  description:
    "Looking for website design in Udaipur? ParshWebCraft creates modern, responsive, and SEO-optimized websites for businesses.",
};

export default function WebDesignPage() {
  return (
    <main className="px-6 lg:px-24 py-20 max-w-6xl mx-auto text-white">
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Website Design Company in{" "}
          <span className="text-[#f3d07a]">Udaipur</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          ParshWebCraft is a leading website design company in Udaipur creating
          modern, fast, and conversion-focused websites. We design business
          websites, landing pages, and digital experiences that help you attract
          customers and grow online.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#f3d07a] text-black rounded-xl font-semibold"
          >
            Get a Free Quote →
          </Link>

          <Link
            href="/portfolio"
            className="px-6 py-3 border border-[#f3d07a]/40 text-[#f3d07a] rounded-xl"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Our Website Design Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Business Website Design",
              desc: "Professional websites for local businesses, showrooms, and service providers.",
            },
            {
              title: "Landing Page Design",
              desc: "High-converting landing pages for ads, campaigns, and lead generation.",
            },
            {
              title: "Responsive Website Design",
              desc: "Mobile-first websites that work smoothly across all devices.",
            },
            {
              title: "Ecommerce Website Design",
              desc: "Modern ecommerce websites for fashion, jewellery, and retail businesses.",
            },
            {
              title: "Website Redesign",
              desc: "Upgrade your old website with modern UI, better UX, and higher performance.",
            },
            {
              title: "UI/UX Design",
              desc: "Clean, user-friendly interfaces designed to improve engagement and conversions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-[#2a2a2a] rounded-xl hover:border-[#f3d07a]/40 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Why Choose ParshWebCraft?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-xl font-semibold">Premium UI/UX</h3>
            <p className="text-slate-300 mt-2">
              Clean, modern designs that reflect your brand and build trust.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">SEO-Ready Design</h3>
            <p className="text-slate-300 mt-2">
              Built with SEO structure to help your website rank on Google.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fast & Optimized</h3>
            <p className="text-slate-300 mt-2">
              Speed optimized for better performance and higher conversions.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Our Website Design Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              step: "Step 1",
              title: "Requirement Discussion",
              desc: "We understand your business goals, audience, and design requirements.",
            },
            {
              step: "Step 2",
              title: "Design & Development",
              desc: "We design clean UI/UX and build a fast, responsive website.",
            },
            {
              step: "Step 3",
              title: "Launch & Optimization",
              desc: "Your website goes live with SEO and performance optimization.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border border-[#2a2a2a] rounded-xl">
              <span className="text-[#f3d07a] text-sm">{item.step}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO BOOST */}
      <section className="mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Website Design Services in Udaipur
        </h2>

        <p className="mt-4 text-slate-300">
          We work with businesses across Udaipur including retail shops,
          showrooms, startups, and service providers. Whether you need a simple
          business website or a complete ecommerce platform, we deliver designs
          that convert visitors into customers.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

        <div className="space-y-6 text-slate-300">
          <div>
            <strong>
              Which is the best website design company in Udaipur?
            </strong>
            <p className="mt-1">
              ParshWebCraft is one of the top website design companies in
              Udaipur offering modern, SEO-optimized websites.
            </p>
          </div>

          <div>
            <strong>How much does website design cost?</strong>
            <p className="mt-1">
              Website cost depends on features, design, and requirements.
              Contact us for a custom quote.
            </p>
          </div>

          <div>
            <strong>Do you design mobile-friendly websites?</strong>
            <p className="mt-1">
              Yes, all our websites are fully responsive and mobile optimized.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold">Ready to Design Your Website?</h2>

        <p className="text-slate-300 mt-4">
          Let’s create a website that actually grows your business.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-4 bg-[#f3d07a] text-black rounded-xl font-semibold"
        >
          Start Your Project →
        </Link>
      </section>
    </main>
  );
}

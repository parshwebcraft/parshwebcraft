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
          We design modern, fast, and user-friendly websites for businesses in
          Udaipur. From landing pages to full business websites, we focus on
          clean UI, smooth UX, and high conversion.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
          >
            Get a Free Quote
          </Link>

          <Link
            href="/portfolio"
            className="px-6 py-3 border border-slate-500 rounded-full"
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
              desc: "Professional websites for local businesses to build trust and attract customers.",
            },
            {
              title: "Landing Page Design",
              desc: "High-converting landing pages for ads, campaigns, and lead generation.",
            },
            {
              title: "Responsive Design",
              desc: "Mobile-first websites that work perfectly on all devices.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-[#2a2a2a] rounded-xl"
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
            <h3 className="text-xl font-semibold">Modern UI/UX</h3>
            <p className="text-slate-300 mt-2">
              Clean, premium designs focused on user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">SEO Friendly</h3>
            <p className="text-slate-300 mt-2">
              Websites built with SEO best practices from day one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fast Performance</h3>
            <p className="text-slate-300 mt-2">
              Optimized for speed, loading time, and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          Our Design Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              step: "Step 1",
              title: "Discussion",
              desc: "We understand your business and goals.",
            },
            {
              step: "Step 2",
              title: "Design",
              desc: "We create modern UI/UX designs tailored to your brand.",
            },
            {
              step: "Step 3",
              title: "Launch",
              desc: "Website goes live, optimized for performance and SEO.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-[#2a2a2a] rounded-xl"
            >
              <span className="text-[#f3d07a] text-sm">{item.step}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          FAQs
        </h2>

        <div className="space-y-6 text-slate-300">
          <div>
            <strong>
              What is the best website design company in Udaipur?
            </strong>
            <p className="mt-1">
              ParshWebCraft is one of the top website design companies in
              Udaipur offering modern UI/UX and SEO-focused websites.
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
              Yes, all our websites are fully responsive and optimized for
              mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Build Your Website?
        </h2>

        <p className="text-slate-300 mt-4">
          Let’s design a website that actually grows your business.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-[#f3d07a] text-black rounded-full font-semibold"
        >
          Contact Now
        </Link>
      </section>

    </main>
  );
}
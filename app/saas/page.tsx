export default function SaaSPage() {
  return (
    <main className="min-h-screen pt-28 px-6 lg:px-24">
      <section className="max-w-6xl mx-auto">
        {/* PAGE HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#f3d07a22] text-[#f3d07a] font-medium">
            SaaS Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Production-Ready SaaS Products
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            We design and build scalable SaaS platforms that are ready for real
            users, real traffic, and real business growth.
          </p>
        </div>

        {/* FEATURED SAAS */}
        <div className="rounded-3xl border border-[#f3d07a55] bg-[#0b0f19] p-10 mb-24">
          <span className="text-[#f3d07a] font-semibold text-sm">
            🚀 Featured SaaS Product
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            FreshMart — Hyperlocal Grocery & Order Management App
          </h2>

          <p className="text-slate-300 mt-4 max-w-4xl">
            FreshMart is a Blinkit / Grocbay-style hyperlocal grocery delivery
            platform designed for local stores and city-level operations. It
            includes a customer-facing ordering app and a powerful admin
            dashboard for store owners.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Feature text="Variant-based product catalog (Grocbay-grade)" />
            <Feature text="Customer app with cart, checkout & orders" />
            <Feature text="Admin dashboard with orders & revenue reports" />
            <Feature text="Banner & promotion management" />
            <Feature text="Address & delivery management" />
            <Feature text="Scalable FastAPI + MongoDB backend" />
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#f3d07a] text-black font-semibold hover:opacity-90 transition"
            >
              Request FreshMart Demo
            </a>
          </div>
        </div>

        {/* WHY SAAS */}
        <div className="text-center mb-24">
          <h3 className="text-3xl font-bold text-white">
            Why Choose Our SaaS Solutions?
          </h3>

          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            Our SaaS products are not prototypes. They are production-ready
            platforms built with scalability, performance, and business
            operations in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Reason
              title="Production-Ready"
              text="Built with real-world use cases, security, and performance in mind."
            />
            <Reason
              title="Customizable"
              text="White-label, custom branding, and feature extensions available."
            />
            <Reason
              title="Scalable"
              text="Designed to grow from local businesses to city-wide operations."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-300">
      <span className="text-[#f3d07a] mt-1">✔</span>
      <span>{text}</span>
    </div>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-[#2a2a2a]">
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-slate-300 mt-3">{text}</p>
    </div>
  );
}

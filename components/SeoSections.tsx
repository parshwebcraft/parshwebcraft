import Link from "next/link";

type Card = {
  title: string;
  desc: string;
};

type FAQ = {
  q: string;
  a: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-[#f3d07a]">
      {children}
    </p>
  );
}

export function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryCta = "View Portfolio",
  secondaryHref = "/portfolio",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="pt-28 pb-16 text-center">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {title} {highlight && <span className="text-[#f3d07a]">{highlight}</span>}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-xl bg-[#f3d07a] px-7 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(243,208,122,0.28)]"
          >
            {primaryCta}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-xl border border-[#f3d07a]/40 px-7 py-3 font-semibold text-[#f3d07a] transition hover:bg-[#f3d07a]/10"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CardGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Card[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-slate-300">{description}</p>}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="glass rounded-xl border border-[#f3d07a]/15 p-6 transition hover:-translate-y-1 hover:border-[#f3d07a]/40"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps }: { steps: Card[] }) {
  return (
    <CardGrid
      eyebrow="Process"
      title="A Clear Process Built for Results"
      description="Every project is planned around discoverability, user experience, conversion, and long-term maintainability."
      items={steps}
    />
  );
}

export function LocalSeoSection() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <Eyebrow>Local SEO</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Serving Businesses Across Udaipur
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            ParshWebCraft works with startups, restaurants, retail stores,
            education brands, service providers, and growing companies across
            Udaipur, Rajasthan, and India. We build digital assets that help
            local businesses appear stronger on Google and convert more visitors
            into qualified leads.
          </p>
        </div>
        <div className="glass rounded-xl border border-[#f3d07a]/15 p-6">
          <h3 className="text-2xl font-semibold text-white">
            Trusted by Local Businesses
          </h3>
          <p className="mt-4 leading-8 text-slate-300">
            Our work is designed for practical business outcomes: more calls,
            more WhatsApp enquiries, better brand trust, faster websites, and a
            stronger search presence for Udaipur-based businesses.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <span className="rounded-lg border border-white/10 px-3 py-2">Udaipur</span>
            <span className="rounded-lg border border-white/10 px-3 py-2">Rajasthan</span>
            <span className="rounded-lg border border-white/10 px-3 py-2">India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="glass rounded-xl border border-white/10 p-5"
            >
              <summary className="cursor-pointer font-semibold text-white">
                {faq.q}
              </summary>
              <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>Related Services</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Keep Exploring ParshWebCraft
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#f3d07a]/30 px-5 py-2 text-sm font-semibold text-[#f3d07a] transition hover:bg-[#f3d07a]/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialPlaceholder() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#f3d07a]/15 bg-white/[0.03] p-8 text-center">
        <Eyebrow>Client Trust</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Testimonials From Business Owners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Client stories, project outcomes, and review highlights will be added
          here as the portfolio grows.
        </p>
      </div>
    </section>
  );
}

export function CTABanner({
  title = "Ready to Grow Your Business Online?",
  description = "Talk to ParshWebCraft for a clear website, marketing, or software plan built around your business goals.",
  cta = "Get Free Consultation",
}: {
  title?: string;
  description?: string;
  cta?: string;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-[#f3d07a]/20 bg-[#f3d07a]/10 p-8 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-xl bg-[#f3d07a] px-7 py-3 font-semibold text-black transition hover:-translate-y-0.5"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  CTABanner,
  FAQSection,
  HeroSection,
  LocalSeoSection,
  RelatedLinks,
  TestimonialPlaceholder,
} from "@/components/SeoSections";

export const metadata: Metadata = {
  title: "Digital Services in Udaipur | Web, SEO, Marketing | ParshWebCraft",
  description:
    "Explore ParshWebCraft services: web development, website design, ecommerce, SaaS, SEO, Google Ads, Meta Ads, social media, branding, QR systems, and maintenance in Udaipur.",
  keywords: [
    "Website Development Company in Udaipur",
    "Digital Marketing Agency",
    "SEO Services in Udaipur",
    "Social Media Management Company",
    "Branding Agency",
  ],
  openGraph: {
    title: "ParshWebCraft Services | Web Development and Digital Marketing",
    description:
      "Websites, ecommerce, SaaS, SEO, ads, social media, branding, and business growth services for Udaipur and India.",
    url: "https://www.parshwebcraft.in/services",
  },
};

const services = [
  ["Web Development", "Custom websites, dashboards, and business systems built with scalable modern technology.", "/web-development-udaipur", "WD"],
  ["Website Design", "Premium responsive website design with conversion-focused UI and local SEO structure.", "/web-design-udaipur", "UI"],
  ["Ecommerce Development", "Online stores with product catalogs, payments, checkout, analytics, and SEO-ready product pages.", "/services/ecommerce", "EC"],
  ["SaaS Development", "Custom SaaS platforms, admin panels, subscriptions, CRM workflows, and secure user systems.", "/saas", "SA"],
  ["Custom CRM Software", "Lead management, customer tracking, internal dashboards, and automation for growing teams.", "/contact", "CR"],
  ["Restaurant QR Systems", "QR menus, digital ordering flows, offers, WhatsApp integration, and customer engagement tools.", "/contact", "QR"],
  ["SEO Optimization", "Technical SEO, metadata, schema-ready content, speed, internal links, and local search growth.", "/services/seo", "SE"],
  ["Google Ads Management", "Search campaigns, landing pages, conversion tracking, and lead-focused campaign optimization.", "/digital-marketing-udaipur", "GA"],
  ["Meta Ads Management", "Instagram and Facebook ad campaigns for awareness, enquiries, retargeting, and sales.", "/digital-marketing-udaipur", "MA"],
  ["Social Media Management", "Content calendars, captions, creatives, community management, and business-focused posting.", "/digital-marketing-udaipur", "SM"],
  ["Instagram Reels Marketing", "Reels strategy, scripts, hooks, editing direction, and content built for attention and action.", "/digital-marketing-udaipur", "IR"],
  ["Content Creation", "Website content, social posts, campaign messaging, blogs, and brand communication assets.", "/digital-marketing-udaipur", "CC"],
  ["Professional Photoshoots", "Product, team, venue, food, and brand shoots planned for websites and social campaigns.", "/digital-marketing-udaipur", "PH"],
  ["Branding & Identity Design", "Logo direction, visual identity, brand colors, typography, and consistent design systems.", "/graphic-designing-udaipur", "BI"],
  ["Bulk SMS Services", "Promotional and update campaigns for offers, events, reminders, and local customer engagement.", "/digital-marketing-udaipur", "BS"],
  ["WhatsApp Marketing", "Click-to-chat campaigns, lead follow-up flows, broadcast planning, and conversion messaging.", "/digital-marketing-udaipur", "WA"],
  ["Graphic Design", "Posters, banners, social media creatives, brochures, ads, and business visual assets.", "/graphic-designing-udaipur", "GD"],
  ["Maintenance & Support", "Website updates, security checks, backups, bug fixes, and ongoing performance monitoring.", "/services/maintenance", "MS"],
  ["Hosting & Domain Setup", "Domain, hosting, email, SSL, deployment, and technical setup for smooth website launch.", "/contact", "HD"],
];

const faqs = [
  {
    q: "Which services does ParshWebCraft provide?",
    a: "ParshWebCraft provides website design, web development, ecommerce, SaaS, SEO, digital marketing, social media management, branding, ads, QR systems, and website maintenance.",
  },
  {
    q: "Do you work with businesses outside Udaipur?",
    a: "Yes. We serve businesses in Udaipur, Rajasthan, and across India through remote planning, design, development, marketing, and support.",
  },
  {
    q: "Can you handle both website and marketing?",
    a: "Yes. We can build the website, optimize it for SEO, create content, run ads, and set up lead capture through forms, calls, and WhatsApp.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Web, Marketing and Growth Services"
        title="Complete Digital Services for"
        highlight="Business Growth"
        description="ParshWebCraft helps businesses in Udaipur, Rajasthan, and India build stronger websites, rank better on Google, generate qualified leads, and scale with custom software and digital marketing."
        primaryCta="Get Free Consultation"
        secondaryCta="Explore Case Studies"
        secondaryHref="/case-studies"
      />

      <section className="py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Services Built for Visibility, Trust and Leads
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Choose a focused service or combine website, SEO, ads, content,
              and automation into one growth system.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(([title, desc, href, icon]) => (
              <article
                key={title}
                className="glass flex h-full flex-col rounded-xl border border-[#f3d07a]/15 p-6 transition hover:-translate-y-1 hover:border-[#f3d07a]/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3d07a]/15 text-sm font-bold text-[#f3d07a]">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">{desc}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex font-semibold text-[#f3d07a] hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Web Design Udaipur", href: "/web-design-udaipur" },
          { label: "Web Development Udaipur", href: "/web-development-udaipur" },
          { label: "Digital Marketing", href: "/digital-marketing-udaipur" },
          { label: "Blog", href: "/blog" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />
      <CTABanner />
    </main>
  );
}

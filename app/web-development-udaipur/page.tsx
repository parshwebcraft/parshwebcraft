import type { Metadata } from "next";
import {
  CardGrid,
  CTABanner,
  FAQSection,
  HeroSection,
  LocalSeoSection,
  ProcessSection,
  RelatedLinks,
  TestimonialPlaceholder,
} from "@/components/SeoSections";

export const metadata: Metadata = {
  title: "Web Development Company in Udaipur | ParshWebCraft",
  description:
    "ParshWebCraft is a web development company in Udaipur building fast websites, ecommerce stores, SaaS platforms, dashboards, CRMs, and SEO-ready business systems.",
  keywords: [
    "Website Development Company in Udaipur",
    "Web Development Company in Udaipur",
    "Ecommerce Website Development",
    "SaaS Development Company",
  ],
  openGraph: {
    title: "Web Development Company in Udaipur | ParshWebCraft",
    description:
      "Custom websites, ecommerce platforms, SaaS products, and business systems built for SEO, speed, and lead generation.",
    url: "https://www.parshwebcraft.in/web-development-udaipur",
  },
};

const services = [
  { title: "Business Website Development", desc: "Company websites, service pages, landing pages, and local SEO pages designed to generate calls and enquiries." },
  { title: "Ecommerce Website Development", desc: "Product catalogs, cart, checkout, secure payments, order workflows, analytics, and search-friendly product pages." },
  { title: "SaaS Application Development", desc: "Subscription platforms, dashboards, admin panels, authentication, reporting, and scalable feature development." },
  { title: "Custom CRM Software", desc: "Lead pipelines, customer records, follow-up tracking, team dashboards, and automation for growing businesses." },
  { title: "Restaurant QR Systems", desc: "QR menus, digital ordering support, offers, WhatsApp flows, and restaurant-friendly content management." },
  { title: "Performance and SEO Setup", desc: "Core Web Vitals, technical SEO, schema-ready content, metadata, redirects, and crawlable site architecture." },
];

const benefits = [
  { title: "Built for Google Ranking", desc: "Every page is planned with semantic headings, keyword intent, internal links, fast loading, and structured content." },
  { title: "Built for Lead Generation", desc: "Forms, WhatsApp buttons, CTA banners, portfolios, case studies, and landing pages guide visitors toward action." },
  { title: "Built for Long-Term Scale", desc: "Clean code, maintainable structure, secure integrations, and flexible features keep your website ready for growth." },
];

const steps = [
  { title: "Discovery and SEO Planning", desc: "We understand your services, audience, competitors, locations, keywords, and conversion goals." },
  { title: "Design, Content and Development", desc: "We create a premium interface, write structured content, and develop the website with modern best practices." },
  { title: "Launch, Tracking and Growth", desc: "We deploy, test performance, connect analytics, review lead flow, and plan SEO or marketing expansion." },
];

const faqs = [
  { q: "Which is the best web development company in Udaipur?", a: "ParshWebCraft is a strong choice for businesses that need premium design, SEO-ready development, ecommerce, SaaS, CRM systems, and ongoing support." },
  { q: "Do you build ecommerce websites?", a: "Yes. We build ecommerce websites with product pages, cart, checkout, payments, admin workflows, SEO, and analytics." },
  { q: "Can you build SaaS platforms?", a: "Yes. We develop SaaS platforms, dashboards, subscriptions, user systems, reporting tools, and custom business software." },
  { q: "How long does a website take?", a: "A focused business website can often be completed in a few weeks. Ecommerce, SaaS, and CRM projects depend on features and integrations." },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Website Development Company in Udaipur"
        title="Web Development Built for"
        highlight="Search, Speed and Leads"
        description="ParshWebCraft develops professional websites, ecommerce platforms, SaaS products, custom CRM software, and business systems for companies in Udaipur, Rajasthan, and India."
        primaryCta="Get a Free Quote"
      />
      <CardGrid eyebrow="Services" title="Our Web Development Services" items={services} />
      <CardGrid eyebrow="Benefits" title="Why Businesses Choose ParshWebCraft" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Website Design", href: "/web-design-udaipur" },
          { label: "Ecommerce Development", href: "/services/ecommerce" },
          { label: "SaaS Solutions", href: "/saas" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "SEO Blog", href: "/blog/how-seo-helps-small-businesses-grow" },
        ]}
      />
      <CTABanner title="Need a Website That Actually Brings Enquiries?" />
    </main>
  );
}

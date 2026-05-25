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
  title: "SEO Services in Udaipur | ParshWebCraft",
  description:
    "SEO services in Udaipur for technical SEO, on-page SEO, local SEO, blog strategy, metadata, internal linking, and website speed optimization.",
  keywords: ["SEO Services in Udaipur", "local SEO", "technical SEO", "Google ranking"],
  openGraph: {
    title: "SEO Services in Udaipur | ParshWebCraft",
    description:
      "Improve Google rankings with local SEO, technical SEO, content strategy, metadata, schema-ready pages, and speed optimization.",
    url: "https://www.parshwebcraft.in/services/seo",
  },
};

const services = [
  { title: "Technical SEO", desc: "Crawlability, indexability, metadata, sitemap review, redirects, page speed, and Core Web Vitals improvements." },
  { title: "On-Page SEO", desc: "Keyword mapping, heading structure, page copy, internal linking, image alt text, and CTA placement." },
  { title: "Local SEO", desc: "Location-focused pages, Udaipur keywords, Google Business Profile support, and service area content." },
  { title: "Content Strategy", desc: "Blog topics, service page expansion, FAQs, comparison pages, and helpful content for AI visibility." },
  { title: "SEO Audits", desc: "Practical audits that identify ranking blockers, content gaps, speed issues, and conversion improvements." },
  { title: "Analytics Setup", desc: "Google Analytics, Search Console, conversion events, lead tracking, and reporting foundations." },
];

const benefits = [
  { title: "Compounding Visibility", desc: "SEO helps your website attract visitors month after month without depending only on paid ads." },
  { title: "Higher-Intent Leads", desc: "Search visitors are often actively comparing services, prices, providers, and solutions." },
  { title: "Better AI Discoverability", desc: "Structured pages, FAQs, clear entities, and helpful content make your brand easier for AI systems to understand." },
];

const steps = [
  { title: "Audit and Keyword Mapping", desc: "We review your website, competitors, technical health, local keywords, and service opportunities." },
  { title: "Content and Technical Fixes", desc: "We improve pages, metadata, headings, internal links, speed, content depth, and FAQs." },
  { title: "Measure and Expand", desc: "We track rankings, traffic, leads, and content gaps, then expand pages and blogs over time." },
];

const faqs = [
  { q: "Do you provide SEO services in Udaipur?", a: "Yes. ParshWebCraft provides local SEO, technical SEO, on-page SEO, content strategy, and website optimization for Udaipur businesses." },
  { q: "How does SEO help small businesses?", a: "SEO helps small businesses appear when customers search for services, compare providers, and look for local solutions." },
  { q: "Can SEO work with digital marketing?", a: "Yes. SEO works best when combined with strong website content, social media, landing pages, ads, and clear lead capture." },
];

export default function SEOServicePage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="SEO Services in Udaipur"
        title="Rank Better on Google and"
        highlight="Generate Better Leads"
        description="ParshWebCraft improves search visibility with technical SEO, local SEO, content strategy, metadata, internal linking, page speed, and SEO-friendly website structure."
        primaryCta="Start SEO Optimization"
      />
      <CardGrid eyebrow="Services" title="SEO Services for Business Growth" items={services} />
      <CardGrid eyebrow="Benefits" title="Why SEO Matters" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "SEO Blog", href: "/blog/how-seo-helps-small-businesses-grow" },
          { label: "Web Design", href: "/web-design-udaipur" },
          { label: "Digital Marketing", href: "/digital-marketing-udaipur" },
          { label: "Services", href: "/services" },
        ]}
      />
      <CTABanner title="Want More Organic Traffic?" cta="Start SEO Optimization" />
    </main>
  );
}

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
  title: "Web Design Company in Udaipur | ParshWebCraft",
  description:
    "ParshWebCraft is a web design company in Udaipur creating premium, responsive, SEO-friendly websites, landing pages, and conversion-focused UI/UX.",
  keywords: [
    "Web Design Company in Udaipur",
    "Website Design in Udaipur",
    "Branding Agency",
    "SEO Services in Udaipur",
  ],
  openGraph: {
    title: "Web Design Company in Udaipur | ParshWebCraft",
    description:
      "Premium website design, landing pages, UI/UX, redesigns, and SEO-ready layouts for Udaipur businesses.",
    url: "https://www.parshwebcraft.in/web-design-udaipur",
  },
};

const services = [
  { title: "Business Website Design", desc: "Professional websites for showrooms, service providers, consultants, startups, institutes, and local brands." },
  { title: "Landing Page Design", desc: "Focused pages for ads, campaigns, offers, lead magnets, WhatsApp enquiries, and appointment bookings." },
  { title: "Responsive UI/UX", desc: "Mobile-first layouts that are easy to scan, fast to use, and designed around clear customer actions." },
  { title: "Ecommerce UI Design", desc: "Product pages, collection layouts, checkout journeys, trust badges, and storefront design for higher conversions." },
  { title: "Website Redesign", desc: "Modernize outdated websites with stronger branding, cleaner structure, better speed, and clearer CTAs." },
  { title: "Brand-Aligned Visuals", desc: "Colors, typography, sections, image direction, and interface style shaped around your business identity." },
];

const benefits = [
  { title: "Premium First Impression", desc: "A polished website helps customers trust your business before they call, visit, or send an enquiry." },
  { title: "SEO-Friendly Layouts", desc: "Pages are structured with proper H1, H2, H3 hierarchy, local keywords, FAQs, and internal links." },
  { title: "Conversion-Focused Design", desc: "Hero CTAs, service sections, proof areas, and contact paths are planned to generate qualified leads." },
];

const steps = [
  { title: "Brand and Requirement Review", desc: "We understand your audience, services, local market, references, and the action you want visitors to take." },
  { title: "Wireframe and Visual Direction", desc: "We plan the page flow, section hierarchy, content blocks, mobile layout, and premium visual style." },
  { title: "Design, Build and Optimize", desc: "We turn the design into a responsive, SEO-ready website with strong CTA placement and performance basics." },
];

const faqs = [
  { q: "Which is the best web design company in Udaipur?", a: "ParshWebCraft designs premium, responsive, SEO-friendly websites for local businesses, startups, ecommerce brands, and service providers in Udaipur." },
  { q: "Do you redesign old websites?", a: "Yes. We redesign outdated websites with modern UI, better readability, SEO content, improved CTAs, and faster performance." },
  { q: "Will my website be mobile friendly?", a: "Yes. Every website is designed mobile-first because most customers browse, compare, and contact businesses from mobile devices." },
  { q: "Can you also write website content?", a: "Yes. We can write SEO-friendly content, service sections, FAQs, CTAs, and local SEO copy for your website." },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Web Design Company in Udaipur"
        title="Premium Website Design for"
        highlight="Modern Businesses"
        description="ParshWebCraft designs elegant, responsive, SEO-optimized websites that help Udaipur businesses look credible, explain their services clearly, and turn visitors into enquiries."
        primaryCta="Get a Free Design Quote"
      />
      <CardGrid eyebrow="Services" title="Our Website Design Services" items={services} />
      <CardGrid eyebrow="Benefits" title="Design That Supports Business Growth" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Web Development", href: "/web-development-udaipur" },
          { label: "Graphic Design", href: "/graphic-designing-udaipur" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Branding Blog", href: "/blog/importance-branding-for-startups" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <CTABanner title="Want a Website That Looks Premium and Converts?" />
    </main>
  );
}

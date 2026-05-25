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
  title: "Ecommerce Website Development | ParshWebCraft",
  description:
    "Build ecommerce websites with product catalogs, payment gateways, checkout, inventory workflows, SEO, and conversion-focused design.",
  keywords: ["Ecommerce Website Development", "online store development", "ecommerce website Udaipur"],
  openGraph: {
    title: "Ecommerce Website Development | ParshWebCraft",
    description:
      "High-converting ecommerce stores for local businesses, retail brands, fashion, jewellery, and service-led products.",
    url: "https://www.parshwebcraft.in/services/ecommerce",
  },
};

const services = [
  { title: "Custom Storefronts", desc: "Premium ecommerce UI for product discovery, collections, offers, trust, and brand storytelling." },
  { title: "Payments and Checkout", desc: "Secure payment gateway integration, cart, checkout flow, order confirmations, and conversion-focused UX." },
  { title: "Product Management", desc: "Simple product, pricing, inventory, image, category, and offer management for your team." },
  { title: "Mobile Commerce", desc: "Fast mobile shopping experiences for customers browsing through Google, Instagram, and WhatsApp." },
  { title: "Ecommerce SEO", desc: "Search-friendly product pages, category content, metadata, internal links, and structured product information." },
  { title: "Marketing Integrations", desc: "Analytics, Meta Pixel, Google Ads tracking, WhatsApp support, and campaign landing pages." },
];

const benefits = [
  { title: "Sell Beyond Walk-In Customers", desc: "Turn your local store into an online sales channel for Udaipur, Rajasthan, and India." },
  { title: "Improve Customer Trust", desc: "Clear product pages, secure checkout, policies, support options, and professional design increase buying confidence." },
  { title: "Support Ads and SEO", desc: "A properly built store gives your ads and organic search campaigns a stronger destination." },
];

const steps = [
  { title: "Catalog and Business Planning", desc: "We map products, categories, shipping, payments, offers, target customers, and operational needs." },
  { title: "Design and Development", desc: "We build the storefront, product pages, cart, checkout, admin flows, and tracking setup." },
  { title: "Launch and Optimize", desc: "We test buying flow, speed, mobile experience, SEO basics, and campaign readiness before launch." },
];

const faqs = [
  { q: "Do you build ecommerce websites for local businesses?", a: "Yes. We build ecommerce websites for local retailers, fashion brands, jewellery stores, food brands, and growing businesses." },
  { q: "Can you add online payments?", a: "Yes. We can integrate secure payment gateways and create a smooth cart and checkout experience." },
  { q: "Will my ecommerce website be SEO friendly?", a: "Yes. We structure product pages, categories, metadata, headings, and internal links for search visibility." },
];

export default function EcommerceServicePage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Ecommerce Website Development"
        title="Online Stores Built to"
        highlight="Convert and Scale"
        description="ParshWebCraft builds ecommerce websites for local businesses, retail brands, fashion stores, jewellery businesses, and product companies that want a polished online sales channel."
        primaryCta="Build My Store"
      />
      <CardGrid eyebrow="Services" title="Ecommerce Development Services" items={services} />
      <CardGrid eyebrow="Benefits" title="Why Invest in Ecommerce" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Web Development", href: "/web-development-udaipur" },
          { label: "Digital Marketing", href: "/digital-marketing-udaipur" },
          { label: "Ecommerce Blog", href: "/blog/benefits-ecommerce-websites-local-businesses" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />
      <CTABanner title="Ready to Start Selling Online?" cta="Build My Store" />
    </main>
  );
}

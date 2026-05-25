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
  title: "Digital Marketing Agency in Udaipur | ParshWebCraft",
  description:
    "ParshWebCraft provides digital marketing in Udaipur: social media management, reels strategy, branding, SEO, Google Ads, Meta Ads, WhatsApp marketing, and lead generation.",
  keywords: [
    "Digital Marketing Agency",
    "Social Media Management Company",
    "SEO Services in Udaipur",
    "Google Ads Management",
    "Meta Ads Management",
    "WhatsApp Marketing",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Udaipur | ParshWebCraft",
    description:
      "Social media, reels, content creation, branding, SEO, ads, WhatsApp marketing, and lead generation for Udaipur businesses.",
    url: "https://www.parshwebcraft.in/digital-marketing-udaipur",
  },
};

const services = [
  { title: "Social Media Marketing", desc: "Instagram, Facebook, and platform-specific content plans that build awareness, trust, and enquiries." },
  { title: "Reels Strategy", desc: "Hooks, scripts, editing direction, content calendars, and reels ideas designed for reach and conversion." },
  { title: "Content Creation", desc: "Posts, captions, campaign concepts, blog ideas, website copy, and sales-focused communication." },
  { title: "Branding", desc: "Visual identity, brand tone, design consistency, campaign look, and positioning for better recall." },
  { title: "SEO Optimization", desc: "Service pages, blog strategy, technical SEO, local SEO, internal linking, and Google visibility improvements." },
  { title: "Paid Ads", desc: "Lead-focused ad campaigns with landing pages, audience planning, tracking, and performance reviews." },
  { title: "Lead Generation", desc: "Campaigns connected to forms, WhatsApp, landing pages, follow-up flows, and CRM-ready lead capture." },
  { title: "WhatsApp Marketing", desc: "Click-to-chat campaigns, message flows, offer promotions, and customer follow-up planning." },
  { title: "Google Ads", desc: "Search ads for high-intent keywords, local service campaigns, conversion tracking, and keyword refinement." },
  { title: "Meta Ads", desc: "Instagram and Facebook ads for leads, retargeting, awareness, offers, and product campaigns." },
  { title: "Bulk SMS Marketing", desc: "Promotional and informational SMS campaigns for offers, reminders, events, and customer updates." },
  { title: "Professional Photoshoots", desc: "Product, food, team, venue, and brand photos planned for websites, ads, and social content." },
];

const benefits = [
  { title: "One Growth System", desc: "Website, SEO, social content, ads, WhatsApp, and landing pages work together instead of operating separately." },
  { title: "Local Market Focus", desc: "Campaigns are planned with Udaipur audiences, service areas, customer behavior, and local search intent in mind." },
  { title: "Measurable Lead Flow", desc: "We focus on enquiries, calls, WhatsApp chats, form submissions, and campaign tracking rather than vanity metrics alone." },
];

const steps = [
  { title: "Audit and Goal Setting", desc: "We review your website, social channels, competitors, audience, offers, and current lead sources." },
  { title: "Campaign and Content Plan", desc: "We plan content pillars, reels, SEO pages, ad campaigns, landing pages, and CTA flow." },
  { title: "Execution and Optimization", desc: "We publish, track, review performance, improve creatives, refine targeting, and strengthen lead quality." },
];

const faqs = [
  { q: "Do you provide digital marketing services in Udaipur?", a: "Yes. ParshWebCraft provides digital marketing, SEO, social media management, reels strategy, Google Ads, Meta Ads, WhatsApp marketing, and branding in Udaipur." },
  { q: "Can digital marketing generate leads?", a: "Yes. Strong digital marketing connects content, ads, landing pages, SEO, WhatsApp, and follow-up systems to generate qualified enquiries." },
  { q: "Do you manage Instagram pages?", a: "Yes. We plan social media content, reels, captions, creatives, campaign ideas, and growth-focused posting systems." },
  { q: "Can you run Google and Meta ads?", a: "Yes. We can plan and manage Google Ads and Meta Ads with landing pages, targeting, tracking, and conversion-focused messaging." },
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Digital Marketing Agency in Udaipur"
        title="Marketing That Turns Attention Into"
        highlight="Qualified Leads"
        description="ParshWebCraft helps businesses grow with social media marketing, reels strategy, SEO optimization, paid ads, branding, WhatsApp marketing, Google Ads, Meta Ads, and bulk SMS campaigns."
        primaryCta="Get Free Marketing Consultation"
        secondaryCta="Read Marketing Blogs"
        secondaryHref="/blog"
      />
      <CardGrid eyebrow="Marketing Services" title="Digital Marketing Services for Udaipur Businesses" items={services} />
      <CardGrid eyebrow="Benefits" title="Why Our Marketing Approach Works" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "SEO Services", href: "/services/seo" },
          { label: "Website Design", href: "/web-design-udaipur" },
          { label: "Social Media Blog", href: "/blog/social-media-strategies-for-businesses" },
          { label: "Digital vs Traditional", href: "/blog/digital-marketing-vs-traditional-marketing" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <CTABanner
        title="Get Free Marketing Consultation"
        description="Tell us your business goal and we will suggest a practical digital marketing plan for leads, visibility, and brand growth."
        cta="Get Free Marketing Consultation"
      />
    </main>
  );
}

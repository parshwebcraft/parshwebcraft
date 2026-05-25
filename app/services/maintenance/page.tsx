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
  title: "Website Maintenance and Support | ParshWebCraft",
  description:
    "Website maintenance services for updates, backups, security, bug fixes, speed checks, content changes, hosting support, and ongoing website care.",
  keywords: ["website maintenance", "website support", "hosting support", "website security"],
  openGraph: {
    title: "Website Maintenance and Support | ParshWebCraft",
    description:
      "Keep your website secure, fast, updated, and ready for leads with ParshWebCraft maintenance and support.",
    url: "https://www.parshwebcraft.in/services/maintenance",
  },
};

const services = [
  { title: "Regular Updates", desc: "Framework, dependency, plugin, content, and technical updates to keep your website healthy." },
  { title: "Security Checks", desc: "Monitoring, SSL review, access hygiene, vulnerability checks, and safer website operations." },
  { title: "Backups and Recovery", desc: "Backup planning and recovery support so your website can be restored when issues happen." },
  { title: "Bug Fixes", desc: "Fix layout issues, broken forms, failed integrations, mobile bugs, and small website problems." },
  { title: "Performance Checks", desc: "Speed reviews, image checks, Core Web Vitals basics, and user experience improvements." },
  { title: "Hosting and Domain Support", desc: "Domain, hosting, DNS, SSL, email, and deployment support for smooth operations." },
];

const benefits = [
  { title: "Protect Your Website Investment", desc: "Maintenance keeps your website stable after launch and avoids preventable downtime." },
  { title: "Keep Lead Flow Working", desc: "Forms, WhatsApp links, tracking, landing pages, and CTAs need periodic checks to keep enquiries coming." },
  { title: "Stay Ready for Growth", desc: "As your services, campaigns, and content grow, maintenance keeps the site organized and current." },
];

const steps = [
  { title: "Website Review", desc: "We review your current website, hosting, forms, speed, errors, content, and support needs." },
  { title: "Maintenance Plan", desc: "We define update frequency, backup needs, support scope, and priority areas." },
  { title: "Ongoing Support", desc: "We handle fixes, updates, checks, and small improvements so your website stays reliable." },
];

const faqs = [
  { q: "Do websites need maintenance after launch?", a: "Yes. Websites need updates, security checks, backups, form testing, content updates, and performance reviews." },
  { q: "Can you maintain websites built by someone else?", a: "In many cases, yes. We first review the website stack, access, hosting, and code quality before confirming support." },
  { q: "Do you provide hosting and domain setup?", a: "Yes. We can help with hosting, domains, SSL, DNS, deployment, and technical setup." },
];

export default function MaintenanceServicePage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <HeroSection
        eyebrow="Website Maintenance and Support"
        title="Keep Your Website"
        highlight="Secure, Fast and Updated"
        description="ParshWebCraft provides website maintenance, support, backups, bug fixes, hosting help, domain setup, and performance checks for businesses that want a reliable online presence."
        primaryCta="Get Maintenance Plan"
      />
      <CardGrid eyebrow="Services" title="Maintenance Services" items={services} />
      <CardGrid eyebrow="Benefits" title="Why Maintenance Matters" items={benefits} />
      <ProcessSection steps={steps} />
      <LocalSeoSection />
      <TestimonialPlaceholder />
      <FAQSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Web Development", href: "/web-development-udaipur" },
          { label: "SEO Services", href: "/services/seo" },
          { label: "Contact Support", href: "/contact" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      <CTABanner title="Need Ongoing Website Support?" cta="Get Maintenance Plan" />
    </main>
  );
}

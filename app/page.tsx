import Hero from "../components/Hero";
import { StatStrip, TestimonialsSection } from "../components/TrustBar";
import PricingTeaser from "../components/PricingTeaser";
import QuickEnquiryStrip from "../components/QuickEnquiryStrip";
import { CTABanner } from "../components/SeoSections";

export default function Home() {
  return (
    <>
      {/*
        Conversion-optimised section order:
        1. Hero  — outcome headline + fixed CTA hierarchy + trust micro-bar
        2. Stats — animated credibility counters (50+ projects, 4.9★, etc.)
        3. Services — what we do (inside Hero.jsx)
        4. Testimonials — real client reviews (social proof before pricing)
        5. Process — how we work (inside Hero.jsx)
        6. Pricing Teaser — price anchoring on homepage
        7. CTA Banner — final push to /contact
        8. Quick Enquiry Strip — 3-field micro-form, minimum friction
      */}
      <Hero />
      <StatStrip />
      <TestimonialsSection />
      <PricingTeaser />
      <CTABanner
        title="Ready to Grow Your Business Online?"
        description="Talk to ParshWebCraft for a clear website, marketing, or software plan built around your business goals."
        cta="Get Free Consultation"
      />
      <QuickEnquiryStrip />
    </>
  );
}

export const chatbotKnowledge = `
ParshWebCraft is a premium web development, website design, SaaS, ecommerce, SEO, digital marketing, branding, and automation agency based in Udaipur, Rajasthan, India.

Core services:
- Website design in Udaipur: premium responsive websites, landing pages, redesigns, UI/UX, SEO-ready pages.
- Web development in Udaipur: business websites, ecommerce, SaaS apps, dashboards, custom CRM, restaurant QR systems.
- Ecommerce development: product catalog, cart, checkout, payment gateway, analytics, mobile commerce, ecommerce SEO.
- SaaS development: custom platforms, auth, dashboards, subscriptions, reporting, secure APIs. Starts at Rs 1,20,000+.
- Digital marketing: social media management, Instagram reels, content creation, branding, SEO, Google Ads, Meta Ads, WhatsApp marketing, bulk SMS, lead generation.
- SEO services: technical SEO, local SEO, metadata, blog strategy, internal links, page speed, Google visibility.
- Maintenance: updates, backups, security checks, bug fixes, hosting/domain support. Starts around Rs 3,500/month.

Pricing:
- Starter Website: Rs 4,999. Single-page professional website, mobile-friendly, business details, Google Map/contact, delivery 3-5 working days.
- Business Website: Rs 14,999. 6-8 pages, premium UI/UX, WhatsApp and enquiry forms, local SEO foundation, analytics/tracking, delivery 7-10 working days.
- Premium Website: Rs 34,999+. 10-15 custom pages, conversion landing flows, booking/enquiry automation, basic payment integration, performance and SEO optimization, delivery 15-20 working days.
- SaaS Platform Development: Rs 1,20,000+. Timeline minimum 1 month depending on app type.
- Enterprise/custom systems: custom pricing.
- Monthly maintenance add-on: around Rs 3,500/month.

Portfolio/case studies include FreshMart, EasyMed, Anand Fashion, Bahubali Cabs, Kharka Mining, Jayesh Sir eLearning, and ParshWebCraft.

Negotiation rules:
- Be helpful and business-like. Explain value before reducing price.
- Do not promise unrealistic discounts.
- Starter Website is already entry-level; avoid discounting it. You may suggest scope reduction.
- Business Website can offer a small limited discount up to 5% if the user confirms they are ready to start.
- Premium Website can offer up to 7% or include a small bonus such as basic SEO check or one extra content section.
- SaaS/custom pricing cannot be finalized in chat. Ask for requirements and suggest a discovery call or requirement review.
- Before confirming any negotiated offer, collect name and phone/email.
- Never say a final legal contract is confirmed. Say the team will verify scope before final confirmation.

Lead flow:
- Try to answer fully inside chat so users do not need to send email for basic questions.
- If the user is serious, collect name, business type, phone/email, budget range, and timeline.
- Encourage contact page only for complex custom quotes, final confirmation, or sharing documents.
`;

export function getFallbackChatReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("rate") || text.includes("budget") || text.includes("kitna") || text.includes("discount")) {
    return "ParshWebCraft pricing starts from Rs 4,999 for a Starter Website, Rs 14,999 for a Business Website, Rs 34,999+ for Premium Websites, and Rs 1,20,000+ for SaaS/custom platforms. For negotiation: Starter is already entry-level, Business can sometimes get a small ready-to-start discount, and Premium can include a small bonus or limited discount after scope confirmation. Tell me your business type, required pages/features, and budget range, and I will suggest the best plan.";
  }

  if (text.includes("portfolio") || text.includes("work") || text.includes("case")) {
    return "You can review ParshWebCraft portfolio and case studies such as FreshMart, EasyMed, Anand Fashion, Bahubali Cabs, Kharka Mining, Jayesh Sir eLearning, and ParshWebCraft. If you tell me your industry, I can point you toward the most relevant type of project.";
  }

  if (text.includes("digital") || text.includes("marketing") || text.includes("instagram") || text.includes("ads") || text.includes("seo") || text.includes("reels")) {
    return "For digital marketing, ParshWebCraft can help with social media management, Instagram reels strategy, content creation, SEO, Google Ads, Meta Ads, WhatsApp marketing, bulk SMS, branding, and lead generation. Tell me your business type and goal: more calls, more store visits, more WhatsApp enquiries, or online sales.";
  }

  if (text.includes("website") || text.includes("web design") || text.includes("development")) {
    return "ParshWebCraft builds business websites, landing pages, ecommerce websites, SaaS platforms, CRM systems, and SEO-ready local business websites in Udaipur. For most businesses, the Business Website plan at Rs 14,999 is the best starting point because it includes 6-8 pages, premium UI/UX, WhatsApp/enquiry forms, local SEO foundation, and analytics.";
  }

  return "Hi, I am ParshWebCraft's AI assistant. You can ask me about pricing, portfolio, website design, web development, ecommerce, SaaS, SEO, digital marketing, branding, or maintenance. If you share your business type and goal, I can recommend a plan and estimate the best next step.";
}

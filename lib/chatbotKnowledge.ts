export const chatbotKnowledge = `
ParshWebCraft is a premium web development, website design, SaaS, ecommerce, SEO, digital marketing, branding, and automation agency based in Udaipur, Rajasthan, India.

Core services:
- Website design in Udaipur: premium responsive websites, landing pages, redesigns, UI/UX, SEO-ready pages.
- Web development in Udaipur: business websites, ecommerce, SaaS apps, dashboards, custom CRM, restaurant QR systems.
- Ecommerce development: product catalog, cart, checkout, payment gateway, analytics, mobile commerce, ecommerce SEO.
- SaaS development: custom platforms, auth, dashboards, subscriptions, reporting, secure APIs. Starts at Rs 1,20,000+.
- ParshLedger: accounting and ledger management SaaS for Indian businesses, party-wise balances, payment tracking, credit/debit entries, transaction history, and business finance dashboard.
- Parsh HR: HR and employee management system for attendance, employee records, leave tracking, payroll workflows, and HR operations dashboard.
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

Portfolio/case studies include ParshVyapar, ParshLedger, Parsh HR, FreshMart, EasyMed, Anand Fashion, Bahubali Cabs, Kharka Mining, Jayesh Sir eLearning, and ParshWebCraft.

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

Business-type flows:
- Jewellery showroom: recommend a Premium Website or Ecommerce Website depending on catalog size. Important features: premium brand design, product catalog, WhatsApp enquiry, Google Maps, local SEO for jewellery showroom in Udaipur, trust sections, testimonials, offers, festive campaigns, Instagram/Meta ads, Google Search ads, product photoshoot, and optional ecommerce checkout.
- Restaurant/cafe: recommend QR menu, Google Business Profile, reels, local SEO, WhatsApp offers, table ordering, and food photoshoot.
- Clinic/doctor: recommend trust-focused website, appointment CTA, Google Maps, local SEO, FAQ, reviews, and lead forms.
- Coaching/institute: recommend course pages, lead forms, WhatsApp counselling, SEO blogs, landing pages, and Meta/Google ads.
- Retail/shop: recommend Business Website, catalog, WhatsApp enquiry, local SEO, offers, and social media content.
- Startup/SaaS: recommend Premium Website or SaaS discovery, landing page, dashboard planning, lead capture, and technical consultation.
`;

type HistoryMessage = {
  role?: string;
  content?: string;
};

function hasAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function lastUserMessages(history: HistoryMessage[] = []) {
  return history
    .filter((item) => item.role === "user")
    .map((item) => String(item.content || "").toLowerCase())
    .join(" ");
}

function isBusinessTypeAnswer(text: string) {
  return hasAny(text, [
    "jewellery",
    "jewelry",
    "jwellery",
    "showroom",
    "restaurant",
    "cafe",
    "hotel",
    "clinic",
    "doctor",
    "hospital",
    "coaching",
    "school",
    "institute",
    "gym",
    "fitness",
    "salon",
    "boutique",
    "fashion",
    "retail",
    "shop",
    "store",
    "startup",
    "saas",
    "real estate",
    "builder",
  ]);
}

function businessRecommendation(text: string) {
  if (hasAny(text, ["jewellery", "jewelry", "jwellery", "showroom"])) {
    return "Jewellery showroom ke liye best setup: Premium Website or Ecommerce Catalog Website.\n\nRecommended features:\n- Premium luxury design with trust-focused branding\n- Product catalog for rings, necklaces, bangles, bridal collections\n- WhatsApp enquiry button on every product\n- Google Maps + local SEO for jewellery showroom in Udaipur\n- Testimonials, certifications, offers and festive campaign sections\n- Instagram reels + Meta ads for new collections\n- Optional online payment/checkout if you want full ecommerce\n\nBest plan: Premium Website Rs 34,999+ if you want strong brand presence and catalog. If you want simple showroom website first, Business Website Rs 14,999 can work.\n\nAapka showroom me approx kitne products/categories hain? Aur online payment chahiye ya WhatsApp enquiry enough hai?";
  }

  if (hasAny(text, ["restaurant", "cafe", "hotel", "food"])) {
    return "Restaurant/cafe ke liye best setup: Website + QR Menu + local marketing.\n\nRecommended features:\n- QR menu with table/order flow\n- Google Maps and local SEO\n- Food photoshoot sections\n- WhatsApp offers and festival campaigns\n- Instagram reels strategy\n- Meta ads for local reach\n\nUsually Business Website Rs 14,999 + QR system/custom add-on best rahega. Aap dine-in restaurant ho ya takeaway/cloud kitchen?";
  }

  if (hasAny(text, ["clinic", "doctor", "hospital", "medical"])) {
    return "Clinic/doctor business ke liye trust-focused website best rahegi.\n\nRecommended features:\n- Doctor profile and services pages\n- Appointment CTA and WhatsApp/call button\n- Google Maps and local SEO\n- Patient FAQs and testimonials\n- Fast mobile design\n\nBest plan: Business Website Rs 14,999. Agar multiple doctors/departments hain toh Premium Website Rs 34,999+ better hai. Clinic kis specialty ka hai?";
  }

  if (hasAny(text, ["coaching", "school", "institute", "classes", "academy"])) {
    return "Coaching/institute ke liye lead-generation website best rahegi.\n\nRecommended features:\n- Course pages\n- Admission enquiry form\n- WhatsApp counselling CTA\n- Student results/testimonials\n- SEO blogs for course keywords\n- Meta/Google ads landing page\n\nBest plan: Business Website Rs 14,999 for start, Premium Rs 34,999+ if you need many course pages. Aap kis type ke courses offer karte ho?";
  }

  if (hasAny(text, ["gym", "fitness"])) {
    return "Gym/fitness brand ke liye website + social media reels combo strong rahega.\n\nRecommended features:\n- Membership plans\n- Trainer/profile sections\n- Transformation gallery\n- WhatsApp trial booking\n- Local SEO\n- Instagram reels and Meta ads\n\nBest plan: Business Website Rs 14,999 + reels/social media package. Gym Udaipur me kis area me hai?";
  }

  if (hasAny(text, ["salon", "boutique", "fashion", "retail", "shop", "store"])) {
    return "Retail/fashion/shop ke liye catalog-style website ya ecommerce best rahega.\n\nRecommended features:\n- Product/category catalog\n- WhatsApp enquiry\n- Offers and festive collections\n- Local SEO\n- Instagram content and Meta ads\n\nBest plan: Business Website Rs 14,999 for simple catalog, Premium/Ecommerce Rs 34,999+ for advanced product flow. Aap online order lena chahte ho ya enquiry only?";
  }

  if (hasAny(text, ["startup", "saas", "software", "app"])) {
    return "Startup/SaaS ke liye pehle clear product landing page + feature planning best rahega.\n\nRecommended options:\n- Premium landing website Rs 34,999+ for product validation\n- SaaS development Rs 1,20,000+ for dashboard, auth, database, payments and admin system\n\nAapko sirf landing page chahiye ya full SaaS app/dashboard build karna hai?";
  }

  return "Is business ke liye main website + SEO + WhatsApp lead flow recommend karunga. Simple start ke liye Business Website Rs 14,999 best hai; agar product catalog, automation ya payment chahiye toh Premium Rs 34,999+ better rahega.\n\nAap batao: website ka goal kya hai, calls/WhatsApp leads, product sales, booking, ya brand presence?";
}

export function getFallbackChatReply(
  message: string,
  history: HistoryMessage[] = []
) {
  const text = message.toLowerCase();
  const previousUserText = lastUserMessages(history);
  const conversationText = `${previousUserText} ${text}`;

  if (isBusinessTypeAnswer(text)) {
    return businessRecommendation(text);
  }

  if (text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("rate") || text.includes("budget") || text.includes("kitna") || text.includes("discount")) {
    if (isBusinessTypeAnswer(conversationText)) {
      return `${businessRecommendation(conversationText)}\n\nPricing note: Starter Rs 4,999, Business Rs 14,999, Premium Rs 34,999+, SaaS Rs 1,20,000+. Agar aap ready to start ho, Business/Premium plan me small scope-based adjustment possible hai after requirements check.`;
    }

    return "Pricing quick summary:\n- Starter Website: Rs 4,999\n- Business Website: Rs 14,999\n- Premium Website: Rs 34,999+\n- SaaS/custom platform: Rs 1,20,000+\n- Maintenance: around Rs 3,500/month\n\nNegotiation: Starter already minimum hai. Business plan me ready-to-start client ke liye small discount possible ho sakta hai. Premium me small discount ya bonus SEO/content section add ho sakta hai after scope check.\n\nAapka business type kya hai? Example: jewellery showroom, restaurant, clinic, coaching, ecommerce, etc.";
  }

  if (text.includes("portfolio") || text.includes("work") || text.includes("case")) {
    return "Relevant portfolio examples:\n- Anand Fashion: ecommerce/catalog style business\n- FreshMart: ecommerce flow\n- Bahubali Cabs: local service website\n- Him Cream Naturals: QR ordering system\n- ParshVyapar: billing and inventory SaaS\n- ParshLedger: accounting/ledger SaaS\n- Parsh HR: HR management system\n\nAapki industry batao, main closest portfolio reference suggest kar dunga.";
  }

  if (text.includes("digital") || text.includes("marketing") || text.includes("instagram") || text.includes("ads") || text.includes("seo") || text.includes("reels")) {
    if (isBusinessTypeAnswer(conversationText)) {
      return `${businessRecommendation(conversationText)}\n\nMarketing side me SEO + Instagram reels + Meta ads + Google Search ads ka combo strong rahega. Goal kya hai: store visits, WhatsApp enquiries, online orders, ya brand awareness?`;
    }

    return "Digital marketing me ParshWebCraft ye handle kar sakta hai:\n- Social media management\n- Instagram reels strategy\n- Content creation\n- SEO\n- Google Ads\n- Meta Ads\n- WhatsApp marketing\n- Bulk SMS\n- Branding and lead generation\n\nAapka business type aur goal batao: calls, store visits, WhatsApp enquiries, online sales, ya brand awareness?";
  }

  if (text.includes("website") || text.includes("web design") || text.includes("development")) {
    if (isBusinessTypeAnswer(conversationText)) {
      return businessRecommendation(conversationText);
    }

    return "ParshWebCraft builds business websites, landing pages, ecommerce websites, SaaS platforms, CRM systems, and SEO-ready local business websites in Udaipur.\n\nFor most businesses, Business Website Rs 14,999 is the best starting point because it includes 6-8 pages, premium UI/UX, WhatsApp/enquiry forms, local SEO foundation, and analytics.\n\nAapka business type kya hai? Main exact plan recommend kar dunga.";
  }

  if (hasAny(text, ["yes", "haan", "ha", "ok", "okay", "interested", "start", "ready"])) {
    return "Great. Final suggestion dene ke liye 4 details bhej do:\n1. Business name/type\n2. City/location\n3. Website goal: leads, sales, booking, catalog, or branding\n4. Phone number or email\n\nUske baad main plan, approx budget, and next step clear kar dunga.";
  }

  if (hasAny(text, ["hello", "hi", "hey", "hii", "namaste"])) {
    return "Hi! Main ParshWebCraft AI assistant hoon. Aap apna business type batao, jaise jewellery showroom, restaurant, clinic, coaching, ecommerce, ya SaaS. Main website/marketing plan aur pricing suggest kar dunga.";
  }

  return "Samjha. Thoda aur context de do so I can recommend correctly:\n- Business type kya hai?\n- Website chahiye ya digital marketing?\n- Goal kya hai: leads, sales, booking, catalog, branding?\n- Budget range approx?\n\nExample: \"jewellery showroom website with product catalog\".";
}

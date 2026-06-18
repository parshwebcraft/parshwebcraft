// ============================================================
// ParshWebCraft — RAG-Style Chatbot Knowledge Base
//
// Knowledge is split into TOPIC CHUNKS. The retrieveChunks()
// function picks only the relevant ones for each query,
// keeping the AI context focused and accurate.
// ============================================================

// ── CHUNK 1: Company Overview ────────────────────────────────
const CHUNK_OVERVIEW = `
COMPANY: ParshWebCraft
TYPE: Premium web design, web development, SaaS, ecommerce, SEO, digital marketing, branding, and automation agency.
LOCATION: Udaipur, Rajasthan, India.
CONTACT: WhatsApp +91-9521347419 | hello@parshwebcraft.in | parshwebcraft.in
FOUNDED BY: Gauransh Jaroli
TAGLINE: We build high-performance websites and SaaS products for businesses in Udaipur and across India — focused on SEO, speed, and real growth.
`.trim();

// ── CHUNK 2: Services ────────────────────────────────────────
const CHUNK_SERVICES = `
CORE SERVICES:

1. Website Design & Development (Udaipur & India)
   - Responsive business websites, landing pages, redesigns, UI/UX, SEO-ready pages
   - Ecommerce: product catalog, cart, checkout, payment gateway, mobile commerce
   - Custom CRM, dashboards, booking systems, restaurant QR menu systems

2. SaaS App Development
   - Custom SaaS apps, auth systems, dashboards, subscriptions, APIs
   - Starting at Rs 2,20,000 (timeline: 1 month minimum)

3. OWN SaaS PRODUCTS:
   - ParshLedger: Accounting & ledger SaaS for Indian businesses (party balances, payment tracking)
   - Parsh HR: HR & employee management (attendance, payroll, leave tracking)
   - ParshCare ERP: Live clinic ERP at care.parshwebcraft.in — patient records, appointments, billing, lab workflow
   - ParshvTrack: Live field workforce GPS tracking and location monitoring dashboard
   - Carbon AI: Voice calling AI agent and automated call analysis dashboard
   - ParshHire: Live Applicant Tracking System (ATS) & recruitment dashboard

4. Digital Marketing (SEPARATE from website — NOT included in website packages)
   - Social media management, Instagram reels, content creation
   - Google Ads, Meta Ads, WhatsApp marketing, bulk SMS
   - SEO, Google Business Profile, lead generation

5. SEO Services
   - Technical SEO, local SEO, metadata, blog strategy, internal links, page speed
   - Google visibility optimization

6. Maintenance & Support
   - Updates, backups, security, bug fixes, hosting/domain support
   - Starts at ~Rs 3,500/month
`.trim();

// ── CHUNK 3: Pricing ─────────────────────────────────────────
const CHUNK_PRICING = `
WEBSITE PRICING PLANS:

| Plan | Price | Pages | Delivery | Best For |
|------|-------|-------|----------|----------|
| Starter Website | Rs 17,999 | 1 page | 3-5 days | Simple presence, single service |
| Business Website | Rs 34,999 | 6-8 pages | 7-10 days | Most businesses — includes WhatsApp form, local SEO, analytics |
| Premium Website | Rs 59,999 | 10-15 pages | 15-20 days | Custom landing flows, booking, automation |
| Ecommerce Store | Rs 1,20,000 | Custom | 15-25 days | Full headless/custom online store with payment |
| SaaS App | Rs 2,20,000 | Custom | 1 month+ | Full custom SaaS products, dashboards |
| Enterprise | Custom | Custom | Custom | Complex systems |
| Monthly Maintenance | ~Rs 3,500/month | — | Ongoing | Updates, backups, support |

WHAT IS INCLUDED IN WEBSITE PLANS:
- Professional website design and development
- Mobile-friendly responsive design
- WhatsApp/enquiry forms
- Basic local SEO foundation
- Google Analytics setup
- Google Maps integration

WHAT IS NOT INCLUDED IN WEBSITE PLANS (separate service, separate charges):
- Instagram reels or video creation
- Social media posting or management
- Product photoshoots or photography
- Google Ads or Meta Ads (ad spend is always separate)
- Ongoing content writing
`.trim();

// ── CHUNK 4: Negotiation & Lead Flow ─────────────────────────
const CHUNK_NEGOTIATION = `
NEGOTIATION RULES (follow strictly):

- Starter (Rs 17,999): up to 5% discount if client ready to start now.
- Business (Rs 34,999): up to 7% discount if client confirms they are ready to start NOW.
- Premium (Rs 59,999): up to 10% discount OR add one bonus.
- Ecommerce (Rs 1,20,000) / SaaS (Rs 2,20,000): require scoping. Ask for requirements before detailing discounts.

LEAD COLLECTION (collect when user seems ready):
Ask for: name, business type, city/location, phone/WhatsApp, rough budget, timeline.
Say: "Ab main aapke liye exact plan aur final quote ready kar sakta hoon. Bas 4 details chahiye..."

IMPORTANT — Never:
- Promise a legal contract is confirmed in chat
- Say a final price is locked without team verification
- Say reels/ads are included in any website plan
- Make statements about reels/content marketing being included
`.trim();

// ── CHUNK 5: Portfolio & Case Studies ────────────────────────
const CHUNK_PORTFOLIO = `
PORTFOLIO / CASE STUDIES:

| Project | Type | Highlights |
|---------|------|-----------|
| ParshvTrack | SaaS — GPS Tracker | Field workforce tracking, dispatcher route scheduling |
| Carbon AI | AI SaaS | AI voice calling agent, call transcription, sentiment analyst |
| ParshCare ERP | Healthcare SaaS | Patient records, billing, appointment scheduling |
| ParshHire | SaaS — Recruitment | Applicant Tracking System (ATS), job board, application flow |
| ParshVyapar | SaaS — Inventory | Billing, stock management, GST invoicing |
| Bahubali Hills Taxi Service | Local business website | Professional taxi booking site, online presence |
| Mahapragya Vihar | Community platform | Jain community portal, modern design |
| ATDC Udaipur | Clinic ERP | Streamlined operations, day-to-day management |
| Him Cream Naturals | QR ordering system | Simplified customer ordering experience |
| ParshLedger | SaaS — Accounting | Party balances, payment tracking, finance dashboard |
| Parsh HR | SaaS — HR System | Attendance, payroll, employee management |
| FreshMart | Ecommerce | Online grocery/product store |
| EasyMed | Medical | Healthcare website |
| Anand Fashion | Ecommerce/catalog | Fashion store catalog |
| Kharka Mining | Industrial | Mining company website |
| Jayesh Sir eLearning | EdTech | Online coaching platform |

Relevant portfolios are shown at: parshwebcraft.in/portfolio
`.trim();

// ── CHUNK 6: Business-Type Recommendations ───────────────────
const CHUNK_BUSINESS_FLOWS = `
RECOMMENDATIONS BY BUSINESS TYPE:

JEWELLERY SHOWROOM:
Best: Premium Website (Rs 59,999) or Ecommerce Store (Rs 1,20,000)
Key features: luxury brand design, product catalog, WhatsApp enquiry per product, Google Maps, local SEO "jewellery showroom Udaipur", testimonials, offers, festive campaigns
Add-ons: Instagram reels, Meta Ads, product photoshoot (separate charges)
Ask: "Catalog me kitne products/categories hain? Online payment chahiye ya WhatsApp enquiry enough hai?"

RESTAURANT / CAFE / HOTEL:
Best: Business Website (Rs 34,999) + QR menu system
Key features: QR menu with table ordering, Google Maps, local SEO, food photoshoot sections, WhatsApp offers
Add-ons: Reels strategy, Meta local ads (separate)
Ask: "Dine-in hai ya cloud kitchen/takeaway?"

CLINIC / DOCTOR / HOSPITAL:
Best: Business Website (Rs 34,999); Premium (Rs 59,999) if multiple departments
Key features: doctor profiles, appointment CTA, WhatsApp/call button, Google Maps, local SEO, patient FAQs, testimonials
Ask: "Clinic kis specialty ka hai? Kitne doctors hain?"

COACHING / INSTITUTE / SCHOOL:
Best: Business (Rs 34,999) to start; Premium (Rs 59,999) for many course pages
Key features: course pages, admission form, WhatsApp counselling CTA, results/testimonials, SEO blogs
Add-ons: Meta/Google ads landing page (separate)
Ask: "Kaunse courses offer karte ho? Students local ya online?"

GYM / FITNESS:
Best: Business Website (Rs 34,999) + social media combo
Key features: membership plans, trainer profiles, transformation gallery, WhatsApp trial booking, local SEO
Add-ons: Reels and Meta ads (separate)

RETAIL / FASHION / SALON / BOUTIQUE:
Best: Business (Rs 34,999) for catalog; Ecommerce Store (Rs 1,20,000) for online orders
Key features: product catalog, WhatsApp enquiry, offers, local SEO, Instagram content
Ask: "Online order lena chahte ho ya WhatsApp enquiry only?"

STARTUP / SAAS / SOFTWARE:
Best: Premium Website (Rs 59,999) for validation; SaaS App (Rs 2,20,000) for full app
Ask: "Sirf landing page chahiye ya full dashboard/app build karna hai?"

REAL ESTATE / BUILDER:
Best: Premium Website (Rs 59,999)
Key features: property listings, virtual tours, lead forms, WhatsApp enquiry, local SEO "flats in Udaipur"

ECOMMERCE / ONLINE STORE:
Best: Ecommerce Store (Rs 1,20,000)
Key features: product catalog, cart, Razorpay/PhonePe payment, order tracking, mobile commerce
`.trim();

// ── CHUNK 7: Package Boundary Rules (CRITICAL) ───────────────
const CHUNK_BOUNDARIES = `
CRITICAL PACKAGE BOUNDARY RULES — NEVER VIOLATE:

1. Rs 34,999 Business Website plan DOES NOT include:
   - Instagram reels ❌
   - Social media posts ❌
   - Video creation or editing ❌
   - Photography or product photoshoot ❌
   - Meta Ads or Google Ads management ❌
   - Ad spend (always paid by client directly) ❌

2. If user asks "kya reels included hain Rs 34,999 me?" — Answer:
   "Nahi, reels included nahi hain. Rs 34,999 sirf website ka kaam cover karta hai (6-8 pages, WhatsApp form, local SEO, analytics). Reels aur social media content ek alag digital marketing service hai jiske alag charges hote hain."

3. Never say ad spend is included in any package.
4. Reels can be SUGGESTED as an add-on but NEVER said to be included.
`.trim();

// ============================================================
// RAG RETRIEVAL — picks relevant chunks based on query keywords
// ============================================================

type KnowledgeChunk = {
  name: string;
  content: string;
  keywords: string[];
};

const ALL_CHUNKS: KnowledgeChunk[] = [
  {
    name: "OVERVIEW",
    content: CHUNK_OVERVIEW,
    keywords: ["parshwebcraft", "company", "about", "who", "kaun", "udaipur", "contact", "location", "gauransh"],
  },
  {
    name: "SERVICES",
    content: CHUNK_SERVICES,
    keywords: ["service", "services", "website", "design", "development", "saas", "ecommerce", "seo", "marketing", "maintenance", "what", "kya", "offer", "karte"],
  },
  {
    name: "PRICING",
    content: CHUNK_PRICING,
    keywords: ["price", "pricing", "cost", "rate", "kitna", "budget", "plan", "starter", "business", "premium", "17999", "34999", "59999", "120000", "220000", "package", "include", "kya milega"],
  },
  {
    name: "NEGOTIATION",
    content: CHUNK_NEGOTIATION,
    keywords: ["discount", "negotiate", "cheap", "less", "reduce", "kam", "ready", "start", "contact", "number", "phone", "email", "quote", "final"],
  },
  {
    name: "PORTFOLIO",
    content: CHUNK_PORTFOLIO,
    keywords: ["portfolio", "work", "project", "case", "example", "client", "previous", "dikhao", "show", "bahubali", "freshmart", "anand", "parshledger", "parsh hr", "parsh care", "parshvtrack", "carbon", "carbon ai", "parshhire"],
  },
  {
    name: "BUSINESS_FLOWS",
    content: CHUNK_BUSINESS_FLOWS,
    keywords: ["jewellery", "jewelry", "showroom", "restaurant", "cafe", "hotel", "clinic", "doctor", "hospital", "coaching", "school", "institute", "gym", "fitness", "salon", "boutique", "fashion", "retail", "shop", "startup", "saas", "real estate", "builder", "ecommerce", "store", "business"],
  },
  {
    name: "BOUNDARIES",
    content: CHUNK_BOUNDARIES,
    keywords: ["reel", "reels", "video", "instagram", "social media", "photoshoot", "photo shoot", "ad spend", "included", "include", "milega", "isme", "sath", "saath"],
  },
];

/**
 * Retrieves the most relevant knowledge chunks for a given query.
 * Always includes OVERVIEW. Picks up to 3 additional topic chunks.
 * This is the "R" (Retrieval) in RAG.
 */
export function retrieveChunks(query: string, history: { role?: string; content?: string }[] = []): string {
  const allText = [
    query,
    ...history.slice(-4).map((h) => String(h.content || "")),
  ]
    .join(" ")
    .toLowerCase();

  // Score each chunk by keyword hits
  const scored = ALL_CHUNKS.map((chunk) => ({
    chunk,
    score: chunk.keywords.filter((kw) => allText.includes(kw)).length,
  }));

  // Always include OVERVIEW + top 3 scoring chunks
  const overviewChunk = ALL_CHUNKS.find((c) => c.name === "OVERVIEW")!;
  const topChunks = scored
    .filter((s) => s.chunk.name !== "OVERVIEW" && s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.chunk);

  // If nothing matched, include SERVICES + PRICING as defaults
  if (topChunks.length === 0) {
    const defaults = ALL_CHUNKS.filter((c) =>
      ["SERVICES", "PRICING", "BUSINESS_FLOWS"].includes(c.name)
    );
    return [overviewChunk, ...defaults].map((c) => c.content).join("\n\n---\n\n");
  }

  return [overviewChunk, ...topChunks].map((c) => c.content).join("\n\n---\n\n");
}

/** Full knowledge base (used as fallback system prompt context) */
export const chatbotKnowledge = [CHUNK_OVERVIEW, CHUNK_SERVICES, CHUNK_PRICING, CHUNK_NEGOTIATION, CHUNK_PORTFOLIO, CHUNK_BUSINESS_FLOWS, CHUNK_BOUNDARIES].join("\n\n---\n\n");

// ── Keyword fallback (last resort when no AI key is set) ─────
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

export function getFallbackChatReply(message: string, history: HistoryMessage[] = []) {
  const text = message.toLowerCase();
  const prev = lastUserMessages(history);
  const all = `${prev} ${text}`;

  // Boundary rule: reels/content included question
  if (
    hasAny(text, ["reel", "reels", "video", "content", "custom", "shoot", "photoshoot", "instagram post"]) &&
    hasAny(text, ["include", "included", "isme", "sath", "saath", "milega", "34999", "package"])
  ) {
    return "Nahi, Rs 34,999 Business Website plan me reels included nahi hain.\n\nRs 34,999 me sirf website ka kaam hota hai:\n- 6-8 website pages\n- Premium UI/UX\n- WhatsApp/enquiry form\n- Local SEO foundation\n- Analytics setup\n\nInstagram reels, social media content, photoshoot — ye sab digital marketing add-ons hain jiske alag charges hote hain. Main inhe alag recommend kar sakta hoon.";
  }

  if (hasAny(text, ["price", "pricing", "cost", "rate", "kitna", "budget", "discount", "plan"])) {
    return "💰 Pricing Plans:\n\n• Starter Website — Rs 17,999 (1 page, 3-5 days)\n• Business Website — Rs 34,999 (6-8 pages, 7-10 days) ⭐ Most popular\n• Premium Website — Rs 59,999 (10-15 pages, 15-20 days)\n• Ecommerce Store — Rs 1,20,000 (15-25 days)\n• SaaS App — Rs 2,20,000 (1 month+)\n• Maintenance — ~Rs 3,500/month\n\nBusiness plan me discount possible hai agar aap ready to start hain. Aapka business type kya hai?";
  }

  if (hasAny(text, ["portfolio", "work", "case", "dikhao", "example"])) {
    return "🏆 Recent projects:\n\n• ParshvTrack — Field workforce GPS tracking SaaS\n• Carbon AI — Voice AI calling & analyst agent\n• ParshCare ERP — Clinic & diagnostic ERP\n• ParshHire — ATS & recruitment platform\n• ParshVyapar — Billing & inventory SaaS\n• Anand Fashion — Ecommerce catalog\n• Him Cream Naturals — QR ordering system\n\nAapki industry batao, main closest example suggest karunga.";
  }

  if (hasAny(text, ["hello", "hi", "hey", "namaste", "hii"])) {
    return "Namaste! 🙏 Main ParshWebCraft AI assistant hoon.\n\nAap apna business type batao — jewellery showroom, restaurant, clinic, coaching, ecommerce, ya SaaS — main website plan aur pricing suggest karunga.";
  }

  return "Aapka question samajh gaya! Thoda aur batao:\n\n1. Business type kya hai? (jewellery, restaurant, clinic, coaching, etc.)\n2. Website chahiye ya digital marketing?\n3. Goal kya hai: leads, sales, booking, ya brand presence?\n\nMain exact plan aur pricing suggest karunga. 😊";
}

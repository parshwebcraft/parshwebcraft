import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_JOBS = [
  {
    id: "pwc-job-dev-1",
    job_id: "PWC-DEV-01",
    title: "Frontend Engineer (Next.js & React)",
    department: "Development",
    location: "Udaipur, Rajasthan / Remote",
    type: "Full-time",
    experience: "1-3 Years",
    salary_range: "₹4,00,000 - ₹8,00,000 / Year",
    description: "We are looking for a passionate Frontend Engineer skilled in React, Next.js, Tailwind CSS, and TypeScript. You will build lightning-fast web applications, optimize Core Web Vitals (LCP, INP), and craft responsive dark-mode interfaces.",
    requirements: [
      "Proficiency in HTML, CSS, JavaScript, TypeScript, and React/Next.js (App Router).",
      "Experience with Framer Motion, Tailwind CSS, and responsive layouts.",
      "Familiarity with RESTful APIs, Supabase database, and Git version control."
    ],
    benefits: [
      "Competitive salary package.",
      "Flexible remote / hybrid work culture.",
      "Monthly learning stipend and hardware allowance."
    ]
  },
  {
    id: "pwc-job-dsn-1",
    job_id: "PWC-DSN-01",
    title: "UI/UX Designer",
    department: "Design",
    location: "Udaipur, Rajasthan / Hybrid",
    type: "Full-time",
    experience: "2+ Years",
    salary_range: "₹3,00,000 - ₹6,00,000 / Year",
    description: "Join our team to design premium websites, branding systems, and custom SaaS dashboards. You will work closely with development teams to craft visual assets and intuitive candidate/user journeys.",
    requirements: [
      "Strong portfolio showcasing minimalist, clean, and dark-theme web/app designs.",
      "Proficiency in Figma, Adobe Illustrator, and prototyping workflows.",
      "Understanding of grid systems, visual hierarchies, and responsive typography."
    ],
    benefits: [
      "Creative design freedom.",
      "Collaborative workspace environment.",
      "Performance-based bonuses."
    ]
  },
  {
    id: "pwc-job-mkt-1",
    job_id: "PWC-MKT-01",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Udaipur, Rajasthan",
    type: "Full-time",
    experience: "1-2 Years",
    salary_range: "₹2,50,000 - ₹4,50,000 / Year",
    description: "We are seeking a Digital Marketing Specialist to coordinate client SEO campaigns, execute Instagram Reels strategies, create content calendars, and handle targeted Google/Meta ad accounts.",
    requirements: [
      "Experience with Google Analytics, search console, and SEO auditing tools.",
      "Familiarity with copywriting, social media strategy, and video edit hooks.",
      "Ability to calculate CPA (Cost Per Acquisition) and return on ad spend."
    ],
    benefits: [
      "Dynamic hands-on marketing campaigns.",
      "Professional growth opportunity.",
      "Performance incentives."
    ]
  }
];

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(DEFAULT_JOBS);
  }

  try {
    const { data, error } = await supabase
      .from("careers_jobs")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return NextResponse.json(DEFAULT_JOBS);
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[api/careers/jobs] Fetch error, returning fallback:", err);
    return NextResponse.json(DEFAULT_JOBS);
  }
}

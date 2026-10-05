import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_JOBS = [
  {
    id: "pwc-job-smm-1",
    job_id: "PWC-SMM-01",
    title: "Social Media Manager (Reels & Social Media)",
    department: "Marketing",
    location: "Ahmedabad, Gujarat (On-site)",
    type: "Full-time • Immediate Hiring",
    experience: "0-2 Years",
    description: "ParshWebCraft is expanding our team in Ahmedabad, Gujarat! We are looking for an on-site Social Media Manager to create high-converting Reels, Shorts, brand promotional videos, and engage audience growth across social platforms.",
    requirements: [
      "Create high-converting Reels, Shorts, and brand promotional videos.",
      "Experience with Premiere Pro, After Effects, CapCut, DaVinci Resolve, or similar tools.",
      "Strong understanding of social media trends, content planning, hook creation, and audience engagement.",
      "Ability to work on-site in our Ahmedabad, Gujarat office."
    ],
    benefits: [
      "Immediate hiring for on-site role in Ahmedabad.",
      "Competitive salary and performance incentives.",
      "Creative freedom working on diverse brand & client campaigns."
    ]
  },
  {
    id: "pwc-job-gdsn-1",
    job_id: "PWC-GDSN-01",
    title: "Graphic Designer (Brand & Social Media)",
    department: "Design",
    location: "Ahmedabad, Gujarat (On-site)",
    type: "Full-time • Immediate Hiring",
    experience: "0-2 Years",
    description: "We are seeking an on-site Graphic Designer in Ahmedabad, Gujarat to design striking social media creatives, brand identity packages, marketing assets, ad carousels, and client visuals.",
    requirements: [
      "Design social media creatives, branding materials, marketing assets, and client visuals.",
      "Knowledge of Canva, Photoshop, Illustrator, Figma, or similar design tools.",
      "Solid understanding of layout design, color theory, typography, and visual hierarchy.",
      "Ability to work on-site in our Ahmedabad, Gujarat office."
    ],
    benefits: [
      "Immediate hiring for on-site design role in Ahmedabad.",
      "Collaborative and fast-paced agency culture.",
      "Opportunity to shape brand visual identities across multiple industries."
    ]
  },
  {
    id: "pwc-job-dev-1",
    job_id: "PWC-DEV-01",
    title: "Frontend Engineer (Next.js & React)",
    department: "Development",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Full-time",
    experience: "1-3 Years",
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
    location: "Ahmedabad, Gujarat / Hybrid",
    type: "Full-time",
    experience: "2+ Years",
    description: "Join our team to design premium websites, branding systems, and custom SaaS dashboards. You will work closely with development teams to craft visual interfaces and intuitive candidate/user journeys.",
    requirements: [
      "Strong portfolio showcasing minimalist, clean, and dark-theme web/app designs.",
      "Proficiency in Figma, Adobe Illustrator, and prototyping workflows.",
      "Understanding of grid systems, visual hierarchies, and responsive typography."
    ],
    benefits: [
      "Creative design freedom.",
      "Collaborative workspace environment in Ahmedabad.",
      "Performance-based bonuses."
    ]
  },
  {
    id: "pwc-job-mkt-1",
    job_id: "PWC-MKT-01",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Ahmedabad, Gujarat (On-site)",
    type: "Full-time",
    experience: "1-2 Years",
    description: "We are seeking a Digital Marketing Specialist in Ahmedabad to coordinate client SEO campaigns, execute Instagram Reels strategies, create content calendars, and handle targeted Google/Meta ad accounts.",
    requirements: [
      "Experience with Google Analytics, search console, and SEO auditing tools.",
      "Familiarity with copywriting, social media strategy, and video edit hooks.",
      "Ability to calculate CPA (Cost Per Acquisition) and return on ad spend."
    ],
    benefits: [
      "Dynamic hands-on marketing campaigns.",
      "Professional growth opportunity in Ahmedabad.",
      "Performance incentives."
    ]
  },
  {
    id: "pwc-job-app-1",
    job_id: "PWC-APP-01",
    title: "App Developer (Flutter & React Native)",
    department: "Development",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Full-time",
    experience: "2+ Years",
    description: "We are seeking a skilled Mobile App Developer with 2+ years of experience in Flutter and React Native. You will build and deploy premium cross-platform iOS and Android applications, ensuring fluid performance, native API integrations, and pixel-perfect UI execution.",
    requirements: [
      "2+ years of professional mobile development experience with Flutter or React Native.",
      "Strong understanding of native mobile capabilities, push notifications, and state management.",
      "Experience deploying and managing production apps in Apple App Store and Google Play Store."
    ],
    benefits: [
      "Modern development environment.",
      "Remote and hybrid workspace flexibility.",
      "Hardware allowance and certification sponsorship."
    ]
  },
  {
    id: "pwc-job-ops-1",
    job_id: "PWC-OPS-01",
    title: "AWS DevOps Engineer",
    department: "Development",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Full-time",
    experience: "2+ Years",
    description: "We are looking for an AWS DevOps Engineer with 2+ years of experience to automate deployment pipelines, maintain server reliability, and optimize cloud infrastructure. You will manage continuous integration, security policies, and performance monitoring.",
    requirements: [
      "2+ years of DevOps experience working with AWS Cloud Services (EC2, S3, RDS, ECS, Lambda).",
      "Strong expertise in CI/CD pipeline automation (GitHub Actions, Vercel, Docker).",
      "Knowledge of Infrastructure as Code (Terraform), server security hardening, and database backups."
    ],
    benefits: [
      "Highly scalable product environments.",
      "Training and AWS certification sponsorship.",
      "Flexible work hours."
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

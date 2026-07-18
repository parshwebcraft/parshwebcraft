-- ============================================================
-- ParshWebCraft — Careers & Job Applicant Tracking Schema
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Job Listings Table
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.careers_jobs (
  id            uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id        text          UNIQUE NOT NULL, -- e.g., 'PWC-DEV-01'
  title         text          NOT NULL,
  department    text          NOT NULL, -- e.g., 'Development', 'Design', 'Marketing'
  location      text          NOT NULL, -- e.g., 'Udaipur, Rajasthan / Remote'
  type          text          NOT NULL, -- e.g., 'Full-time', 'Internship'
  experience    text          NOT NULL, -- e.g., '1-3 Years'
  salary_range  text,          -- e.g., '₹4,00,000 - ₹8,00,000 / Year'
  description   text          NOT NULL,
  requirements  text[]        NOT NULL DEFAULT '{}',
  benefits      text[]        NOT NULL DEFAULT '{}',
  is_active     boolean       NOT NULL DEFAULT true,
  created_at    timestamptz   NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.careers_jobs ENABLE ROW LEVEL SECURITY;

-- Read Access: Allow anyone (even anonymous visitors) to view active jobs
CREATE POLICY "Allow public read of active jobs" ON public.careers_jobs
  FOR SELECT
  USING (is_active = true);

-- Write Access: Service role only (for admins managing jobs)
CREATE POLICY "service_role_only_write_jobs" ON public.careers_jobs
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);


-- 2. Job Applications Table
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.careers_applications (
  id              uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid          REFERENCES public.careers_jobs(id) ON DELETE CASCADE,
  user_id         uuid          REFERENCES auth.users(id) ON DELETE SET NULL, -- candidate user ID
  candidate_name  text          NOT NULL,
  candidate_email text          NOT NULL,
  candidate_phone text          NOT NULL,
  portfolio_url   text,
  linkedin_url    text,
  github_url      text,
  message         text,
  resume_url      text          NOT NULL, -- URL to resume in storage bucket
  status          text          NOT NULL DEFAULT 'new', -- e.g., 'new', 'reviewing', 'interview', 'rejected', 'hired'
  created_at      timestamptz   NOT NULL DEFAULT now(),
  updated_at      timestamptz   NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.careers_applications ENABLE ROW LEVEL SECURITY;

-- Candidates can view their own applications
CREATE POLICY "Candidates can select own applications" ON public.careers_applications
  FOR SELECT
  USING (auth.uid() = user_id);

-- Candidates can submit applications
CREATE POLICY "Candidates can insert own applications" ON public.careers_applications
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Service role key has full access (for admins to view/manage applications)
CREATE POLICY "service_role_only_admin_applications" ON public.careers_applications
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);


-- 3. Seed Default Active Job Roles
-- ─────────────────────────────────────────────────────────────
INSERT INTO public.careers_jobs (job_id, title, department, location, type, experience, salary_range, description, requirements, benefits)
VALUES
  (
    'PWC-DEV-01',
    'Frontend Engineer (Next.js & React)',
    'Development',
    'Udaipur, Rajasthan / Remote',
    'Full-time',
    '1-3 Years',
    '₹4,00,000 - ₹8,00,000 / Year',
    'We are looking for a passionate Frontend Engineer skilled in React, Next.js, Tailwind CSS, and TypeScript. You will build lightning-fast web applications, optimize Core Web Vitals (LCP, INP), and craft responsive dark-mode interfaces.',
    ARRAY['Proficiency in HTML, CSS, JavaScript, TypeScript, and React/Next.js (App Router).', 'Experience with Framer Motion, Tailwind CSS, and responsive layouts.', 'Familiarity with RESTful APIs, Supabase database, and Git version control.'],
    ARRAY['Competitive salary package.', 'Flexible remote / hybrid work culture.', 'Monthly learning stipend and hardware allowance.']
  ),
  (
    'PWC-DSN-01',
    'UI/UX Designer',
    'Design',
    'Udaipur, Rajasthan / Hybrid',
    'Full-time',
    '2+ Years',
    '₹3,00,000 - ₹6,00,000 / Year',
    'Join our team to design premium websites, branding systems, and custom SaaS dashboards. You will work closely with development teams to craft visual assets and intuitive candidate/user journeys.',
    ARRAY['Strong portfolio showcasing minimalist, clean, and dark-theme web/app designs.', 'Proficiency in Figma, Adobe Illustrator, and prototyping workflows.', 'Understanding of grid systems, visual hierarchies, and responsive typography.'],
    ARRAY['Creative design freedom.', 'Collaborative workspace environment.', 'Performance-based bonuses.']
  ),
  (
    'PWC-MKT-01',
    'Digital Marketing Specialist',
    'Marketing',
    'Udaipur, Rajasthan',
    'Full-time',
    '1-2 Years',
    '₹2,50,000 - ₹4,50,000 / Year',
    'We are seeking a Digital Marketing Specialist to coordinate client SEO campaigns, execute Instagram Reels strategies, create content calendars, and handle targeted Google/Meta ad accounts.',
    ARRAY['Experience with Google Analytics, search console, and SEO auditing tools.', 'Familiarity with copywriting, social media strategy, and video edit hooks.', 'Ability to calculate CPA (Cost Per Acquisition) and return on ad spend.'],
    ARRAY['Dynamic hands-on marketing campaigns.', 'Professional growth opportunity.', 'Performance incentives.']
  )
ON CONFLICT (job_id) DO NOTHING;

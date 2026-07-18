-- ============================================================
-- ParshWebCraft — Supabase Database Security Hardening
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- 1. Enable Row-Level Security (RLS) on All Active Tables
-- ─────────────────────────────────────────────────────────────

ALTER TABLE IF EXISTS public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ai_chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ai_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.contact_rate_limit ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.newsletter ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.newsletter_rate_limit ENABLE ROW LEVEL SECURITY;


-- ─────────────────────────────────────────────────────────────
-- 2. Apply Restrictive Policies to Block Direct Public API Access
-- ─────────────────────────────────────────────────────────────
-- This blocks all direct read, insert, update, and delete calls using the anon key.
-- Server-side API routes and page requests use the SUPABASE_SERVICE_ROLE_KEY,
-- which bypasses RLS and continues to function without issues.

-- policy for: leads
DROP POLICY IF EXISTS "service_role_only" ON public.leads;
CREATE POLICY "service_role_only" ON public.leads
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: ai_chat_sessions
DROP POLICY IF EXISTS "service_role_only" ON public.ai_chat_sessions;
CREATE POLICY "service_role_only" ON public.ai_chat_sessions
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: ai_chat_messages
DROP POLICY IF EXISTS "service_role_only" ON public.ai_chat_messages;
CREATE POLICY "service_role_only" ON public.ai_chat_messages
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: contact_rate_limit
DROP POLICY IF EXISTS "service_role_only" ON public.contact_rate_limit;
CREATE POLICY "service_role_only" ON public.contact_rate_limit
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: newsletter
DROP POLICY IF EXISTS "service_role_only" ON public.newsletter;
CREATE POLICY "service_role_only" ON public.newsletter
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: settings
DROP POLICY IF EXISTS "service_role_only" ON public.settings;
CREATE POLICY "service_role_only" ON public.settings
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: visits
DROP POLICY IF EXISTS "service_role_only" ON public.visits;
CREATE POLICY "service_role_only" ON public.visits
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: admin_activity_log
DROP POLICY IF EXISTS "service_role_only" ON public.admin_activity_log;
CREATE POLICY "service_role_only" ON public.admin_activity_log
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);

-- policy for: newsletter_rate_limit
DROP POLICY IF EXISTS "service_role_only" ON public.newsletter_rate_limit;
CREATE POLICY "service_role_only" ON public.newsletter_rate_limit
  AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);


-- ─────────────────────────────────────────────────────────────
-- 3. Verify Table Security Status
-- ─────────────────────────────────────────────────────────────
SELECT 
  tablename AS table_name, 
  rowsecurity AS rls_enabled 
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN (
    'leads',
    'ai_chat_sessions',
    'ai_chat_messages',
    'contact_rate_limit',
    'newsletter',
    'settings',
    'visits',
    'admin_activity_log',
    'newsletter_rate_limit'
  )
ORDER BY tablename;

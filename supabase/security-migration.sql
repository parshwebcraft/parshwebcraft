-- ============================================================
-- ParshWebCraft — Security Hardening SQL Migration
-- Run this ONCE in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Admin Activity Log Table
-- ─────────────────────────────────────────────────────────────
-- Tracks: login_success, login_failed, logout, settings_changed,
--         lead_status_changed, lead_exported, chat_session_deleted

CREATE TABLE IF NOT EXISTS admin_activity_log (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_email text,
  action      text        NOT NULL,
  details     jsonb       DEFAULT '{}',
  ip          text,
  created_at  timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- Block ALL access except via service role key (used by server-side code only)
-- This means no Supabase anon or authenticated user can read/write this table directly
CREATE POLICY "service_role_only" ON admin_activity_log
  AS RESTRICTIVE
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- Index for fast chronological queries
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at
  ON admin_activity_log (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_activity_log_action
  ON admin_activity_log (action);


-- 2. Newsletter Rate Limit Table
-- ─────────────────────────────────────────────────────────────
-- Tracks newsletter subscriptions by IP to enforce 3/hour limit

CREATE TABLE IF NOT EXISTS newsletter_rate_limit (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  ip         text        NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_rate_limit ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_only" ON newsletter_rate_limit
  AS RESTRICTIVE
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- Auto-delete records older than 2 hours (keeps table lean)
-- Note: This requires pg_cron extension. If not available, run manual cleanup:
-- DELETE FROM newsletter_rate_limit WHERE created_at < now() - interval '2 hours';
-- Alternatively, set up a Supabase Edge Function cron job for cleanup.

CREATE INDEX IF NOT EXISTS idx_newsletter_rl_ip_time
  ON newsletter_rate_limit (ip, created_at DESC);


-- 3. Verify tables were created correctly
-- ─────────────────────────────────────────────────────────────
SELECT tablename AS table_name, rowsecurity AS rls_enabled
FROM pg_tables
WHERE tablename IN ('admin_activity_log', 'newsletter_rate_limit')
  AND schemaname = 'public';

-- Expected output:
-- admin_activity_log    | true
-- newsletter_rate_limit | true

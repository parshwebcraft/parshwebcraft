import { createClient } from "@supabase/supabase-js";

/**
 * logAdminActivity()
 *
 * Writes an admin action to the admin_activity_log table.
 * Fails silently — never blocks the calling operation.
 *
 * Actions to use:
 *   login_success | login_failed | logout
 *   settings_changed | lead_status_changed | lead_exported
 *   chat_session_deleted
 *
 * Prerequisites — run this SQL in Supabase SQL Editor once:
 * ─────────────────────────────────────────────────────────
 *   CREATE TABLE IF NOT EXISTS admin_activity_log (
 *     id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
 *     admin_email text,
 *     action      text        NOT NULL,
 *     details     jsonb       DEFAULT '{}',
 *     ip          text,
 *     created_at  timestamptz DEFAULT now()
 *   );
 *   ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "service_role_only" ON admin_activity_log
 *     AS RESTRICTIVE FOR ALL USING (false) WITH CHECK (false);
 * ─────────────────────────────────────────────────────────
 *
 * @param {object} params
 * @param {string} params.action     - Action identifier
 * @param {string} [params.adminEmail] - Admin email
 * @param {object} [params.details]  - Extra context (JSON)
 * @param {string} [params.ip]       - IP address
 */
export async function logAdminActivity({
  action,
  adminEmail = "unknown",
  details = {},
  ip = "unknown",
}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return; // Silently skip if not configured

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false },
    });

    await supabase.from("admin_activity_log").insert([
      {
        action,
        admin_email: adminEmail,
        details,
        ip,
      },
    ]);
  } catch (err) {
    // Activity logging must NEVER break the main operation
    console.error("[logAdminActivity] Failed to log:", err?.message ?? err);
  }
}

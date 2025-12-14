"use client";

import { useEffect, useState } from "react";

type Settings = {
  admin_name: string;
  admin_email: string;
  admin_phone: string | null;
  notify_new_lead: boolean;
  notify_newsletter: boolean;
  maintenance_mode: boolean;
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data);
    }
    loadSettings();
  }, []);

  async function updateSettings(updated: Partial<Settings>) {
  try {
    setSaving(true);

    const res = await fetch("/api/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (!res.ok) {
      console.error("Settings update failed");
      return;
    }

    const data = await res.json();
    setSettings(data);
  } catch (err) {
    console.error("Settings error:", err);
  } finally {
    setSaving(false);
  }
}


  if (!settings) {
    return <div className="p-6">Loading settings…</div>;
  }

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-semibold mb-6">Settings</h1>

      {/* Admin Info */}
      <div className="mb-8">
        <h2 className="font-medium mb-3">Admin Info</h2>

        <input
          value={settings.admin_name}
          onChange={(e) =>
            updateSettings({ admin_name: e.target.value })
          }
          className="w-full mb-3 p-2 rounded bg-black/30 border border-white/10"
          placeholder="Admin name"
        />

        <input
          value={settings.admin_email}
          onChange={(e) =>
            updateSettings({ admin_email: e.target.value })
          }
          className="w-full mb-3 p-2 rounded bg-black/30 border border-white/10"
          placeholder="Admin email"
        />

        <input
          value={settings.admin_phone || ""}
          onChange={(e) =>
            updateSettings({ admin_phone: e.target.value })
          }
          className="w-full p-2 rounded bg-black/30 border border-white/10"
          placeholder="Admin phone (optional)"
        />
      </div>

      {/* Notifications */}
      <div className="mb-8">
        <h2 className="font-medium mb-3">Notifications</h2>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={settings.notify_new_lead}
            onChange={(e) =>
              updateSettings({ notify_new_lead: e.target.checked })
            }
          />
          Email on new lead
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.notify_newsletter}
            onChange={(e) =>
              updateSettings({
                notify_newsletter: e.target.checked,
              })
            }
          />
          Email on newsletter signup
        </label>
      </div>

      {/* Maintenance */}
      <div>
        <h2 className="font-medium mb-3">Site</h2>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.maintenance_mode}
            onChange={(e) =>
              updateSettings({
                maintenance_mode: e.target.checked,
              })
            }
          />
          Maintenance mode
        </label>
      </div>

      {saving && (
        <p className="mt-4 text-sm text-slate-400">
          Saving…
        </p>
      )}
    </div>
  );
}

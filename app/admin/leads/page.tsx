"use client";

import { useEffect, useState } from "react";
import { formatIST } from "@/lib/formatDate";

type Lead = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  requirement: string;
  message: string | null;
  status: string;
  created_at: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Load leads
  useEffect(() => {
    async function loadLeads() {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data);
      setLoading(false);
    }
    loadLeads();
  }, []);

  async function updateStatus(id: string, status: string) {
    // optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l))
    );

    await fetch("/api/leads/status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6">Leads</h1>

      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Requirement</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Time (IST)</th>
            </tr>
          </thead>

          <tbody>
            {!loading && leads.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  No leads yet
                </td>
              </tr>
            )}

            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-white/10 align-top"
              >
                <td className="px-4 py-3 font-medium">
                  {lead.name}
                </td>

                <td className="px-4 py-3">
                  {lead.email || "—"}
                  {lead.phone && (
                    <div className="text-xs text-slate-400">
                      📞 {lead.phone}
                    </div>
                  )}
                </td>

                <td className="px-4 py-3 max-w-xs text-slate-300">
                  {lead.requirement}
                </td>

                <td className="px-4 py-3">
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead.id, e.target.value)
                    }
                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-xs"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>

                <td className="px-4 py-3 text-slate-400">
                  {formatIST(lead.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

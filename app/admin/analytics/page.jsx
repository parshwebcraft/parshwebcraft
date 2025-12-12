"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AdminAnalyticsPage() {
  // plain JSX (no TypeScript)
  const [visits, setVisits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVisits() {
      try {
        setLoading(true);
        setError(null);

        // hit your API (adjust path if your API route differs)
        const res = await fetch("/api/visit/daily?days=14");
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`Fetch failed: ${res.status} ${res.statusText} ${txt}`);
        }

        const json = await res.json();

        if (!cancelled) {
          if (json && json.ok && Array.isArray(json.data)) {
            setVisits(json.data);
          } else if (json && Array.isArray(json)) {
            // in case your API returns raw array
            setVisits(json);
          } else {
            setError(json && json.error ? json.error : "Unexpected response");
          }
        }
      } catch (err) {
        if (!cancelled) setError(String(err));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadVisits();

    return () => {
      cancelled = true;
    };
  }, []); // run once on mount

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-6 lg:px-24 lg:pl-64">
        <div className="p-6">Loading visits…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 px-6 lg:px-24 lg:pl-64">
        <div className="p-6 text-red-400">Error: {String(error)}</div>
      </div>
    );
  }

  if (!visits || visits.length === 0) {
    return (
      <div className="min-h-screen pt-24 px-6 lg:px-24 lg:pl-64">
        <div className="p-6">No visit data found.</div>
      </div>
    );
  }

  // labels and dataset for ChartJS
  const labels = visits.map((v) => v.date);
  const data = {
    labels,
    datasets: [
      {
        label: "Visits",
        data: visits.map((v) => v.count),
        fill: true,
        tension: 0.2,
        borderWidth: 2,
      },
    ],
  };

  return (
    // NOTE: lg:pl-64 gives room for a fixed sidebar ~16rem (adjust if needed)
    <div className="min-h-screen pt-24 px-6 lg:px-24 lg:pl-64">
      <h1 className="text-2xl font-bold mb-6">Admin — Visits (last {visits.length} days)</h1>

      <div className="bg-[#0b1220] glass p-6 rounded-lg mb-6">
        <Line data={data} />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Raw data</h3>
        <div className="mt-2 bg-[rgba(255,255,255,0.02)] rounded-lg overflow-auto p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-300/80">
                <th className="py-2 pl-2">Date</th>
                <th className="py-2">Count</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((v) => (
                <tr key={v.date} className="border-t border-[rgba(255,255,255,0.03)]">
                  <td className="py-2 pl-2">{v.date}</td>
                  <td className="py-2">{v.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

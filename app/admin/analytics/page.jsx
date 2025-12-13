"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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

// Register Chart.js components (required)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dynamic import to disable SSR for Chart.js
const Line = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false }
);

export default function AdminAnalyticsPage() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVisits() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/visit/daily?days=14");
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`Fetch failed: ${res.status} ${res.statusText} ${txt}`);
        }

        const json = await res.json();

        if (!cancelled) {
          if (json && json.ok && Array.isArray(json.data)) {
            setVisits(json.data);
          } else if (Array.isArray(json)) {
            setVisits(json);
          } else {
            throw new Error(json?.error || "Unexpected API response");
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
  }, []);

  // ---------- STATES ----------
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
        <div className="p-6 text-red-400">Error: {error}</div>
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

  // ---------- CHART DATA ----------
  const chartData = {
    labels: visits.map((v) => v.date),
    datasets: [
      {
        label: "Visits",
        data: visits.map((v) => v.count),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.3)",
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔥 REQUIRED
    plugins: {
      legend: { display: true },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 px-6 lg:px-24 lg:pl-64">
      <h1 className="text-2xl font-bold mb-6">
        Admin — Visits (last {visits.length} days)
      </h1>

      {/* GRAPH */}
      <div className="bg-[#0b1220] glass p-6 rounded-lg mb-6 h-80">
        <Line data={chartData} options={options} />
      </div>

      {/* RAW DATA (DEBUG) */}
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
                <tr
                  key={v.date}
                  className="border-t border-[rgba(255,255,255,0.03)]"
                >
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

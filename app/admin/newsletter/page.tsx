import { createClient } from "@supabase/supabase-js";
import { formatISTWithAgo } from "@/lib/formatDate";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function NewsletterAdminPage() {
  const { data, error } = await supabase
    .from("newsletter")
    .select("email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to load newsletter");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Newsletter Subscribers
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left border-b border-white/10">
            <tr>
              <th className="py-2">Email</th>
              <th className="py-2">Subscribed (IST)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.email}
                className="border-b border-white/5"
              >
                <td className="py-2">{row.email}</td>
                <td className="py-2 text-slate-400">
                  {formatISTWithAgo(row.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

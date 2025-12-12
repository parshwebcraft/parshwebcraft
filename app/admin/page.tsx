// app/admin/page.tsx
import { redirect } from "next/navigation";

export default function AdminIndexPage() {
  // send user to analytics page by default
  redirect("/admin/analytics");
}

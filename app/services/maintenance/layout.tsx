import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance Services | ParshWebCraft",
  description:
    "Website maintenance services by ParshWebCraft to keep your site secure, fast, updated, and running smoothly with professional support.",

  alternates: {
    canonical: "https://parshwebcraft.in/services/maintenance",
  },

  openGraph: {
    title: "Website Maintenance Services | ParshWebCraft",
    description:
      "Reliable website maintenance and support services to ensure security, performance, and long-term stability.",
    url: "https://parshwebcraft.in/services/maintenance",
    siteName: "ParshWebCraft",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Website Maintenance Services | ParshWebCraft",
    description:
      "Ongoing website maintenance and support to keep your business online and secure.",
  },
};

export default function MaintenanceServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

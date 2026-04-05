import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
        ],
      },
    ],
    sitemap: "https://www.parshwebcraft.in/sitemap.xml",
    host: "https://www.parshwebcraft.in",
  };
}
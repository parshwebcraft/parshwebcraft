import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.parshwebcraft.in";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Core Pages
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/parsh-care`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/anand-fashion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/bahubali-cabs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/carbon-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/jayesh-sir-elearning`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/kharka-mining`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/parshhire`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/case-studies/parshwebcraft`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // SEO Pages (IMPORTANT for ranking)
    {
      url: `${baseUrl}/web-development-udaipur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/web-design-udaipur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/graphic-designing-udaipur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/digital-marketing-udaipur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Service-specific pages
    {
      url: `${baseUrl}/saas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/maintenance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/maintenance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}

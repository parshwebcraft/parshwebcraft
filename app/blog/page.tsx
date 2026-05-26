import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import { CTABanner, Eyebrow } from "@/components/SeoSections";

export const metadata: Metadata = {
  title: "SEO and Digital Growth Blog | ParshWebCraft",
  description:
    "Read ParshWebCraft blogs on website development, SEO, digital marketing, ecommerce, branding, social media, QR menus, and business growth.",
  keywords: [
    "SEO blog",
    "website development blog",
    "digital marketing blog",
    "business growth",
    "Udaipur web development",
  ],
  openGraph: {
    title: "ParshWebCraft Blog | SEO, Websites and Digital Marketing",
    description:
      "Helpful guides for businesses that want better websites, SEO visibility, digital marketing, and lead generation.",
    url: "https://www.parshwebcraft.in/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 lg:px-24">
      <section className="pt-28 pb-14 text-center">
        <Eyebrow>ParshWebCraft Blog</Eyebrow>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold text-white md:text-6xl">
          SEO, Website and Marketing Guides for Growing Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Practical articles on website development, ecommerce, SEO, branding,
          social media, digital marketing, QR systems, and lead generation for
          businesses in Udaipur, Rajasthan, and India.
        </p>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass flex h-full flex-col overflow-hidden rounded-xl border border-[#f3d07a]/15 transition hover:-translate-y-1 hover:border-[#f3d07a]/40"
            >
              {post.image ? (
                <div className="relative aspect-[16/9] bg-[#f3d07a]/10">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center bg-[#f3d07a]/10 px-6 text-center text-sm font-semibold uppercase tracking-wide text-[#f3d07a]">
                  Featured Image Placeholder
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#f3d07a]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 font-semibold text-[#f3d07a] hover:underline"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need Content That Helps You Rank?"
        description="ParshWebCraft can plan SEO pages, blogs, service content, and lead-focused landing pages for your business."
      />
    </main>
  );
}

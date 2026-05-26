import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blogs";
import { CTABanner, FAQSection, RelatedLinks } from "@/components/SeoSections";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | ParshWebCraft",
    };
  }

  return {
    title: `${post.title} | ParshWebCraft`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.parshwebcraft.in/blog/${post.slug}`,
      type: "article",
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)
    .map((item) => ({
      label: item.title,
      href: `/blog/${item.slug}`,
    }));

  return (
    <main className="min-h-screen px-6 lg:px-24">
      <article className="mx-auto max-w-4xl pt-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f3d07a]">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {post.description}
          </p>
          <div className="mt-5 flex justify-center gap-4 text-sm text-slate-400">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.image ? (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-[#f3d07a]/15 bg-[#f3d07a]/10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label={post.imageAlt}
            className="mt-10 flex aspect-[16/9] items-center justify-center rounded-2xl border border-[#f3d07a]/15 bg-[#f3d07a]/10 px-6 text-center font-semibold uppercase tracking-wide text-[#f3d07a]"
          >
            Featured Image Placeholder
          </div>
        )}

        <aside className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-bold text-white">Table of Contents</h2>
          <ol className="mt-4 space-y-2 text-slate-300">
            {post.toc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </aside>

        <div className="prose prose-invert prose-headings:text-white prose-p:text-slate-300 prose-a:text-[#f3d07a] mt-12 max-w-none">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="my-12 rounded-2xl border border-[#f3d07a]/20 bg-[#f3d07a]/10 p-8">
          <h2 className="text-2xl font-bold text-white">
            Want a stronger website or marketing funnel?
          </h2>
          <p className="mt-3 text-slate-300">
            ParshWebCraft can help with SEO pages, website design, ecommerce,
            SaaS systems, social media, ads, and lead generation.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-[#f3d07a] px-6 py-3 font-semibold text-black"
          >
            Get Free Consultation
          </Link>
        </div>
      </article>

      <FAQSection faqs={post.faqs} />
      <RelatedLinks links={related} />
      <CTABanner />
    </main>
  );
}

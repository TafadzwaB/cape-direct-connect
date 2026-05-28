import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import QuoteForm from "@/components/QuoteForm";
import { PHONE, PHONE_HREF, WHATSAPP, BUSINESS_NAME } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Cape Direct Connect`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-700">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-8">
          <span className="text-sm font-medium text-blue-600">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>By {BUSINESS_NAME}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-blue max-w-none">
          {paragraphs.map((block, i) => {
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-2">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-xl font-bold text-gray-900 mt-8 mb-3"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc pl-6 space-y-1 text-gray-700">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(block)) {
              const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
              return (
                <ol key={i} className="list-decimal pl-6 space-y-1 text-gray-700">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {block}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-blue-50 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Need Help With Your DStv?
          </h2>
          <p className="text-gray-600 mb-4">
            Cape Direct Connect is available 24/7 for DStv installation, repairs,
            and more across Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </article>

      {/* Quote form */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Get a Free Quote
          </h2>
          <QuoteForm />
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition"
              >
                <span className="text-xs font-medium text-blue-600">
                  {r.category}
                </span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: BUSINESS_NAME,
            },
            publisher: {
              "@type": "Organization",
              name: BUSINESS_NAME,
            },
          }),
        }}
      />
    </>
  );
}

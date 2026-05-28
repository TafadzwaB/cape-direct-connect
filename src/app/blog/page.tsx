import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "DStv tips, troubleshooting guides, installation advice, and news from Cape Direct Connect — Cape Town's trusted DStv experts.",
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            DStv Blog &amp; News
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Tips, how-to guides, case studies, and the latest news from Cape
            Direct Connect — helping you get the most out of your DStv.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-blue-600 mb-2">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <time
                    dateTime={post.date}
                    className="text-xs text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-ZA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

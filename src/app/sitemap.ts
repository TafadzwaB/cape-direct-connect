import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://capedirectconnect.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/dstv-installation",
    "/dstv-repairs",
    "/signal-repairs",
    "/extraview-setup",
    "/tv-wall-mounting",
    "/ovhd-installation",
    "/areas-we-cover",
    "/blog",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

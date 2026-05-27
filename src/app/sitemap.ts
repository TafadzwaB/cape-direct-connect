import type { MetadataRoute } from "next";

const BASE_URL = "https://capedirectconnect.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/dstv-installation",
    "/dstv-repairs",
    "/signal-repairs",
    "/extraview-setup",
    "/tv-wall-mounting",
    "/ovhd-installation",
    "/areas-we-cover",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

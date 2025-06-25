import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vigneshospital.com"

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/doctors",
    "/treatments",
    "/gallery",
    "/blog",
    "/contact",
    "/appointment",
    "/store",
  ]

  // Blog posts
  const blogPosts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  // Doctor pages
  const doctorPages = ["/doctors/dr-ragavendra-balaji"]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const doctorRoutes = doctorPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...doctorRoutes]
}

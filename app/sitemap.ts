import type { MetadataRoute } from "next"

import { categories } from "@/config/components"

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://misamo.io",
  }
  const search = {
    url: "https://misamo.io/search",
  }
  const easings = {
    url: "https://misamo.io/easings",
  }
  const categoryPages = categories.map((category) => ({
    url: `https://misamo.io/${category.slug}`,
  }))

  return [home, ...categoryPages, search, easings]
}

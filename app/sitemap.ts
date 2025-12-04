import type { MetadataRoute } from "next";

const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: `https://tydedev.it/${locale}${page ? "/" + page : ""}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: page === "" ? 1 : 0.7,
      });
    }
  }

  return urls;
}

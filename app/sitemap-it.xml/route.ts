// app/sitemap-it.xml/route.ts
import type { MetadataRoute } from "next";

export default function sitemapIt(): MetadataRoute.Sitemap {
  return [
    { url: "https://tydedev.it/en", lastModified: new Date() },
    { url: "https://tydedev.it/en/contacts", lastModified: new Date() },
    { url: "https://tydedev.it/en/privacy", lastModified: new Date() },
  ];
}

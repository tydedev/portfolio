// app/sitemap-it.xml/route.ts
import type { MetadataRoute } from "next";

export default function sitemapIt(): MetadataRoute.Sitemap {
  return [
    { url: "https://tydedev.it/it", lastModified: new Date() },
    { url: "https://tydedev.it/it/contacts", lastModified: new Date() },
    { url: "https://tydedev.it/it/privacy", lastModified: new Date() },
  ];
}

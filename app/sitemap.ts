import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tydedev.it/sitemap-it.xml" },
    { url: "https://tydedev.it/sitemap-en.xml" },
  ];
}

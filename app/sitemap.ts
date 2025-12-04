// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://tydedev.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const localizedRoutes = ["/", "/contacts", "/privacy"];

  localizedRoutes.forEach((route) => {
    // Aggiunge la versione in inglese (default)
    sitemapEntries.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          it: `${BASE_URL}/it${route}`,
        },
      },
    });

    // Aggiunge la versione in italiano come URL di primo livello
    sitemapEntries.push({
      url: `${BASE_URL}/it${route}`,
      lastModified: new Date(),
    });
  });

  return sitemapEntries;
}

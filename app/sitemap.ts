// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://tydedev.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = ["/", "/contacts", "/privacy", "/graphic-design"];

  return localizedRoutes.flatMap((route) => [
    {
      url: `${BASE_URL}/it${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en${route}`,
          it: `${BASE_URL}/it${route}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en${route}`,
          it: `${BASE_URL}/it${route}`,
        },
      },
    },
  ]);
}

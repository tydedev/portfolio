import { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_HOST || "https://tydedev.it";

const pages = [
  { path: "", priority: 1.0 },
  { path: "/services/epub-conversion", priority: 0.9 },
  { path: "/work", priority: 0.8 },
  { path: "/profile", priority: 0.8 },
];

const locales = ["en", "it"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(page =>
    locales.map(locale => ({
      url: `${host}/${locale}${page.path}`,
      lastModified: new Date(),
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${host}/${l}${page.path}`]),
        ),
      },
    })),
  );
}

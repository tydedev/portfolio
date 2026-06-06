import { MetadataRoute } from "next";
import { services, getLocalizedSlug } from "@/lib/services";

const host = process.env.NEXT_PUBLIC_HOST || "https://tydedev.it";
const locales = ["en", "it"] as const;

const staticPages = [
  { path: "", priority: 1.0 },
  { path: "/work", priority: 0.8 },
  { path: "/profile", priority: 0.8 },
];

const serviceSegment: Record<string, string> = {
  en: "services",
  it: "servizi",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${host}/${locale}${page.path}`,
      lastModified: new Date(),
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${host}/${l}${page.path}`]),
        ),
      },
    })),
  );

  const serviceEntries = services.flatMap((service) =>
    locales.map((locale) => {
      const slug = getLocalizedSlug(service, locale);
      const path = `/${serviceSegment[locale]}/${slug}`;
      return {
        url: `${host}/${locale}${path}`,
        lastModified: new Date(),
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${host}/${l}/${serviceSegment[l]}/${getLocalizedSlug(service, l)}`,
            ]),
          ),
        },
      };
    }),
  );

  return [...staticEntries, ...serviceEntries];
}

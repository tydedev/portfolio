import type { MetadataRoute } from "next";
import { services, getLocalizedSlug } from "@/lib/services";
import { type BlogLocale, getBlogPosts, getBlogTranslations } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const locales = routing.locales as readonly BlogLocale[];

const staticPages = [
  { path: "", priority: 1.0 },
  { path: "/blog", priority: 0.9 },
];

const serviceSegment: Record<BlogLocale, string> = {
  en: "services",
  it: "servizi",
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Pagine statiche
  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${page.path}`]),
        ),
      },
    })),
  );

  // Pagine dei servizi
  const serviceEntries: MetadataRoute.Sitemap = services.flatMap((service) =>
    locales.map((locale) => {
      const slug = getLocalizedSlug(service, locale);

      return {
        url: `${SITE_URL}/${locale}/${serviceSegment[locale]}/${slug}`,
        lastModified: new Date(),
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${SITE_URL}/${l}/${serviceSegment[l]}/${getLocalizedSlug(service, l)}`,
            ]),
          ),
        },
      };
    }),
  );

  // Articoli del blog
  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => {
      const translations = getBlogTranslations(post.id);

      const languages = Object.fromEntries(
        Object.entries(translations)
          .filter((entry) => entry[1] !== undefined && entry[1] !== null)
          .map(([translatedLocale, translatedPost]) => [
            translatedLocale,
            `${SITE_URL}/${translatedLocale}/blog/${translatedPost!.slug}`,
          ]),
      );

      return {
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.8,
        alternates: {
          languages,
        },
      };
    }),
  );

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}

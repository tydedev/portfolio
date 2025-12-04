import type { MetadataRoute } from "next";

const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `https://tydedev.it/${locale}${
        page ? "/" + page : ""
      }`;
    }

    // Inseriamo la pagina usando la lingua di default come url principale
    urls.push({
      url: languages.it, // pagina principale (default)
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: page === "" ? 1 : 0.7,
      alternates: {
        languages,
      },
    });
  }

  return urls;
}

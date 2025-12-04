/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://tydedev.it";

const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"]; // inserisci qui tutte le tue pagine principali

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,

  // Trasforma ogni percorso in URL completo con alternateRefs
  transform: async (config, path) => {
    return {
      loc: `${siteUrl}${path}`, // URL canonico
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map((locale) => ({
        hreflang: locale,
        href: `${siteUrl}/${locale}${path}`,
      })),
    };
  },

  // Genera tutte le pagine statiche per tutte le lingue
  additionalPaths: async (config) => {
    const paths = [];
    for (const page of pages) {
      for (const locale of locales) {
        // la root "/" va gestita correttamente per la lingua
        const path = `/${page ? page : ""}`;
        paths.push(await config.transform(config, path));
      }
    }
    return paths;
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};

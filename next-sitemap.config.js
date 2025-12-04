
const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"]; // le tue pagine principali

const config = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,

  // Trasforma ogni path aggiungendo gli alternateRefs
  transform: async (config, path) => {
    return {
      loc: `${siteUrl}${path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map((locale) => ({
        href: `${siteUrl}/${locale}${path}`,
        hreflang: locale,
      })),
    };
  },

  // Percorsi extra
  additionalPaths: async (config) => {
    const paths = [];
    for (const page of pages) {
      for (const locale of locales) {
        paths.push(await config.transform(config, `/${page ? page : ""}`));
      }
    }
    return paths;
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};

export default config;

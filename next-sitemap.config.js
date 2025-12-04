/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || "https://tydedev.it";

// Definiamo le lingue disponibili e le pagine principali del sito
const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"]; // "" rappresenta la homepage

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,

  // Questa funzione aggiunge alternateRefs per le versioni multilingua
  transform: async (config, path) => {
    return {
      loc: `${siteUrl}${path}`, // URL principale
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map((locale) => ({
        href: `${siteUrl}/${locale}${path}`, // URL alternativo per lingua
        hreflang: locale,
      })),
    };
  },

  // Qui generiamo tutti i percorsi combinando le pagine con le lingue
  additionalPaths: async (config) => {
    const paths = [];
    for (const page of pages) {
      for (const locale of locales) {
        paths.push(await config.transform(config, `/${page ? page : ""}`));
      }
    }
    return paths;
  },

  // Robots.txt
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  // Assicura il namespace XHTML per alternateRefs
  xmlNs: {
    xhtml: "http://www.w3.org/1999/xhtml",
  },
};

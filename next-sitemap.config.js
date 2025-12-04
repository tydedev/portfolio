// next-sitemap.config.js
const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];

const staticPages = ["", "contacts", "privacy"]; // tutte le pagine statiche

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async () => {
    const paths = [];
    locales.forEach((locale) => {
      staticPages.forEach((page) => {
        const loc = page ? `/${locale}/${page}` : `/${locale}`;
        paths.push({
          loc,
          changefreq: "daily",
          priority: 0.7,
          alternateRefs: locales.map((l) => ({
            href: `${siteUrl}/${l}${page ? "/" + page : ""}`,
            hreflang: l,
          })),
        });
      });
    });
    return paths;
  },
};

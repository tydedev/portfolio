// next-sitemap.config.js
const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    const pathLocale = path.split("/")[1]; // 'it' o 'en'
    const alternateRefs = locales.map((l) => ({
      href: `${siteUrl}/${l}${path.replace(`/${pathLocale}`, "")}`,
      hreflang: l,
    }));
    return {
      loc: `${siteUrl}${path}`,
      changefreq: "daily",
      priority: 0.7,
      alternateRefs,
    };
  },
  additionalPaths: async () => {
    // Lista tutte le pagine statiche che non vengono trovate automaticamente
    const paths = [];
    locales.forEach((locale) => {
      paths.push(`/${locale}`);
      paths.push(`/${locale}/contacts`);
      paths.push(`/${locale}/privacy`);
      // aggiungi altre pagine statiche se vuoi
    });
    return paths;
  },
};

const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  // genera gli alternateRefs automaticamente per tutte le pagine
  transform: async (config, path) => {
    const locale = path.split("/")[1]; // 'it' o 'en'
    const alternateRefs = locales.map(l => ({
      href: `${siteUrl}/${l}${path.replace(`/${locale}`, "")}`,
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
    return [
      "/it",
      "/en",
      "/it/contacts",
      "/en/contacts",
    ];
  },
};

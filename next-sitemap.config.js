const siteUrl = "https://tydedev.it";
const locales = ["it", "en"];
const pages = ["", "contacts", "privacy"];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async (config) => {
    const paths = [];
    for (const page of pages) {
      for (const locale of locales) {
        paths.push({
          loc: `/${locale}${page ? "/" + page : ""}`,
          changefreq: "daily",
          priority: 0.7,
          alternateRefs: locales.map((l) => ({
            href: `/${l}${page ? "/" + page : ""}`,
            hreflang: l,
          })),
        });
      }
    }
    return paths;
  },
};

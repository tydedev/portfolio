const locales = ["it", "en"];

module.exports = {
  siteUrl: "https://tydedev.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  generateI18nRoutes: true,
  additionalPaths: async (config) => {
    const paths = [];
    locales.forEach(locale => {
      paths.push({ loc: `/${locale}` });
      paths.push({ loc: `/${locale}/contacts` });
    });
    return paths;
  },
};

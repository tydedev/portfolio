/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tydedev.vercel.app",
  generateRobotsTxt: true,
  generateI18nRoutes: true,
  changefreq: "daily",
  priority: 0.7,
  alternateRefs: [
    { href: "https://tydedev.vercel.app/it", hreflang: "it" },
    { href: "https://tydedev.vercel.app/en", hreflang: "en" },
  ],
};

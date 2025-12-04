/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tydedev.it',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const routes = [
      "/",
      "/en",
      "/contacts",
      "/en/contacts",
      "/privacy",
      "/en/privacy",
    ];

    return routes.map((path) => ({
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `https://tydedev.it${path}`, hreflang: 'it' },
        { href: `https://tydedev.it/en${path}`, hreflang: 'en' },
      ],
    }));
  },
};

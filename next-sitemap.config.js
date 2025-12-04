/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tydedev.it',
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: `https://tydedev.it${path}`, hreflang: 'it' },
        { href: `https://tydedev.it/en${path}`, hreflang: 'en' },
      ],
    }
  },
}

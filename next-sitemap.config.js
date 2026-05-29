module.exports = {
  siteUrl: 'https://tydedev.it',
  generateRobotsTxt: true,
  exclude: ['/_not-found', '/404', '/500'],
  generateIndexSitemap: false,

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  }
}
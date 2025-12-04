// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tydedev.it',
  generateRobotsTxt: true,
  // Add any other configuration options here

  // Use the transform function primarily to add the alternateRefs based on detected paths
  transform: async (config, path) => {
    // This is the list of all available locales you support
    const locales = ['en', 'it'];
    const siteUrl = config.siteUrl;
    
    // Create an object to hold the base path and locale of the current URL
    let currentLocale = 'en'; // Assume 'en' is default if no prefix
    let basePath = path;

    // Detect the locale prefix in the path
    for (const locale of locales) {
      if (path.startsWith(`/${locale}/`)) {
        currentLocale = locale;
        basePath = path.replace(`/${locale}`, ''); // Get the path without the locale prefix
        break;
      }
    }
    
    // If the path is the root path (/)
    if (path === '/' || path === '/it') {
        basePath = '/';
    }
    
    const alternateRefs = locales.map(locale => {
      // Determine the correct localized URL structure (assuming 'en' is prefix-less)
      const href = locale === 'en' 
        ? `${siteUrl}${basePath}` 
        : `${siteUrl}/${locale}${basePath}`;
        
      return { href, hreflang: locale };
    });

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
      alternateRefs: alternateRefs,
    };
  },
  
  // You must ensure Next.js outputs these paths during the build step.
  // The generator finds paths within your .next directory.
};

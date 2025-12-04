/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tydedev.it', // Replace with your production site URL
  generateRobotsTxt: true, // Optional: generates a robots.txt file
  
  // Define your locales and routes structure
  locales: ['en', 'it'],
  routes: ['/', '/contacts', '/privacy'],
  
  // Custom transformation function to add alternate language links
  transform: async (config, path) => {
    // Default URL properties
    const defaultUrl = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [], // Initialize the alternateRefs array
    };

    // Determine the base path without locale prefix for comparison (e.g., '/contacts' instead of '/en/contacts')
    const basePath = config.locales.reduce((acc, locale) => {
      // Check if the current path starts with a locale prefix
      if (path.startsWith(`/${locale}/`)) {
        return path.replace(`/${locale}`, '');
      }
      return acc;
    }, path); // Default to the path itself if no locale prefix is found (assuming default locale doesn't have a prefix)

    // Only add alternate links for the specific routes that are localized
    if (config.routes.includes(basePath)) {
      config.locales.forEach(locale => {
        // Construct the localized URL
        const localizedPath = locale === 'en' ? `${basePath}` : `/${locale}${basePath}`; // Assuming 'en' is the default and has no prefix, 'it' has '/it' prefix

        defaultUrl.alternateRefs.push({
          href: `${config.siteUrl}${localizedPath}`,
          hreflang: locale,
        });
      });
    }

    return defaultUrl;
  },
  
  // Ensure we do not exclude locale paths if using a standard i18n setup that puts them in the build
  // exclude: ['/it/*', '/en/*'], // Only use this if you want to exclude and use another method
};

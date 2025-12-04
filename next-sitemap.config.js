const siteUrl = "https://tydedev.it";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,

  // Le lingue del sito
  alternateRefs: [
    { href: `${siteUrl}/it`, hreflang: "it" },
    { href: `${siteUrl}/en`, hreflang: "en" },
    { href: `${siteUrl}/it`, hreflang: "x-default" }, // fallback
  ],

  // Pagine extra da includere
  additionalPaths: async (config) => {
    return [
      {
        loc: "/it",
        changefreq: "daily",
        priority: 0.7,
        alternateRefs: [
          { href: `${siteUrl}/it`, hreflang: "it" },
          { href: `${siteUrl}/en`, hreflang: "en" },
        ],
      },
      {
        loc: "/en",
        changefreq: "daily",
        priority: 0.7,
        alternateRefs: [
          { href: `${siteUrl}/it`, hreflang: "it" },
          { href: `${siteUrl}/en`, hreflang: "en" },
        ],
      },
      {
        loc: "/it/contacts",
        changefreq: "daily",
        priority: 0.7,
        alternateRefs: [
          { href: `${siteUrl}/it/contacts`, hreflang: "it" },
          { href: `${siteUrl}/en/contacts`, hreflang: "en" },
        ],
      },
      {
        loc: "/en/contacts",
        changefreq: "daily",
        priority: 0.7,
        alternateRefs: [
          { href: `${siteUrl}/it/contacts`, hreflang: "it" },
          { href: `${siteUrl}/en/contacts`, hreflang: "en" },
        ],
      },
    ];
  },
};

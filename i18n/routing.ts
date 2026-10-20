import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "it"],

  pathnames: {
    "/services/[slug]": {
      en: "/services/[slug]",
      it: "/servizi/[slug]",
    },

    "/blog": {
      en: "/blog",
      it: "/blog",
    },

    "/blog/[slug]": {
      en: "/blog/[slug]",
      it: "/blog/[slug]",
    },
  },

  defaultLocale: "it",
  localePrefix: "always",
});

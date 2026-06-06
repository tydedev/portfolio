import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "it"],
  pathnames: {
    "/services/[slug]": {
      en: "/services/[slug]",
      it: "/servizi/[slug]",
    },
  },
  defaultLocale: "it",
  localePrefix: "always",
});

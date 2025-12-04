import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "it"], // add all languages you support
    defaultLocale: "en",
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

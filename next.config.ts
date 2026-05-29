import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.*"],
  images: {
    minimumCacheTTL: 60,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

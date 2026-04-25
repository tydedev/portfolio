import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const host = process.env.NEXT_PUBLIC_HOST || "http://tydedev.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/work", priority: 0.8 },
    { path: "/profile", priority: 0.8 },
  ];

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${host}/${locale}${route.path === "" ? "" : route.path}`,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${host}/${altLocale}${route.path === "" ? "" : route.path}`,
          ]),
        ),
      },
    })),
  );
}

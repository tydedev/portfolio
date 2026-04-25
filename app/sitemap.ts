import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const host = process.env.NEXT_PUBLIC_HOST || "https://tydedev.it";

const pages = [
  { path: "", priority: 1.0 },
  { path: "/work", priority: 0.8 },
  { path: "/profile", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => {
    const url = `${host}/en${page.path}`;

    return {
      url,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${host}/en${page.path}`,
          it: `${host}/it${page.path}`,
          "x-default": `${host}/en${page.path}`,
        },
      },
    };
  });
}

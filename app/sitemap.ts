import { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";

const host = "https://tydedev.it";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: host,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: host + (await getPathname({ locale: "it", href: "/" })),
          de: host + (await getPathname({ locale: "en", href: "/" })),
        },
      },
    },
  ];
}

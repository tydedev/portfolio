import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tydedev.it",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://tydedev.it/it",
          de: "https://tydedev.it/en",
        },
      },
    },
    {
      url: "https://tydedev.it/contacts",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://tydedev.it/it/contacts",
          de: "https://tydedev.it/en/contacts",
        },
      },
    },
    {
      url: "https://tydedev.it/privacy",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://tydedev.it/it/privacy",
          de: "https://tydedev.it/en/privacy",
        },
      },
    },
  ];
}

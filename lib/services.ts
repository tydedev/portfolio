export interface Service {
  slug: string;
  i18nKey: string;
  localizedSlugs: Record<string, string>;
}

export const services: Service[] = [
  {
    slug: "book-layout",
    i18nKey: "bookLayout",
    localizedSlugs: {
      en: "book-layout-formatting-typesetting",
      it: "impaginazione-libri-torre-del-greco",
    },
  },
];

// Cerca per slug in qualsiasi lingua
export function getService(slug: string): Service | undefined {
  return services.find(
    (s) => s.slug === slug || Object.values(s.localizedSlugs).includes(slug),
  );
}

// Restituisce lo slug per una locale specifica
export function getLocalizedSlug(service: Service, locale: string): string {
  return service.localizedSlugs[locale] ?? service.slug;
}

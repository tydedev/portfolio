// lib/locales.ts
export const Locales = {
  it: { name: "Italiano" },
  en: { name: "English" },
} as const;

export type LocaleCode = keyof typeof Locales;

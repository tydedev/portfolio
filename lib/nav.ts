import { getLocalizedSlug, getService } from "@/lib/services";

export type NavLink = {
  href: string;
  label: string;
};

export function getNavigation(locale: string): NavLink[] {
  const bookLayout = getService("book-layout");

  const servicesSlug = bookLayout
    ? getLocalizedSlug(bookLayout, locale)
    : "book-layout";

  return [
    { href: "#work", label: "Works" },
    {
      href: `/services/${servicesSlug}`,
      label: "Services",
    },
    { href: "/contact", label: "Contact" },
  ];
}

export const socials = [
  {
    href: "https://www.instagram.com/tydedev/",
    label: "Instagram",
  },
  {
    href: "https://www.behance.net/tydedev",
    label: "Behance",
  },
  {
    href: "https://www.linkedin.com/in/maria-basso-b46a12370/",
    label: "Linkedin",
  },
];

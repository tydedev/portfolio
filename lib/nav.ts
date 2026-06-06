import { getLocalizedSlug, getService } from "@/lib/services";

type HrefObject = {
  pathname: string;
  params?: Record<string, string>;
};

export type NavLink = {
  href: string | HrefObject;
  label: string;
};

export function getNavigation(locale: string): NavLink[] {
  const bookLayout = getService("book-layout");

  return [
    { href: "/", label: "Works" },
    {
      href: {
        pathname: "/services/[slug]",
        params: {
          slug: bookLayout
            ? getLocalizedSlug(bookLayout, locale)
            : "book-layout",
        },
      },
      label: "Services",
    },
    { href: "/about", label: "About" },

    { href: "/contact", label: "Contact" },
  ];
}

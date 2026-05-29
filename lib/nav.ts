export const navigation: Link[] = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Link = {
  href: string;
  label: string;
};

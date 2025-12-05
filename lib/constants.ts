import { Home, Mail, Shapes } from "lucide-react";

export const services = [
  {
    title: "graphic.title",
    href: "/graphic-design",
    list: [
      "graphic.list.one",
      "graphic.list.two",
      "graphic.list.three",
      "graphic.list.four",
    ],
    isFirst: true,
  },
  {
    title: "webdev.title",
    href: "/web-development",
    list: [
      "webdev.list.one",
      "webdev.list.two",
      "webdev.list.three",
      "webdev.list.four",
    ],
  },
];

export const links = [
  { name: "home", href: "/", icon: Home },
  {
    name: "services",
    icon: Shapes,
    isDropDown: true,
    dropDown: [
      {
        name: "graphic.button_title",
        href: `graphic-design`,
      },
    ],
  },
  { name: "contacts", href: "/contacts", icon: Mail },
];

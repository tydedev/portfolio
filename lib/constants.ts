import { Grid, Home, Mail, Shapes } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobeillustrator, SiTailwindcss } from "react-icons/si";

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
      {
        name: "webdev.button_title",
        href: `web-development`,
      },
    ],
  },
  { name: "templates", href: "/templates/wordpress", icon: Grid },
  { name: "contacts", href: "/contacts", icon: Mail },
];

export const categories = ["business", "portfolio", "blog"];
export const colors = [
  "white",
  "black",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "fuchsia",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
];

export const templates = [
  {
    id: 1,
    name: "busybiz.title",
    description: "busybiz.subtitle",
    price: 45,
    href: "/templates/wordpress/busybiz",
    image: "/images/templates/busybiz/preview.png",
    category: "business",
    isNew: true,
    isPopular: false,
    info: ["Responsive", "Block Editor", "SaaS Ready", "WooCommerce Ready"],
    colors: ["blue", "indigo", "orange"],
  },
];

export const projects = [
  {
    id: 1,
    name: "bascorp.title",
    description: "bascorp.description",
    href: "/projects/bascorp",
    liveUrl: "https://bascorp.it",
    image: "/images/projects/bascorp/project_bascorp_preview.png",
    skills: [
      { icon: FaReact },
      { icon: RiNextjsFill },
      { icon: SiTailwindcss },
      { icon: SiAdobeillustrator },
    ],
  },
];

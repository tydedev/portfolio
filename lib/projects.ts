// ─────────────────────────────────────────────────────────────────────────────
// lib/projects.ts  —  single source of truth for portfolio projects
//
// To add a new project:
//   1. Add an entry to the `projects` array below
//   2. Add the matching i18n keys to messages/en.json and messages/it.json
//      under Works.<slug>  (title, description, worktype)
//   3. Drop the images in /public/images/<slug>/
//   That's it — no new page file needed.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectBlock =
  | {
      type: "full";
      src: string;
      alt: string;
    }
  | {
      type: "half";
      src: string;
      alt: string;
    }
  | {
      type: "split";
      images: { src: string; alt: string }[];
    }
  | {
      type: "text";
      title?: string;
      content?: string;
      url?: string;
      align?: "left" | "center";
    };

export interface Project {
  /** URL segment: /work/<slug> */
  slug: string;
  /** Display name shown on the grid and detail page */
  name: string;
  /** i18n key under Works.<slug> in the message files */
  i18nKey: string;
  /** Tags shown on the work grid hover and on the detail page */
  tags: string[];
  /** Optional external URL shown on the detail page */
  externalUrl?: string;
  /** Grid thumbnail */
  thumbnail: {
    src: string;
    position?: string;
  };
  nameClass?: string;
  /** Tailwind grid classes for the Works grid cell */
  gridClass: string;
  /** Tailwind bg color for the Works grid hover overlay */
  hoverBg: string;
  /** Ordered list of blocks rendered on the detail page */
  blocks: ProjectBlock[];
}

export const projects: Project[] = [
  {
    name: "Bascorp",
    slug: "bascorp",
    i18nKey: "bascorp",
    tags: [
      "Branding",
      "Visual identity",
      "Logo design",
      "Web design & development",
      "Digital design",
      "Collateral",
    ],
    thumbnail: {
      src: "/images/editorial/bascorp-flyer.jpg",
      position: "object-center",
    },
    gridClass: "md:row-span-2 md:col-span-2",
    hoverBg: "bg-red-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/bascorp/header.jpg",
        alt: "Bascorp brand header",
      },
      {
        type: "full",
        src: "/images/bascorp/stationery.jpg",
        alt: "Bascorp stationery",
      },
      { type: "full", src: "/images/bascorp/flyer.jpg", alt: "Bascorp flyer" },
      { type: "full", src: "/images/bascorp/site.jpg", alt: "Bascorp website" },

      {
        type: "half",
        src: "/images/bascorp/mobile.jpg",
        alt: "Bascorp mobile",
      },
      {
        type: "text",
        title: "Website",
        url: "https://bascorp.it",
      },
      { type: "full", src: "/images/bascorp/ig.jpg", alt: "Bascorp Instagram" },
    ],
  },
  {
    name: "Aircraft Poster",
    slug: "aircraft-poster",
    i18nKey: "aircraft",
    tags: [
      "Typography",
      "Layout Design",
      "Poster Design",
      "Figma editable template",
    ],
    thumbnail: {
      src: "/images/editorial/boeing.jpg",
      position: "object-center",
    },
    gridClass: "md:col-span-2 md:row-span-2",
    hoverBg: "bg-slate-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/editorial/boeing.jpg",
        alt: "Aircraft poster template",
      },
    ],
  },
  {
    name: "Petrha",
    slug: "petrha",
    i18nKey: "petrha",
    tags: ["Branding", "Digital Experience"],
    thumbnail: { src: "/images/petrha/man.jpg", position: "object-center" },
    gridClass: "md:col-span-2 md:row-span-2",
    hoverBg: "bg-sky-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/petrha/constructionsite.jpg",
        alt: "Petrha visual identity",
      },
      { type: "half", src: "/images/petrha/man.jpg", alt: "Petrha visual" },
      { type: "half", src: "/images/petrha/helmet.jpg", alt: "Petrha visual" },
      {
        type: "full",
        src: "/images/petrha/brochure.jpg",
        alt: "Petrha visual identity",
      },
      {
        type: "full",
        src: "/images/petrha/businesscard.jpg",
        alt: "Petrha visual identity",
      },
    ],
  },
  {
    name: "Aquadro",
    slug: "petrha-aquadro",
    i18nKey: "petrha-aquadro",
    tags: [
      "Branding",
      "Visual identity",
      "Logo design",
      "Decks and presentations",
      "Brochures",
      "Collateral",
    ],
    thumbnail: {
      src: "/images/editorial/aquadro-brochure.jpg",
      position: "object-center",
    },
    gridClass: "md:col-span-4 md:row-span-2",
    hoverBg: "bg-green-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/aquadro/aquadro.jpg",
        alt: "Aquadro brand identity",
      },
      {
        type: "full",
        src: "/images/aquadro/businesscard.jpg",
        alt: "Aquadro business card",
      },
      {
        type: "full",
        src: "/images/aquadro/notebook.jpg",
        alt: "Aquadro notebook",
      },
      {
        type: "full",
        src: "/images/aquadro/spread.jpg",
        alt: "Aquadro brochure",
      },
      {
        type: "full",
        src: "/images/editorial/aquadro-brochure.jpg",
        alt: "Aquadro brochure",
      },
      {
        type: "full",
        src: "/images/aquadro/IG_feed.jpg",
        alt: "Aquadro Instagram feed",
      },
    ],
  },
  {
    name: "Magazine",
    slug: "magazine",
    i18nKey: "magazine",
    tags: [
      "Editorial",
      "Typography",
      "Layout Design",
      "Magazine Design",
      "Digital design",
    ],
    thumbnail: {
      src: "/images/editorial/magazine.jpg",
      position: "object-center",
    },
    gridClass: "md:col-span-2 md:row-span-2",
    hoverBg: "bg-blue-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/editorial/magazine.jpg",
        alt: "Magazine cover",
      },
      {
        type: "full",
        src: "/images/editorial/magazine/magazine_1.jpg",
        alt: "Magazine spread 1",
      },
      {
        type: "full",
        src: "/images/editorial/magazine/magazine_2.jpg",
        alt: "Magazine spread 2",
      },
      {
        type: "full",
        src: "/images/editorial/magazine/IG_feed.jpg",
        alt: "Magazine Instagram feed",
      },
    ],
  },
  {
    name: "Torrechannel.it",
    nameClass: "md:text-2xl",
    slug: "torrechannel",
    i18nKey: "torrechannel",
    tags: ["Branding"],
    thumbnail: { src: "/images/tc/logo.jpg", position: "object-center" },
    gridClass: "md:col-span-1 md:row-span-2",
    hoverBg: "bg-indigo-900/80",
    blocks: [{ type: "full", src: "/images/tc/logo.jpg", alt: "TC.it logo" }],
  },
  {
    name: "Loud",
    slug: "loud",
    i18nKey: "loud",
    tags: ["Campaign", "Layout Design"],
    thumbnail: { src: "/images/loud/cover.jpg", position: "object-left" },
    gridClass: "md:col-span-3 md:row-span-2",
    hoverBg: "bg-orange-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/loud/cover.jpg",
        alt: "Loud campaign cover",
      },
      {
        type: "full",
        src: "/images/loud/city.jpg",
        alt: "Loud campaign cover",
      },
      {
        type: "full",
        src: "/images/loud/group.jpg",
        alt: "Loud campaign cover",
      },
      {
        type: "full",
        src: "/images/loud/pinbutton.jpg",
        alt: "Loud campaign cover",
      },
    ],
  },

  {
    name: "Shine & Shield",
    slug: "shineshield",
    i18nKey: "shineshield",
    tags: ["Branding", "Visual identity", "Logo design", "Collateral"],
    thumbnail: {
      src: "/images/shineshield/glass.png",
      position: "object-center",
    },
    gridClass: "md:col-span-2 md:row-span-2",
    hoverBg: "bg-gray-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/shineshield/cover.png",
        alt: "Shine & Shield cover",
      },
      {
        type: "full",
        src: "/images/shineshield/glass.png",
        alt: "Shine & Shield glass mockup",
      },
      {
        type: "full",
        src: "/images/shineshield/image-group.jpg",
        alt: "Shine & Shield black mockup",
      },
    ],
  },
  {
    name: "Fantasy Book",
    slug: "fantasy-book",
    i18nKey: "fantasybook",
    tags: ["Book design", "Typography"],
    thumbnail: {
      src: "/images/editorial/book/cover.jpg",
      position: "object-center",
    },
    gridClass: "md:col-span-3 md:row-span-2",
    hoverBg: "bg-teal-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/editorial/book/cover.jpg",
        alt: "Fantasy book cover",
      },
      {
        type: "full",
        src: "/images/editorial/book/frontespizio.jpg",
        alt: "Fantasy book frontispiece",
      },
      {
        type: "full",
        src: "/images/editorial/book/capitolo.jpg",
        alt: "Fantasy book chapter page",
      },
    ],
  },
  {
    name: "Stasifood",
    slug: "stasifood",
    i18nKey: "stasifood",
    tags: ["Packaging", "Rebranding", "Visual identity", "Logo design"],
    thumbnail: {
      src: "/images/stasi/packaging.jpg",
      position: "object-center",
    },
    gridClass: "md:row-span-2 md:col-span-3",
    hoverBg: "bg-amber-900/80",
    blocks: [
      {
        type: "full",
        src: "/images/stasi/packaging.jpg",
        alt: "Stasifood packaging",
      },
      {
        type: "split",
        images: [
          { src: "/images/stasi/logo.jpg", alt: "Stasifood logo" },
          { src: "/images/stasi/seal.jpg", alt: "Stasifood seal" },
          { src: "/images/stasi/backer.jpg", alt: "Stasifood backer card" },
        ],
      },
    ],
  },
];

/** Look up a project by slug. Returns undefined if not found. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

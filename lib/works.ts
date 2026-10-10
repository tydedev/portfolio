type LayoutItem = {
  type: "image" | "text";
  src?: string;
  col: number;
  start: number;
};

type FormattingWork = {
  slug: string;
  name: Record<"it" | "en", string>;
  translations: Record<
    "it" | "en",
    {
      bold_text: string;
      text: string;
    }
  >;
  layout: LayoutItem[];
};


export const formattingWorks: FormattingWork[] = [
  {
    slug: "alice-in-wonderland",
    name: {
      it: "Alice nel Paese delle Meraviglie",
      en: "Alice in Wonderland",
    },
    translations: {
      it: {
        bold_text: "Progetto editoriale personale.",
        text: "Studio di impaginazione per un'edizione illustrata di Alice nel Paese delle Meraviglie di Lewis Carroll.",
      },
      en: {
        bold_text: "Personal editorial design project.",
        text: "Layout study for an illustrated edition of Lewis Carroll's Alice's Adventures in Wonderland.",
      },
    },
    layout: [
      {
        type: "image",
        src: "/images/editorial/experimentation/Alice-in-wonderland-chapter-opener.webp",
        col: 1,
        start: 1,
      },
      {
        type: "image",
        src: "/images/editorial/experimentation/Alice-in-wonderland-page.webp",
        col: 1,
        start: 2,
      },
      {
        type: "text",
        col: 2,
        start: 3,
      },
    ],
  },
  {
    slug: "dracula",
    name: {
      it: "Dracula",
      en: "Dracula",
    },
    translations: {
      it: {
        bold_text: "Progetto editoriale personale.",
        text: "Studio di impaginazione per un'edizione speciale a colori di Dracula di Bram Stoker, pensata per una possibile pubblicazione hardcover.",
      },
      en: {
        bold_text: "Personal editorial design project.",
        text: "Layout study for a full-color special edition of Bram Stoker's Dracula, conceived as a potential hardcover publication.",
      },
    },
    layout: [
      {
        type: "text",
        col: 1,
        start: 2,
      },
      {
        type: "image",
        src: "/images/editorial/experimentation/dracula-chapter-opener.jpg",
        col: 1,
        start: 1,
      },
      {
        type: "image",
        src: "/images/editorial/experimentation/dracula-spread.jpg",
        col: 1,
        start: 3,
      },
      {
        type: "image",
        src: "/images/editorial/experimentation/dracula-spread2.jpg",
        col: 1,
        start: 4,
      },
    ],
  },
];

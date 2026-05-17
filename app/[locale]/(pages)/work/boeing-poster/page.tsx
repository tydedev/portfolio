import { Works } from "@/components/Works";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default function BoeingPage() {
  const t = useTranslations("Works.Boeing");

  return (
    <section className="md:grid md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-3 mb-10 md:mb-20 leading-tight">
        <p className="font-semibold">Poster design</p>
        <p className="font-semibold">Editable Figma template</p>
      </div>
      <div className="md:col-span-3 text-sm leading-tight mb-10">
        <h1 className="font-semibold">{t("title")}</h1>
        <p>{t("intro")}</p>
      </div>

      <div className="md:grid md:col-span-12 gap-6 md:grid-cols-12 flex flex-col">
        {/* LEFT COLUMN */}
        <div className="md:col-span-5 relative h-full ">
          <Image
            src="/images/misc/boeing-poster.jpg"
            width={1200}
            height={1200}
            alt="Editorial design"
            className="w-full h-auto border border-muted-foreground/7"
            priority
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 md:grid grid-rows-2 gap-6 grid-cols-4">
          <p className="w-full h-full text-sm col-span-3 py-4">{t("detail")}</p>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Works.Boeing",
  });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/works/boeing-poster`,
      languages: {
        it: "https://tydedev.it/it/works/boeing-poster",
        en: "https://tydedev.it/en/works/boeing-poster",
        "x-default": "https://tydedev.it",
      },
    },

    keywords: [
      "graphic design",
      "web development",
      "portfolio",
      "brand identity",
    ],
  };
}

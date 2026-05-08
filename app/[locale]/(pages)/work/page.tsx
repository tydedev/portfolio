import { Works } from "@/components/Works";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function WorksPage() {
  const t = useTranslations("Works");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-7 mb-10 md:mb-20 col-span-12">
        <p className="font-semibold text-base leading-relaxed">{t("intro")}</p>
      </div>
      <Works />
    </section>
  );
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Works",
  });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/works`,
      languages: {
        it: "https://tydedev.it/it/works",
        en: "https://tydedev.it/en/works",
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

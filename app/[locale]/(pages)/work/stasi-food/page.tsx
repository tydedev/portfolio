import { Works } from "@/components/Works";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default function StasiPage() {
  const t = useTranslations("Works.Stasi");

  return (
    <section className="md:grid md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-3 mb-10 md:mb-20 leading-tight">
        <p className="font-semibold">Rebranding concept</p>
        <p className="font-semibold">Visual identity</p>
        <p className="font-semibold">Logo design</p>
        <p className="font-semibold">Packaging</p>
      </div>
      <div className="md:col-span-3 text-sm leading-tight mb-10">
        <h1 className="font-semibold">{t("title")}</h1>
        <p>{t("intro")}</p>
      </div>

      <div className="md:grid md:col-span-12 gap-6 md:grid-cols-12 flex flex-col">
        {/* LEFT COLUMN */}
        <div className="md:col-span-5 relative md:max-h-[900px] min-h-[300px]">
          <Image
            src="/images/stasi/packaging.jpg"
            fill
            className="object-cover"
            alt="Bascorp shirt mockup"
            priority
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 md:grid grid-rows-2 gap-6 grid-cols-4">
          <Image
            src="/images/stasi/backer.jpg"
            width={1200}
            height={800}
            className="object-cover w-full h-full col-span-full"
            alt="Stasifood backer"
            priority
          />

          <p className="w-full h-full text-sm col-span-3 py-4">{t("detail")}</p>
        </div>
        <div className="md:col-span-12 md:grid grid-cols-6 gap-6">
          <Image
            src="/images/stasi/logo.jpg"
            width={1200}
            height={800}
            className="object-cover max-w-full h-full col-span-3"
            alt="Bascorp stationery"
            priority
          />

          <Image
            src="/images/stasi/seal.jpg"
            width={1200}
            height={800}
            className="object-cover max-w-full h-full col-span-3"
            alt="Bascorp poster"
            priority
          />
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
    namespace: "Works.Stasi",
  });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/works/stasi-food`,
      languages: {
        it: "https://tydedev.it/it/works/stasi-food",
        en: "https://tydedev.it/en/works/stasi-food",
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

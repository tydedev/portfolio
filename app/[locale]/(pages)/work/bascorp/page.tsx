import { Works } from "@/components/Works";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default function BascorpPage() {
  const t = useTranslations("Works.Bascorp");

  return (
    <section className="md:grid md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-3 mb-10 md:mb-20 leading-tight">
        <p className="font-semibold">Visual identity</p>
        <p className="font-semibold">Logo design</p>
        <p className="font-semibold">Web design & development</p>
        <p className="font-semibold">Collateral</p>
      </div>
      <div className="md:col-span-3 text-sm leading-tight mb-10">
        <h1 className="font-semibold">{t("title")}</h1>
        <p>{t("intro")}</p>
      </div>

      <div className="md:grid md:col-span-12 gap-6 md:grid-cols-12 flex flex-col">
        {/* COVER */}
        <Image
          src="/images/bascorp/cover.png"
          width={1200}
          height={800}
          className="object-contain md:col-span-12 w-full"
          alt="Bascorp visual identity and logo design"
          priority
        />

        {/* LEFT COLUMN */}
        <div className="md:col-span-5 md:grid grid-rows-2 gap-6 flex flex-col">
          <Image
            src="/images/bascorp/stationery.jpg"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            alt="Bascorp stationery"
            priority
          />

          <Image
            src="/images/bascorp/poster.jpg"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            alt="Bascorp poster"
            priority
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-7 relative md:min-h-[900px] min-h-[300px]">
          <Image
            src="/images/bascorp/shirt.jpg"
            fill
            className="object-cover"
            alt="Bascorp shirt mockup"
            priority
          />
        </div>

        {/* LEFT COLUMN */}
        <div className="md:col-span-8 relative md:min-h-[900px] min-h-[300px]">
          <Image
            src="/images/bascorp/site.jpg"
            fill
            className="object-cover"
            alt="Bascorp shirt mockup"
            priority
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 md:grid grid-rows-2 gap-6 grid-cols-4">
          <Image
            src="/images/bascorp/mobile.jpg"
            width={1200}
            height={800}
            className="object-cover w-full h-full col-span-full"
            alt="Bascorp stationery"
            priority
          />

          <p className="w-full h-full text-sm col-span-2 py-4">{t("detail")}</p>
        </div>
        <div className="md:col-span-12 md:grid grid-cols-3 gap-6 flex flex-col">
          <Image
            src="/images/bascorp/flyer.jpg"
            width={1200}
            height={800}
            className="object-cover max-w-full h-full border border-muted-foreground/5"
            alt="Bascorp stationery"
            priority
          />

          <Image
            src="/images/bascorp/flyer_2.jpg"
            width={1200}
            height={800}
            className="object-cover max-w-full h-full"
            alt="Bascorp poster"
            priority
          />
          <Image
            src="/images/bascorp/flyer_1.jpg"
            width={1200}
            height={800}
            className="object-cover max-w-full h-full"
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
    namespace: "Works.Bascorp",
  });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/works/bascorp`,
      languages: {
        it: "https://tydedev.it/it/works/bascorp",
        en: "https://tydedev.it/en/works/bascorp",
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

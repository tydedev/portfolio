import { Locale, useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import Script from "next/script";
import { Product, WithContext } from "schema-dts";
import Image from "next/image";

const locale = await getLocale();
const t = await getTranslations({
  locale: locale as Locale,
  namespace: "Services.EpubConversion",
});

const jsonLd: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: t("intro"),
  description: t("description"),
  brand: {
    "@type": "Brand",
    name: "Tydedev",
  },
  category: "Digital Publishing Services",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://tydedev.it/services/epub-conversion",
  },
};

export default function EpubPage() {
  const t = useTranslations("Services.EpubConversion");

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
        {/* INTRO */}
        <div className="md:col-span-full mb-10 md:mb-20 col-span-full">
          <h1 className="font-semibold text-base leading-relaxed">
            {t("intro")}
          </h1>
        </div>

        <div className="col-span-full md:col-span-3">
          <p className="text-sm">{t("info1")}</p>
        </div>

        <div className="col-span-full md:col-span-3">
          <p className="text-sm">{t("info2")}</p>
        </div>

        <div className="col-span-full row-span-2 md:row-start-2 md:col-start-8 relative overflow-hidden min-h-50">
          <Image
            src="/images/kindle.jpg"
            alt="Epub"
            fill
            className="object-cover w-full h-auto"
            unoptimized
            priority
          />
        </div>

        <div className="col-span-full md:col-span-3 md:col-start-4">
          <p className="text-sm font-semibold">{t("ideal_for")}</p>
        </div>

        <div className="col-span-full md:col-span-3 font-semibold text-2xl md:text-3xl tracking-tight leading-none">
          <p className="text-md">{t("contact")}</p>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Services.EpubConversion",
  });

  return {
    title: t("intro"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/services/epub-conversion`,
    },

    keywords: [
      "graphic design",
      "web development",
      "siti web torre del greco",
      "design torre del greco",
      "logo torre del greco",
      "portfolio",
      "brand identity",
      "branding",
      "ebook conversion",
      "epub conversion",
      "digital publishing",
      "logo design",
      "responsive web design",
      "torre del greco",
    ],
  };
}

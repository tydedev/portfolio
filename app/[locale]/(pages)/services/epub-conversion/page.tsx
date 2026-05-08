import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { Product, WithContext } from "schema-dts";
import Image from "next/image";

export default function EpubPage() {
  const t = useTranslations("Services.EpubConversion");

  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t("intro"),
    description: t("description"),
    brand: {
      "@type": "Brand",
      name: "Tydedev",
    },
    image: "https://tydedev.it/images/kindle.jpg",
    category: "Digital Publishing Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://tydedev.it/services/epub-conversion",
    },
  };

  return (
    <>
      <Script
        id="jsonld-epub-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
        {/* INTRO */}
        <div className="col-span-full mb-10 md:mb-20">
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

        <div className="col-span-full md:col-span-4 md:col-start-8 relative overflow-hidden min-h-50">
          <Image
            src="/images/kindle.jpg"
            alt="Epub service"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="col-span-full md:col-span-3 md:col-start-4">
          <p className="text-sm font-semibold">{t("ideal_for")}</p>
        </div>

        <div className="col-span-full md:col-span-3 font-semibold text-2xl md:text-3xl leading-none">
          <p>{t("contact")}</p>
        </div>
      </section>
    </>
  );
}

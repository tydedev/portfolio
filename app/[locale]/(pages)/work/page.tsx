import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  const t = useTranslations("Works");

  return (
    <section className="md:grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-7 mb-10 md:mb-20 ">
        <h1 className="font-semibold text-base leading-relaxed">
          {t("intro")}
        </h1>
      </div>
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-24">
        {/* PROJECT 01 */}
        <article className="md:col-span-5 space-y-4">
          <Link href="/work/bascorp" className="block group">
            <Image
              src="/images/bascorp/poster.png"
              width={1200}
              height={1600}
              alt="Bascorp visual identity"
              className="w-full h-auto transition-all duration-700 group-hover:opacity-90"
            />
          </Link>

          <div className="space-y-1">
            <h2 className="text-sm font-medium uppercase tracking-wide">
              Bascorp
            </h2>

            <p className="text-sm text-neutral-500 leading-tight">
              Visual Identity · Logo Design · Web Design
            </p>
          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="md:col-span-5 md:col-start-8 md:mt-24 space-y-4">
          <Link href="/work/stasi-food" className="block group">
            <Image
              src="/images/stasi/cover.jpg"
              width={1000}
              height={1000}
              alt="Stasifood packaging design"
              className="w-full h-auto transition-all duration-700 group-hover:opacity-90"
              priority
            />
          </Link>

          <div className="space-y-1">
            <h2 className="text-sm font-medium uppercase tracking-wide">
              Stasifood
            </h2>

            <p className="text-sm text-neutral-500 leading-tight">
              Self-initiated Redesign Concept · Packaging · Brand Identity
            </p>
          </div>
        </article>

        {/* PROJECT 03 */}
        <article className="md:col-span-5 md:col-start-1 space-y-4">
          <Image
            src="/images/personal/freedom.jpg"
            width={1200}
            height={1200}
            alt="Editorial design"
            className="w-full h-auto transition-all duration-700 group-hover:opacity-90 border border-muted-foreground/5"
          />

          <div className="space-y-1">
            <h2 className="text-sm font-medium uppercase tracking-wide">
              April 25
            </h2>

            <p className="text-sm text-neutral-500 leading-tight">
              Poster Design · Art Direction · Personal Project
            </p>
          </div>
        </article>
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

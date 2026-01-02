import Template from "@/components/wordpress/Template";
import Terms from "@/components/wordpress/Terms";
import { templates } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "home.wordpress.templates.busybiz",
  });

  const url = `https://tydedev.it/${locale}/templates/wordpress/busybiz`;

  return {
    title: t("title") + " | Tydedev's Templates",
    description: t("subtitle"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: t("title") + " | Tydedev's Templates",
      description: t("subtitle"),
      url,
    },
  };
}

const BusyBizTemplate = () => {
  const template = templates.find((t) => t.name === "busybiz.title");
  const t = useTranslations("home.wordpress.templates.busybiz");
  return (
    <>
      <Template
        title="BusyBiz"
        heroImage="/images/templates/busybiz/templates.png"
        subtitle={t("subtitle")}
        description={t("description")}
        templateInfo={template?.info}
        price={45}
        href="https://tydedev.gumroad.com/l/busybiz-template"
      />
      <section className="max-w-6xl mx-auto px-6 space-y-5">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-12">
          <div className="max-w-md space-y-4">
            <h3 className="text-2xl font-semibold">{t("colorsTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("colorsDescription")}
            </p>
          </div>

          <div className="shrink-0">
            <Image
              src="/images/templates/busybiz/colors.gif"
              alt={t("colorsTitle")}
              width={480}
              height={480}
              className="rounded-xl border border-border/40 shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <div className="shrink-0">
            <Image
              src="/images/templates/busybiz/buttons.png"
              alt={t("variantsTitle")}
              width={480}
              height={480}
              className="rounded-xl border border-border/40 shadow-md"
            />
          </div>
          <div className="max-w-md space-y-4">
            <h3 className="text-2xl font-semibold">{t("variantsTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("variantsDescription")}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-12">
          <div className="max-w-md space-y-4">
            <h3 className="text-2xl font-semibold">{t("patternsTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("patternsDescription")}
            </p>
          </div>

          <div className="shrink-0">
            <Image
              src="/images/templates/busybiz/plans.png"
              alt={t("patternsTitle")}
              width={480}
              height={480}
              className="rounded-xl border border-border/40 shadow-md"
            />
          </div>
        </div>
        <Terms />
      </section>
    </>
  );
};

export default BusyBizTemplate;

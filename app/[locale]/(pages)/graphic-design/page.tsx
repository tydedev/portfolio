import { BrandingCard } from "@/components/cards/BrandingCard";
import { LogoCard } from "@/components/cards/LogoCard";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "services.graphic.meta",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const GraphicDesignPage = () => {
  const t = useTranslations("services.graphic");
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 mx-auto py-10 gap-y-5">
      <h1 className="text-3xl font-semibold text-center mb-10">{t("title")}</h1>
      <h2 className="text-2xl font-semibold">
        {t.rich("brandLogoQuestion", {
          cyan: (text: React.ReactNode) => (
            <span className="text-cyan-500">{text}</span>
          ),
          fuchsia: (text: React.ReactNode) => (
            <span className="text-fuchsia-500">{text}</span>
          ),
        })}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between mt-10 gap-5">
        <BrandingCard />
        <LogoCard />
      </div>
      <div className="flex flex-col items-center justify-center py-10 text-2xl text-center">
        <p>{t("goodLogo")}</p>
        <p>{t("goodBrand")}</p>
      </div>
    </div>
  );
};

export default GraphicDesignPage;

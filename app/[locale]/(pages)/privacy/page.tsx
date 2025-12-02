import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const paragraphs = [
  {
    title: "data_title",
    text: "data_description",
  },
  {
    title: "cookie_title",
    text: "cookie_description",
  },
  {
    title: "finality_title",
    text: "finality_description",
  },
];

const PrivacyPolicy = () => {
  const t = useTranslations("privacy");
  return (
    <div className="h-full flex-col max-w-2xl w-full mx-auto py-10 p-6">
      <h1 className="text-center text-xl md:text-3xl font-semibold">
        Privacy Policy
      </h1>
      <div className="max-w-4xl mx-auto px-4 sm:px-0 py-15 w-full flex flex-col h-full">
        {paragraphs.map(p => (
          <div key={t(p.title)}>
            <h2 className="text-lg md:text-xl font-semibold py-2">
              {t(p.title)}
            </h2>
            <p className="text-sm md:text-base">{t(p.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

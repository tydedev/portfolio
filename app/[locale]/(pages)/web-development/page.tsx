import WebDevCard from "@/components/cards/WebDevCard";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "services.webdev.meta",
  });

  const url = `https://tydedev.it/${locale}/web-development`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
    },
  };
}

const WebDevelopmentPage = () => {
  const t = useTranslations("services.webdev");

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 mx-auto py-10 gap-y-5">
      <h1 className="text-3xl font-semibold text-center mb-10">{t("title")}</h1>

      <h2 className="text-2xl font-semibold">
        {t.rich("webQuestion", {
          cyan: (text: React.ReactNode) => (
            <span className="text-cyan-500">{text}</span>
          ),
          fuchsia: (text: React.ReactNode) => (
            <span className="text-fuchsia-500">{text}</span>
          ),
        })}
      </h2>

      <div className="w-full grid grid-cols-1 mt-10 gap-5">
        <WebDevCard />
      </div>

      <div className="flex flex-col items-center justify-center py-10 max-w-xl text-2xl text-center">
        <p>
          {t.rich("webGood", {
            b: (text) => <span className="font-semibold">{text}</span>,
          })}
        </p>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;

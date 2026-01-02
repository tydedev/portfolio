import TemplateGrid from "@/components/wordpress/TemplateGrid";
import { getTranslations } from "next-intl/server";
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "home.wordpress.meta",
  });

  const url = `https://tydedev.it/${locale}/templates/wordpress`;

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

const TemplatesPage = () => {
  return <TemplateGrid />;
};

export default TemplatesPage;

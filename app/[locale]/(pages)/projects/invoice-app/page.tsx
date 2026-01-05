import ProjectDetails from "@/components/portfolio/project";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobeillustrator,
  SiElectron,
} from "react-icons/si";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "projects.invoice-app.meta",
  });
  const url = `https://tydedev.it/${locale}/projects/invoice-app`;

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

const InvoiceApp = () => {
  const t = useTranslations("projects.invoice-app");

  return (
    <ProjectDetails
      title={t("title")}
      subtitle={t("description")}
      heroImage="/images/projects/bascorp/bascorp_invoicer_app.png"
      overview={t("overview")}
      problem={t("problem")}
      solution={t("solution")}
      result={t("result")}
      skills={[
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Electron", icon: SiElectron },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]}
      liveUrl="https://bascorp.it"
    />
  );
};

export default InvoiceApp;

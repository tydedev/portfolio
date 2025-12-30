import ProjectDetails from "@/components/portfolio/project";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiAdobeillustrator } from "react-icons/si";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "projects.bascorp.meta",
  });
  const url = `https://tydedev.it/${locale}/projects/bascorp`;

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

const BascorpDetails = () => {
  const t = useTranslations("projects.bascorp");

  return (
    <ProjectDetails
      title={t("title")}
      subtitle={t("description")}
      heroImage="/images/projects/bascorp/project_bascorp_preview.png"
      overview={t("overview")}
      problem={t("problem")}
      solution={t("solution")}
      branding={{
        logo: "/images/projects/bascorp/bascorp_logo.svg",
        description: t("brandingDescription"),
        colors: ["#ef4136", "#020617", "#f8fafc"],
      }}
      result={t("result")}
      skills={[
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator },
      ]}
      liveUrl="https://bascorp.it"
    />
  );
};

export default BascorpDetails;

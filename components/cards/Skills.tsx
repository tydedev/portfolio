import SkillCard from "@/components/cards/SkillCard";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const Skills = () => {
  const t = useTranslations("skills");
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-4"
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      whileInView={{ transform: "translateY(0px)", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SkillCard
        badge={t("UX.badge")}
        title={t("UX.title")}
        text={t.rich("UX.description", {
          medium: (text) => <span className="font-medium">{text}</span>,
          italic: (text) => <span className="italic">{text}</span>,
        })}
        color="yellow"
      />
      <SkillCard
        badge={t("WebDevelopment.badge")}
        title={t("WebDevelopment.title")}
        text={t.rich("WebDevelopment.description", {
          medium: (text) => <span className="font-medium">{text}</span>,
          italic: (text) => <span className="italic">{text}</span>,
        })}
        color="cyan"
      />
      <SkillCard
        badge={t("BrandIdentity.badge")}
        title={t("BrandIdentity.title")}
        text={t.rich("BrandIdentity.description", {
          medium: (text) => <span className="font-medium">{text}</span>,
          italic: (text) => <span className="italic">{text}</span>,
        })}
        color="fuchsia"
      />
    </motion.div>
  );
};

export default Skills;

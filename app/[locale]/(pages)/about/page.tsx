import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";

const skills = [
  "Brand Identity",
  "Editorial Design",
  "Typography Systems",
  "Grid Systems",
  "Print & Digital Design",
  "Social Media Visual Systems",
  "UI Design",
  "Web Design",
];

const tools = [
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Figma",
  "React, Next.js",
  "HTML / CSS",
  "WordPress",
];

export default function ProfilePage() {
  const t = useTranslations("Profile");

  const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maria Basso",
    alternateName: "Tydedev",
    url: "https://tydedev.it/profile",
    image: "https://tydedev.it/logo.svg",
    jobTitle: "Graphic Designer, Web Developer & eBook Specialist",
    sameAs: [
      "https://www.instagram.com/tydedev",
      "https://www.behance.net/tydedev",
      "https://www.linkedin.com/in/maria-basso-b46a12370/",
      "https://tydedev.it",
    ],
    knowsAbout: [
      "Graphic Design",
      "Brand Identity",
      "Web Design",
      "Frontend Development",
      "Next.js",
      "UI/UX Design",
      "Typography",
      "Digital Publishing",
      "EPUB Design",
      "Accessibility",
      "SEO",
    ],
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-9 gap-6 max-w-300 mx-auto w-full py-20 px-4">
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      {/* INTRO */}
      <div className="md:col-span-9 mb-20">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
      </div>
      {/* EDUCATION */}
      <div className="md:col-span-5 text-lg">
        <h2 className="text-2xl font-semibold">{t("education")}</h2>
        <ul>
          <li>
            <span>{t("academy")} — </span>
            <span className="font-semibold">{t("academy_text")}</span> · 2011
          </li>
          <li>
            <span>{t("school")} — </span>
            <span className="font-semibold">{t("school_text")}</span> · 2010
          </li>
        </ul>
        {/* CERTIFICATIONS */}
        <h2 className="text-2xl font-semibold mt-[1.5rem]">
          {t("certifications")}
        </h2>
        <ul>
          <li>
            <span>Grammarly — </span>
            <span className="font-semibold">Business Writing</span>
          </li>
          <li>
            <span>Adobe — </span>
            <span className="font-semibold">InDesign Essentials</span>
          </li>
          <li>
            <span>Adobe — </span>
            <span className="font-semibold">Graphic Design</span>
          </li>
        </ul>
        {/* LANGUAGES */}
        <h2 className="text-2xl font-semibold mt-[1.5rem]">{t("languages")}</h2>
        <ul>
          <li>
            <span>{t("italian")}</span>
          </li>
          <li>
            <span>{t("english")}</span>
          </li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="md:col-span-2 md:col-start-6">
        <h2 className="text-2xl font-semibold">{t("skills")}</h2>
        <ul className="flex flex-col text-lg">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* TOOLS */}
      <div className="md:col-span-2 ">
        <h2 className="text-2xl font-semibold">{t("tools")}</h2>
        <ul className="flex flex-col text-lg">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-4 pt-6 font-bold">
        <p className="flex flex-col text-3xl">{t("availability")}</p>
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
    namespace: "Profile",
  });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://tydedev.it/${locale}/about`,
      languages: {
        it: "https://tydedev.it/it/about",
        en: "https://tydedev.it/en/about",
        "x-default": "https://tydedev.it/about",
      },
    },
  };
}

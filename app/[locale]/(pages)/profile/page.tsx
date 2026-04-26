import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default function ProfilePage() {
  const t = useTranslations("Profile");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full mt-40">
      {/* INTRO */}
      <div className="md:col-span-7 mb-20">
        <p className="font-semibold text-base leading-relaxed">{t("intro")}</p>
      </div>

      {/* CONTATTI */}
      <div className="col-span-full grid md:grid-cols-12 gap-6 md:mb-30 mb-10 text-sm">
        <div className="md:col-span-2 md:col-start-1">
          <h2 className="font-semibold">{t("contacts")}</h2>
        </div>

        <div className="md:col-span-2 md:col-start-4">
          <p>maria.basso.td@gmail.com</p>
          <p>+39 320 533 2994</p>
        </div>

        <div className="md:col-span-2 md:col-start-7 flex flex-col">
          <Link href="https://www.linkedin.com/in/maria-basso-b46a12370/">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/tydedev/">Instagram</Link>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <p>{t("availability")}</p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="col-span-full grid md:grid-cols-12 gap-6 md:mb-30 mb-10 text-sm">
        <div className="md:col-span-2 md:col-start-1">
          <h2 className="font-semibold">{t("skills")}</h2>
        </div>

        <div className="md:col-span-2 md:col-start-4">
          <ul className="space-y-1">
            <li>Adobe Creative Suite</li>
            <li>Microsoft Office</li>
            <li>Blender 3D</li>
            <li>Notion</li>
          </ul>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <ul className="space-y-1">
            <li>React.js & Next.js</li>
            <li>Layout Design</li>
            <li>Logo Design</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <ul className="space-y-1">
            <li>Problem Solving</li>
            <li>Project ownership</li>
            <li>AI-assisted copywriting</li>
            <li>Wireframing</li>
          </ul>
        </div>
      </div>

      {/* EDUCAZIONE */}
      <div className="col-span-full grid md:grid-cols-12 gap-6 md:mb-30 mb-10 text-sm">
        <div className="md:col-span-2 md:col-start-1">
          <h2 className="font-semibold">{t("education")}</h2>
        </div>

        <div className="md:col-span-2 md:col-start-4">
          <p className="font-semibold">{t("certifications")}</p>
          <p>React.js</p>
          <p>Color Design</p>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <p className="font-semibold">{t("academy_text")}</p>
          <p>{t("academy")}</p>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <p className="font-semibold">{t("school_text")}</p>
          <p>{t("school")}</p>
        </div>
      </div>

      {/* ATTIVITÀ */}
      <div className="col-span-full grid md:grid-cols-12 gap-6 md:mb-30 mb-10 text-sm">
        <div className="md:col-span-2 md:col-start-1">
          <h2 className="font-semibold">{t("activities")}</h2>
        </div>

        <div className="md:col-span-2 md:col-start-4 space-y-3">
          <p>{t("activity_1")}</p>
          <p>{t("activity_2")}</p>
        </div>

        <div className="md:col-span-2 md:col-start-7 space-y-3">
          <p>{t("activity_3")}</p>
          <p>{t("activity_4")}</p>
        </div>
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
    canonical: `https://tydedev.it/${locale}/profile`,
    keywords: [
      "graphic design",
      "web development",
      "siti web torre del greco",
      "design torre del greco",
      "logo torre del greco",
      "portfolio",
      "brand identity",
      "logo design",
      "responsive web design",
      "torre del greco",
    ],
  };
}

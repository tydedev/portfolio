import { useTranslations } from "next-intl";

const Resume = () => {
  const t = useTranslations("Profile");

  return (
    <section
      id="profile"
      className="mx-auto w-full bg-stone-900 px-4 py-24 text-stone-100 md:px-0 md:py-40"
    >
      <div className="mx-auto max-w-360">
        {/* HEADER */}
        <header className="border-t border-stone-700 pt-4">
          <div className="flex items-start justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-stone-400">
              Profile
            </span>

            <span className="text-xs uppercase tracking-[0.18em] text-stone-400">
              CV
            </span>
          </div>

          <h2 className="mt-20 font-heading text-[clamp(5rem,15vw,14rem)] font-medium uppercase leading-[0.68] tracking-[-0.08em]">
            {t("title")}
          </h2>

          <p className="mt-20 max-w-5xl text-[clamp(1.75rem,3.5vw,4rem)] leading-[1.02] tracking-[-0.025em] text-stone-200">
            {t("description")}
          </p>
        </header>

        {/* INFORMATION */}
        <div className="mt-40">
          {/* TOOLS */}
          <div className="grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("tools")}
              </h3>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-lg md:col-span-7 md:col-start-6 md:mt-0 md:text-xl">
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>React / Next.js</li>
              <li>HTML / CSS</li>
              <li>WordPress</li>
            </ul>
          </div>

          {/* LANGUAGES */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("languages")}
              </h3>
            </div>

            <div className="mt-10 md:col-span-7 md:col-start-6 md:mt-0">
              <div className="flex items-baseline justify-between border-b border-stone-700 py-4">
                <span className="text-xl">Italiano</span>
                <span className="text-sm text-stone-400">{t("italian")}</span>
              </div>

              <div className="flex items-baseline justify-between py-4">
                <span className="text-xl">English</span>
                <span className="text-sm text-stone-400">{t("english")}</span>
              </div>
            </div>
          </div>

          {/* CORE SKILLS */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("skills")}
              </h3>
            </div>

            <div className="mt-10 flex flex-col font-heading text-3xl leading-[1.05] tracking-tight md:col-span-7 md:col-start-6 md:mt-0 md:text-4xl">
              <span>Brand Identity</span>
              <span>Editorial Design</span>
              <span>Desktop Publishing</span>
              <span>Web Design</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("education")}
              </h3>
            </div>

            <div className="mt-10 md:col-span-7 md:col-start-6 md:mt-0">
              <div className="border-b border-stone-700 pb-8">
                <h4 className="font-heading text-2xl md:text-3xl">
                  {t("academy")}
                </h4>

                <p className="mt-2 text-stone-400">{t("academy_text")}</p>
              </div>

              <div className="pt-8">
                <h4 className="font-heading text-2xl md:text-3xl">
                  {t("school")}
                </h4>

                <p className="mt-2 text-stone-400">{t("school_text")}</p>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("certifications")}
              </h3>
            </div>

            <div className="mt-10 md:col-span-7 md:col-start-6 md:mt-0">
              <p className="font-heading text-2xl md:text-3xl">
                Adobe Certification
              </p>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                Availability
              </h3>
            </div>

            <div className="mt-10 md:col-span-7 md:col-start-6 md:mt-0">
              <p className="max-w-2xl text-xl leading-[1.15] text-stone-300 md:text-2xl">
                {t("availability")}
              </p>
            </div>
          </div>
          {/* ACTIVITIES */}
          <div className="mt-32 grid grid-cols-1 border-t border-stone-700 pt-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight">
                {t("activity")}
              </h3>
            </div>

            <div className="mt-10 md:col-span-7 md:col-start-6 md:mt-0">
              <p className="max-w-2xl text-xl leading-[1.15] text-stone-300 md:text-2xl">
                {t("activity_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

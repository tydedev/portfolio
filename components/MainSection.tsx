"use client";

import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("home");
  return (
    <section className="relative min-h-screen h-full w-full px-4 md:min-h-[calc(100vh-120px)] md:px-4">
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-6 md:grid-cols-12">
        {/* HERO */}
        <h1 className="pt-[25vh] text-5xl font-heading font-bold uppercase md:leading-[0.8] md:col-span-12 md:text-8xl">
          {t("first_field")}<br /> {t("second_field")}
        </h1>
      
        {/* INTRO */}
        <div className="mt-12 grid grid-cols-1 gap-8 font-semibold md:col-span-12 md:mt-20 md:grid-cols-12 md:gap-6">
          <p className="leading-tight md:col-span-3"> {t("first_text")}</p>
          <p className="leading-tight md:col-span-4">{t("second_text")}</p>
        </div>
      </div>
    </section>
  );
};
export default MainSection;

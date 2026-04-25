import { Works } from "@/components/Works";
import { useTranslations } from "next-intl";

export default function WorksPage() {
  const t = useTranslations("Works");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full my-20 md:my-40 px-4 md:px-0">
      {/* INTRO */}
      <div className="md:col-span-7 mb-10 md:mb-20 col-span-12">
        <p className="font-semibold text-base leading-relaxed">{t("intro")}</p>
      </div>
      <Works />
    </section>
  );
}

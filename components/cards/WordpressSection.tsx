import { useTranslations } from "next-intl";
import { FaWordpress } from "react-icons/fa";

const WordpressSection = () => {
  const t = useTranslations("home.wordpress");
  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap-7">
      <FaWordpress className="md:w-100 md:h-100 h-40 w-40" />
      <div className="space-y-5">
        <h2 className="md:text-3xl font-semibold text-2xl text-center md:text-left">
          {t.rich("title", {
            cyan: (text) => <span className="text-cyan-500">{text}</span>,
          })}
        </h2>
        <p className="text-lg text-center md:text-left">{t("description")}</p>
      </div>
    </div>
  );
};

export default WordpressSection;

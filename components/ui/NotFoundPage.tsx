import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFoundPage = () => {
  const t = useTranslations("NotFound");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4">
      <h1 className="text-2xl uppercase font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
      <Link
        href="/"
        className="mt-3 text-sm underline-offset-4 underline font-semibold"
      >
        {t("link")}
      </Link>
    </div>
  );
};

export default NotFoundPage;

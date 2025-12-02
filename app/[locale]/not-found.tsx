import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("notFound");
  return (
    <section className="flex flex-col items-center justify-center flex-1 md:max-w-2xl px-6 mx-auto py-10">
      <CircleX size={100} strokeWidth={2} className="text-fuchsia-500 mb-10" />
      <h1 className="text-2xl md:text-3xl font-semibold text-center">
        {t("title")}
      </h1>
      <p>{t("description")}</p>
      <Button asChild className="mt-5" variant={"gradient"}>
        <Link href="/">{t("button")}</Link>
      </Button>
    </section>
  );
};

export default NotFound;

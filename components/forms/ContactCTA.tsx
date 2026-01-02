import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ContactCTA = () => {
  const t = useTranslations("CTA.contact");
  const router = useRouter();

  function handleClick() {
    router.push("/contacts");
  }
  return (
    <section className="w-full flex flex-col items-center justify-center mt-10 gap-y-3 bg-linear-to-b from-cyan-500/10 to-transparent pt-10">
      <h3 className="text-fuchsia-500 text-3xl font-medium">{t("title")}</h3>
      <p className="text-lg">{t("description")}</p>
      <Button variant={"gradient"} onClick={handleClick}>
        {t("button")}
      </Button>
    </section>
  );
};

export default ContactCTA;

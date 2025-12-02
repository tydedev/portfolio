import ContactForm from "@/components/forms/ContactForm";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations({
    locale: "it",
    namespace: "contact.meta",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const ContactPage = () => {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col items-center justify-center flex-1 md:max-w-2xl px-6 mx-auto py-10">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="text-center py-7 text-muted-foreground">
        {t("description")}
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

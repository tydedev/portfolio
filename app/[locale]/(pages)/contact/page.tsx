import { ContactForm } from "@/components/contact-form";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactPage() {
  const t = useTranslations("ContactForm");
  return (
    <section className="w-full max-w-300 mx-auto px-4 h-auto flex items-start py-20 justify-center flex-col gap-8">
      <h1 className="text-6xl font-bold font-heading">{t("title")}</h1>
      <div className="md:grid md:grid-cols-4 gap-8 w-full font-semibold">
        <div className="md:col-span-2 flex flex-col gap-4 mb-8 md:mb-0">
          <p className="text-lg">
            {t.rich("description", {
              a: (chunks) => (
                <a
                  href="mailto:example@rossi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p className="text-lg">
            {t.rich("mailTo", {
              a: (chunks) => (
                <Link
                  href="mailto:maria.basso.td@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline font-semibold"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col items-end justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata() {
  return {
    title: "Contact - Tydedev Portfolio",
    description: "Get in touch with Tydedev for collaborations and inquiries.",
  };
}

import Link from "next/link";
import { useLocale } from "next-intl";

const FormattingCTA = () => {
  const locale = useLocale();

  const text =
    locale === "it"
      ? {
          title: "Hai bisogno di aiuto con il tuo libro?",
          description:
            "Dalla formattazione degli interni alla preparazione dei file per la pubblicazione, ti aiuto a trasformare il tuo manoscritto in un libro pronto per la stampa o la distribuzione digitale.",
          button: "Scopri il servizio di impaginazione",
          href: "/servizi/impaginazione-libri-autori-case-editrici",
        }
      : {
          title: "Need help formatting your book?",
          description:
            "From interior layout to preparing your files for publication, I'll help you turn your manuscript into a professionally formatted book, ready for print or digital distribution.",
          button: "Explore book formatting",
          href: "/services/book-layout-formatting-typesetting",
        };

  return (
    <section className="w-full bg-neutral-100 px-6 py-12 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-4 font-heading text-2xl font-medium sm:text-3xl">
          {text.title}
        </p>

        <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
          {text.description}
        </p>

        <Link
          href={`/${locale}${text.href}`}
          className="inline-flex items-center justify-center bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          {text.button}
        </Link>
      </div>
    </section>
  );
};

export default FormattingCTA;

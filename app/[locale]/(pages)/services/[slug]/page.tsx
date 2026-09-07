import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { routing } from "@/i18n/routing";
import { getService, services } from "@/lib/services";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.localizedSlugs[locale] ?? service.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: `Services.${service.i18nKey}`,
  });

  return {
    title: `${t("title")} — Tydedev`,
    description: t("description"),
    openGraph: {
      title: `${t("title")} — Tydedev`,
      description: t("description"),
      images: [
        {
          url: `https://tydedev.it/images/og/${service.i18nKey}-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Tydedev`,
      description: t("description"),
      images: [`https://tydedev.it/images/og/${service.i18nKey}-${locale}.jpg`],
    },
  };
}
export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getService(slug);
  if (!project) notFound();

  const t = await getTranslations(`Services.${project.i18nKey}`);
  const items = t.raw("faq.items") as {
    question: string;
    answer: string;
  }[];
  const steps = t.raw("process.steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="md:grid md:grid-cols-10 gap-6 max-w-360 mx-auto w-full py-20 px-4 font-semibold">
      <div className="md:col-span-4 mb-20">
        <h1 className="text-5xl font-bold font-heading">{t("title")}</h1>
      </div>
      <div className="md:col-span-5 md:row-start-2 md:pr-12">
        <p className="text-base">
          {t.rich("description", {
            up: (chunks) => <span className="uppercase">{chunks}</span>,
          })}
        </p>
      </div>
      <div className="md:col-span-5 md:row-start-1 row-span-2 relative">
        <Image
          src="/images/editorial/book/capitolo_cover.jpg"
          alt="Illustration representing the service"
          fill
          className="object-cover object-right"
          unoptimized
        />
      </div>
      <div className="col-span-full mt-20 mb-20">
        <h2 className="text-3xl font-bold mb-12 font-heading">
          {t("process.title")}
        </h2>
        <div className="md:grid md:grid-cols-2 gap-12 space-y-12 md:space-y-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <span className="text-7xl font-bold leading-none shrink-0 font-heading text-red-500 w-28 tabular-nums">
                {step.number}
              </span>
              <div className="pt-2">
                <h3 className="text-xl font-black mb-2 font-heading ">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-5 mt-20 md:mt-0 p-30 pt-0">
        <Image
          src="/images/editorial/book/kindle.jpg"
          alt="Illustration representing the service"
          width={800}
          height={600}
          className="h-auto w-full"
          unoptimized
        />
      </div>
      <div className="col-span-4 mt-20">
        <h2 className="text-3xl font-bold mb-4 font-heading">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible>
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>
                {i + 1}. {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

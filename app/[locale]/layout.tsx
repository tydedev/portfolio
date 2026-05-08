import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";
import notFound from "./not-found";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider, Locale } from "next-intl";
import Script from "next/script";
import { Organization, Person, WithContext } from "schema-dts";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Global",
  });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://tydedev.it"),
    alternates: {
      canonical: `https://tydedev.it/${locale}`,
      languages: {
        ...routing.locales.reduce(
          (acc, loc) => {
            acc[loc] = `https://tydedev.it/${loc}`;
            return acc;
          },
          {} as Record<string, string>,
        ),

        "x-default": "https://tydedev.it",
      },
    },
    keywords: [
      "graphic design",
      "web development",
      "siti web torre del greco",
      "design torre del greco",
      "logo torre del greco",
      "portfolio",
      "brand identity",
      "logo design",
      "responsive web design",
      "torre del greco",
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maria Basso",
    alternateName: "Tydedev",
    url: "https://tydedev.it",
    image: "https://tydedev.it/logo.svg",
    jobTitle: "Graphic Designer, Web Developer & eBook Specialist",
    sameAs: [
      "https://www.instagram.com/tydedev",
      "https://www.behance.net/tydedev",
      "https://www.linkedin.com/in/maria-basso-b46a12370/",
    ],
    knowsAbout: [
      "Graphic Design",
      "Web Design",
      "Frontend Development",
      "Next.js",
      "Brand Identity",
      "ebook conversion",
      "impaginazione ebook",
      "epub creation",
      "layout design",
      "digital publishing",
      "responsive design",
      "user experience",
      "typography",
      "color theory",
      "layout design",
      "SEO",
      "accessibility",
    ],
  };

  const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tydedev",
    url: "https://tydedev.it",
    logo: "https://tydedev.it/logo.png",
    founder: {
      "@type": "Person",
      name: "Maria Basso",
    },
    sameAs: [
      "https://www.instagram.com/tydedev",
      "https://www.behance.net/tydedev",
      "https://github.com/tydedev",
      "https://www.linkedin.com/in/maria-basso-b46a12370/",
    ],
  };
  return (
    <html
      lang={locale}
      className={`${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-auto flex flex-col px-4">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <NextIntlClientProvider>
          <Header />
          <main className="min-h-[calc(100vh-160px)] flex-1 flex flex-col justify-center">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

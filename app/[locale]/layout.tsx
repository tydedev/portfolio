import {
  Instrument_Sans,
  Space_Grotesk,
  Source_Serif_4,
} from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";
import notFound from "./not-found";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider, type Locale } from "next-intl";
import type { Organization, Person, WithContext } from "schema-dts";
import { SITE_URL } from "@/lib/constants";

const workSans = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Global",
  });

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((loc) => [loc, `${SITE_URL}/${loc}`]),
  );

  languages["x-default"] = SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Tydedev",
      url: `${SITE_URL}/${locale}`,
      title: t("title"),
      description: t("description"),
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: routing.locales
        .filter((loc) => loc !== locale)
        .map((loc) => (loc === "it" ? "it_IT" : "en_US")),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Maria Basso",
    url: SITE_URL,
    image: `${SITE_URL}/logo.svg`,
    jobTitle: "Graphic Designer, Web Developer & eBook Specialist",
    sameAs: [
      "https://www.instagram.com/tydedev",
      "https://www.behance.net/tydedev",
      "https://www.linkedin.com/in/maria-basso-b46a12370/",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tydedev",
      url: SITE_URL,
    },
  };

  const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Tydedev",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
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
      className={`${workSans.variable} ${instrumentSans.variable} ${sourceSerif.variable} font-sans h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-auto flex flex-col">
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <NextIntlClientProvider>
          <Header />
          <main className="min-h-[calc(100vh-120px)] h-full flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

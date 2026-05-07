import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";
import notFound from "./not-found";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider, Locale } from "next-intl";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
    canonical: `https://tydedev.it/${locale}`,
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
  return (
    <html
      lang={locale}
      className={`${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-auto flex flex-col px-4">
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

import { hasLocale, NextIntlClientProvider } from "next-intl";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "sonner";
import Flashlight from "@/components/ui/flashlight";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "home.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col scroll-smooth">
            <Header />
            <main className="flex-1 grow h-full flex flex-col">{children}</main>
            <Toaster position="bottom-right" />
            <Flashlight />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

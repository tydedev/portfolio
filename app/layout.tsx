import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";
import { Toaster } from "sonner";
import Flashlight from "@/components/ui/flashlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const t = await getTranslations({
    locale: "it",
    namespace: "home.meta",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const locale = store.get("locale")?.value || "it";
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="scrollbar-thin scrollbar-thumb-fuchsia-900/70 scrollbar-hover:scrollbar-thumb-fuchsia-700/60 scrollbar-active:scrollbar-thumb-fuchsia-700/70 scrollbar-track-slate-700 scrollbar-thumb-rounded-full"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <div className="min-h-screen flex flex-col">
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

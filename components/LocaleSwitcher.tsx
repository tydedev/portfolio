"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locales } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { useState, startTransition } from "react";
import { useTranslatedPathnamesStore } from "@/lib/store/translated-pathnames";

type LocaleCode = keyof typeof Locales;

interface Props {
  ghost?: boolean;
  translatedPathnames?: Partial<Record<LocaleCode, string>>;
}

const LocaleSwitcher = ({ ghost }: Props) => {
  const locale = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();

  const translatedPathnames = useTranslatedPathnamesStore(
    (state) => state.pathnames,
  );

  const [isLoading, setIsLoading] = useState(false);

  function onSelectChange(nextLocale: LocaleCode) {
    if (nextLocale === locale || isLoading) return;

    const isDynamicBlogRoute = pathname === "/blog/[slug]";

    // Gestione delle pagine dinamiche del blog.
    if (isDynamicBlogRoute) {
      const translatedPath = translatedPathnames[nextLocale];

      if (!translatedPath) {
        console.error(
          `LocaleSwitcher: percorso tradotto non disponibile per la lingua "${nextLocale}".`,
        );
        return;
      }

      // Il percorso tradotto ha il formato /blog/slug-tradotto.
      const translatedSlug = translatedPath.split("/").filter(Boolean).at(-1);

      if (!translatedSlug) {
        console.error(
          "LocaleSwitcher: impossibile recuperare lo slug tradotto.",
        );
        return;
      }

      setIsLoading(true);

      startTransition(() => {
        router.replace(
          {
            pathname: "/blog/[slug]",
            params: { slug: translatedSlug },
          },
          { locale: nextLocale },
        );
      });

      return;
    }

    // Gestione delle altre pagine.
    const nextPathname = translatedPathnames[nextLocale] ?? pathname;

    // Non navigare verso template dinamici privi dei parametri.
    if (nextPathname.includes("[")) {
      console.error(
        `LocaleSwitcher: percorso dinamico senza parametri: ${nextPathname}`,
      );
      return;
    }

    setIsLoading(true);

    startTransition(() => {
      router.replace(nextPathname as never, {
        locale: nextLocale,
      });
    });
  }

  const buttonClass = "p-0 h-auto min-h-0 font-normal text-sm cursor-pointer";

  return (
    <div>
      <Button
        onClick={() => onSelectChange("it")}
        variant="link"
        className={cn(
          buttonClass,
          locale === "it" && "underline text-black pointer-events-none",
        )}
        disabled={isLoading}
      >
        IT
      </Button>

      <span className="mx-2 text-foreground/40">|</span>

      <Button
        onClick={() => onSelectChange("en")}
        variant="link"
        className={cn(
          buttonClass,
          locale === "en" && "underline text-black pointer-events-none",
        )}
        disabled={isLoading}
      >
        EN
      </Button>
    </div>
  );
};

export default LocaleSwitcher;

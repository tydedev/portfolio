"use client";

import { Button } from "@/components/ui/button";

import { usePathname, useRouter } from "@/i18n/navigation";
import { getService, getLocalizedSlug } from "@/lib/services";
import { Locales } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, startTransition } from "react";

type LocaleCode = keyof typeof Locales;
interface Props {
  ghost?: boolean;
}

const LocaleSwitcher = ({ ghost }: Props) => {
  const l = useTranslations("Locales");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  function onSelectChange(nextLocale: LocaleCode) {
    if (nextLocale === locale) return;

    setIsLoading(true);

    startTransition(() => {
      const currentSlug = params?.slug as string | undefined;
      const service = currentSlug ? getService(currentSlug) : undefined;

      const localizedParams = service
        ? { ...params, slug: getLocalizedSlug(service, nextLocale) }
        : params;

      router.replace({ pathname, params: localizedParams } as never, {
        locale: nextLocale,
      });
    });
  }

  return (
    <>
      <Button
        onClick={() => onSelectChange("it")}
        variant={"link"}
        className={cn(
          locale === "it" && "underline text-black pointer-events-none",
          "p-0 m-0 h-0 cursor-pointer",
        )}
        disabled={isLoading}
      >
        IT
      </Button>
      <span className="mx-2">|</span>
      <Button
        onClick={() => onSelectChange("en")}
        variant={"link"}
        className={cn(
          locale === "en" && "underline text-black pointer-events-none",
          "p-0 m-0 h-0 cursor-pointer",
        )}
        disabled={isLoading}
      >
        EN
      </Button>
    </>
  );
};

export default LocaleSwitcher;

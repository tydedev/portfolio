"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Locales } from "@/lib/locales";
import { useLocale, useTranslations } from "next-intl";
import { startTransition, useState } from "react";
import LoadingState from "../ui/LoadingState";

type LocaleCode = keyof typeof Locales;
interface Props {
  ghost?: boolean;
}

const LangToggle = ({ ghost }: Props) => {
  const l = useTranslations("locales");
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();

  function onSelectChange(nextLocale: LocaleCode) {
    setIsLoading(true);

    startTransition(() => {
      document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
      window.location.reload();
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isLoading}
          variant={ghost ? "ghost" : "outline"}
          size="icon"
          className="cursor-pointer"
        >
          {isLoading ? (
            <LoadingState size="sm" className="mr-0" />
          ) : (
            locale.toUpperCase()
          )}
          <span className="sr-only">{l("description")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(Locales).map(([code, { name }]) => (
          <DropdownMenuItem
            className="cursor-pointer"
            key={code}
            onClick={() => onSelectChange(code as keyof typeof Locales)}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;

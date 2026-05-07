"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CurrentTime } from "./CurrentTime";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  const [open, setOpen] = useState(false);

  const cleanPathname = pathname?.replace(`/${locale}`, "") || "/";

  // 👇 chiave: se cambia route, il menu non rimane “sticky”
  const handleOpenChange = (value: boolean) => {
    setOpen(value);
  };

  return (
    <header className="relative z-50 grid grid-cols-12 gap-6 max-w-300 mx-auto h-25 items-start pt-10 w-full">
      {/* LOGO */}
      <div className="md:col-span-3 col-span-6">
        <Link href="/">
          <div className="md:flex space-y-2 md:space-y-0">
            <Image
              src="/logo_color.svg"
              alt="Tydedev Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
              unoptimized
              priority
            />
            <div className="space-x-1">
              <p className="font-semibold text-xl uppercase tracking-wide">
                Tydedev
              </p>
              <p className="font-medium text-xs uppercase tracking-wider">
                Maria Basso
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* NAV */}
      <div className="col-span-4 hidden md:flex items-center gap-8 text-sm">
        <Link
          href="/work"
          className={cn(
            "hover:underline tracking-wide underline-offset-4",
            cleanPathname.startsWith("/work") &&
              "font-semibold pointer-events-none",
          )}
        >
          {t("work")}
        </Link>

        <DropdownMenu open={open} onOpenChange={handleOpenChange} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              className={cn(
                "hover:underline tracking-wide font-normal cursor-pointer",
                cleanPathname.startsWith("/services") && "font-semibold",
              )}
            >
              {t("services")}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-40">
            <DropdownMenuItem asChild>
              <Link href="/services/epub-conversion" className="w-full">
                {t("eBook")}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/profile"
          className={cn(
            "hover:underline tracking-wide underline-offset-4",
            cleanPathname.startsWith("/profile") &&
              "font-semibold pointer-events-none",
          )}
        >
          {t("profile")}
        </Link>
      </div>

      {/* TIME */}
      <div className="md:col-span-5 col-span-4">
        <CurrentTime />
      </div>

      {/* MOBILE */}
      <div className="col-span-2 w-full md:hidden justify-end">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

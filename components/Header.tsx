"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CurrentTime } from "./CurrentTime";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");

  return (
    <header className="relative z-50 grid grid-cols-12 gap-6 max-w-300 mx-auto h-25 items-start pt-10 w-full">
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

      <div className="col-span-4 grid-cols-5 text-sm hidden md:grid">
        <div className="col-span-2">
          <Link
            href="/work"
            className={cn(
              "hover:underline tracking-wide",
              pathname === "/work" && "font-semibold pointer-events-none",
            )}
          >
            {t("work")}
          </Link>
        </div>
        <div className="col-span-2">
          <Link
            href="/profile"
            className={cn(
              "hover:underline tracking-wide",
              pathname === "/profile" && "font-semibold pointer-events-none",
            )}
          >
            {t("profile")}
          </Link>
        </div>
      </div>
      <div className="md:col-span-5 col-span-4">
        <CurrentTime />
      </div>
      <div className="col-span-2 w-full md:hidden justify-end">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

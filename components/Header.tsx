"use client";

import Link from "next/link";

import MobileMenu from "./MobileMenu";
import { Locale } from "./Locale";
import { getNavigation, socials } from "@/lib/nav";
import { useLocale } from "use-intl";

const Header = () => {
  const locale = useLocale();
  const navigation = getNavigation(locale);

  const handleWorkClick = () => {
    const isHome =
      window.location.pathname === `/${locale}` ||
      window.location.pathname === `/${locale}/`;

    if (isHome) {
      document.getElementById("work")?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    sessionStorage.setItem("scrollToWork", "true");
    window.location.assign(`/${locale}`);
  };

  return (
    <header className="sticky top-0 left-0 z-50 h-30 w-full bg-white px-4 font-heading md:px-0">
      <div className="mx-auto flex w-full max-w-360 items-start pt-3 pb-3 md:grid md:grid-cols-12 md:gap-6 md:pb-0">
        {/* LOGO */}
        <div className="flex-1 md:col-span-3">
          <Link href="/" className="inline-block hover:bg-red-500">
            <div className="md:flex md:items-start">
              <div className="leading-tight md:mt-0">
                <p className="font-heading text-xl font-semibold uppercase tracking-wide">
                  Tydedev
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* SOCIALS */}
        <div className="flex-1 font-semibold md:col-span-7">
          <nav className="flex flex-col items-start gap-0">
            {socials.map((link) => (
              <Link
                key={link.label}
                href={link.href as never}
                target="_blank"
                className="text-sm font-semibold leading-none transition-colors hover:bg-red-500 md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="md:col-span-2 md:flex md:items-start md:justify-end md:gap-8">
          <nav className="hidden flex-col items-start gap-0 md:flex">
            {navigation.map((link) => {
              if (link.href === "#work") {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={handleWorkClick}
                    className="text-sm font-semibold leading-none transition-colors hover:bg-red-500 md:text-base"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href as never}
                  className="text-sm font-semibold leading-none transition-colors hover:bg-red-500 md:text-base"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Locale />
        </div>

        {/* MOBILE */}
        <div className="ml-5 flex shrink-0 justify-end md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

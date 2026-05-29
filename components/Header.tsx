"use client";

import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";
import { Locale } from "./Locale";
import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { usePathname } from "@/i18n/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 bg-red-500 text-foreground z-50 md:h-25 h-auto w-full px-4 md:px-0">
      <div className="grid grid-cols-12 gap-6 max-w-300 mx-auto items-start pt-10 w-full pb-3 md:pb-0">
        {/* LOGO */}
        <div className="md:col-span-7 col-span-6">
          <Link href="/">
            <div className="md:flex space-y-2 md:space-y-0">
              <Image
                src="/logo.svg"
                alt="Tydedev Logo"
                width={40}
                height={40}
                className="inline-block mr-2 h-auto"
              />
              <div className="leading-tight">
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

        <div className="md:col-span-5 col-span-4 items-center flex">
          <div
            className={cn(
              "fixed bottom-4 right-4 p-3 rounded-full bg-red-500 text-black shadow-lg transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <a href="#top" aria-label="Scroll to top">
              <ArrowUpIcon size={20} className="w-5 h-5 animate-bounce" />
            </a>
          </div>
          <div
            className={`hidden md:block transition-all duration-200 ease-out ${
              pathname !== "/" || isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Navbar />
          </div>
          <Locale />
        </div>

        {/* MOBILE */}
        <div className="col-span-2 w-full md:hidden justify-end">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

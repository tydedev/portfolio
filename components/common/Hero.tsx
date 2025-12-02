"use client";

import { Equal, Plus, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CustomBadge from "../ui/customBadge";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("hero");
  const word = "Code";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 100; // ms per lettera
    const timeout = setTimeout(() => {
      setDisplayed(word.slice(0, index + 1));
      setIndex(index + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, word]);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center select-none relative overflow-x-hidden">
      <h2 className="text-5xl md:text-7xl font-bold border-r-4 pr-1 animate-blink flex gap-x-3 items-baseline">
        <span className="text-fuchsia-500">Design</span>
        <span className="flex -space-x-1 mr-[0.15rem]">
          <Plus className="shrink-0 md:w-8 md:h-8" strokeWidth={4} />
          <Equal className="shrink-0 md:w-8 md:h-8" strokeWidth={4} />
        </span>
        <span className="text-cyan-500">{displayed}</span>
      </h2>
      <div className="py-6 text-foreground space-x-2 text-center">
        <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
          UI/UX
        </CustomBadge>
        <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
          Web Development
        </CustomBadge>
        <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
          Brand Identity
        </CustomBadge>
      </div>
      <p className="text-xl md:text-2xl px-10 text-center">{t("subtitle")}</p>

      <p className="my-5">
        <Button asChild>
          <Link
            href="mailto:tydedev.socials@outlook.com"
            className="flex items-center"
          >
            <Mail />
            <span>{t("email")}</span>
          </Link>
        </Button>
      </p>

      <div className="absolute rounded-full bg-fuchsia-400/20 blur-3xl w-100 h-100 -z-1" />
    </section>
  );
};

export default Hero;

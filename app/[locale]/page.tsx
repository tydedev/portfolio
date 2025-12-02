"use client";

import Areas from "@/components/carousels/Areas";
import Hero from "@/components/common/Hero";
import { Button } from "@/components/ui/button";
import useScroll from "@/hooks/useScroll";
import { ArrowUp } from "lucide-react";
import Skills from "@/components/cards/Skills";
import ProjectCard from "@/components/cards/ProjectCard";
import { useTranslations } from "next-intl";
import CircularProgressAutoAnimate from "@/components/animations/ProgressCircle";

export default function HomePage() {
  const { isScrolling } = useScroll();
  const t = useTranslations("home");
  const p = useTranslations("projects");

  return (
    <div data-scroll={isScrolling}>
      <Hero />
      <Areas />
      <div className="flex flex-col py-7 max-w-6xl w-full mx-auto p-6 space-y-7">
        <Skills />
        {isScrolling && (
          <Button
            className="rounded-full border-cyan-400 border-2 bg-cyan-500/20 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] fixed bottom-12 right-5 z-50"
            variant={"outline"}
            size={"icon"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp strokeWidth={4} />
          </Button>
        )}
      </div>
      <div className="w-full md:py-7">
        <h1 className="md:text-3xl font-semibold text-center text-xl space-y-20 px-10">
          {t("projects.score_title")}
        </h1>
        <CircularProgressAutoAnimate />
      </div>
      <div className="md:py-10 max-w-6xl w-full mx-auto p-6 space-y-10">
        <h1 className="md:text-3xl font-semibold text-center text-xl">
          {t("projects.title")}
        </h1>
        <ProjectCard
          imageURL="/images/bascorp.png"
          title={p("bascorp.title")}
          description={p("bascorp.description")}
          link="https://bascorp.it/"
        />
      </div>
    </div>
  );
}

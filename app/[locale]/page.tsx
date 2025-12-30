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
import ServiceCard from "@/components/cards/ServiceCard";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobeillustrator, SiTailwindcss } from "react-icons/si";

export default function HomePage() {
  const { isScrolling } = useScroll();
  const t = useTranslations("home");
  const p = useTranslations("projects");
  const s = useTranslations("services");

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
        <h2 className="md:text-3xl font-semibold text-center text-xl space-y-20 px-10">
          {t("projects.score_title")}
        </h2>
        <CircularProgressAutoAnimate />
      </div>
      <div className=" max-w-6xl w-full mx-auto p-6 space-y-10" id="services">
        <h2 className="md:text-3xl font-semibold text-center text-xl">
          {s("title")}
        </h2>
        <ServiceCard />
      </div>
      <div className="md:py-10 max-w-6xl w-full mx-auto p-6 space-y-10">
        <h2 className="md:text-3xl font-semibold text-center text-xl">
          {t("projects.title")}
        </h2>
        <div className="flex items-center justify-center">
          <ProjectCard
            imageURL="/images/projects/bascorp/project_bascorp_preview.png"
            title={p("bascorp.title")}
            description={p("bascorp.description")}
            route="/projects/bascorp"
            link="https://bascorp.it/"
            skills={[
              { icon: FaReact },
              { icon: RiNextjsFill },
              { icon: SiTailwindcss },
              { icon: SiAdobeillustrator },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

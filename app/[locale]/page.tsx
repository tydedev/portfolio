"use client";

import Areas from "@/components/carousels/Areas";
import Hero from "@/components/common/Hero";
import { Button } from "@/components/ui/button";
import useScroll from "@/hooks/useScroll";
import { ArrowUp } from "lucide-react";
import Skills from "@/components/cards/Skills";
import ProjectCard from "@/components/cards/ProjectCard";
import { useLocale, useTranslations } from "next-intl";
import CircularProgressAutoAnimate from "@/components/animations/ProgressCircle";
import ServiceCard from "@/components/cards/ServiceCard";
import WordpressCard from "@/components/wordpress/WordpressCard";
import { projects, templates } from "@/lib/constants";
import Link from "next/link";
import ContactCTA from "@/components/forms/ContactCTA";

export default function HomePage() {
  const { isScrolling } = useScroll();
  const t = useTranslations("home");
  const s = useTranslations("services");
  const p = useTranslations("projects");
  const w = useTranslations("home.wordpress.templates");

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
        <div className="flex items-center justify-center gap-4">
          {projects
            .map((project, i) => (
              <ProjectCard
                key={i}
                imageURL={project.image}
                title={p(project.name)}
                description={p(project.description)}
                route={project.href}
                link={project.liveUrl}
                skills={project.skills}
              />
            ))
            .slice(0, 6)}
        </div>
      </div>
      <div className="md:py-10 max-w-6xl w-full mx-auto p-6 space-y-10 flex flex-col items-center">
        <h2 className="md:text-3xl font-semibold text-center text-xl">
          {t.rich("wordpress.title", {
            cyan: (text: React.ReactNode) => (
              <span className="text-cyan-500">{text}</span>
            ),
          })}
        </h2>
        <p className="max-w-xl text-center mx-auto">
          {t("wordpress.description")}
        </p>
        <Button asChild variant={"default"} className="self-center">
          <Link href="/templates/wordpress">{t("wordpress.seeMore")}</Link>
        </Button>
        <div className="flex items-center justify-center gap-4">
          {templates
            .map((template, i) => (
              <WordpressCard
                key={i}
                title={w(template.name)}
                description={w(template.description)}
                price={template.price}
                href={template.href}
                image={template.image}
              />
            ))
            .slice(0, 3)}
        </div>
      </div>
      <ContactCTA />
    </div>
  );
}

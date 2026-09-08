"use client";
import Image from "next/image";
import { useRef } from "react";
import { MovingText } from "./MovingText";
type Work = { slug: string; name: string; image: string };
type WorkSectionProps = {
  title: string;
  works: Work[];
  background: string;
  textColor: string;
  position?: "left" | "right";
};
export const WorkSection = ({
  title,
  works,
  background,
  textColor,
  position = "left",
}: WorkSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      ref={sectionRef}
      className={`relative px-6 md:px-20 ${background}`}
    >
      {" "}
      {/* Category — MOBILE */}{" "}
      <h2
        className={`py-16 font-heading text-[clamp(3.5rem,10vw,11rem)] font-medium uppercase leading-[0.8] tracking-[-0.065em] md:hidden ${textColor} ${position === "left" ? "text-left" : "text-right"}`}
      >
        {" "}
        {title}{" "}
      </h2>{" "}
      {/* Category — DESKTOP */}{" "}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {" "}
        <div className="sticky top-0 z-10">
          {" "}
          <div
            className={`flex h-screen items-start justify-center ${textColor}`}
          >
            {" "}
            <MovingText sectionRef={sectionRef} position={position}>
              {" "}
              {title}{" "}
            </MovingText>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Projects */}{" "}
      <div className="relative z-10 pb-20 md:pb-40">
        {" "}
        <div className="h-[35vh] md:block hidden" />{" "}
        {works.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <article
              key={project.slug}
              className={`relative flex items-center pb-24 md:pb-40 ${isLeft ? "justify-start" : "justify-end"}`}
            >
              {" "}
              <div
                className={`w-full md:w-[46%] ${isLeft ? "md:mr-0" : "md:ml-0"}`}
              >
                {" "}
                <div className="overflow-hidden">
                  {" "}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </article>
          );
        })}{" "}
      </div>{" "}
    </section>
  );
};

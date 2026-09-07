"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type MovingTextProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  position?: "left" | "right";
};

export const MovingText = ({
  sectionRef,
  children,
  position = "left",
}: MovingTextProps) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.82, 1],
    ["0vh", "12vh", "30vh", "30vh", "75vh"],
  );

  return (
    <motion.h2
      style={{ y }}
      className={cn(
        "w-screen whitespace-nowrap pr-3 text-center font-heading text-[clamp(3.5rem,10vw,11rem)] font-medium uppercase leading-[0.8] tracking-[-0.065em]",
        position === "left" ? "text-left" : "text-right",
      )}
    >
      {children}
    </motion.h2>
  );
};

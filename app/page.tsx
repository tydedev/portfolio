"use client";

import Areas from "@/components/carousels/Areas";
import Hero from "@/components/common/Hero";
import { Button } from "@/components/ui/button";
import useScroll from "@/hooks/useScroll";
import { ArrowUp } from "lucide-react";
import Skills from "@/components/cards/Skills";

export default function HomePage() {
  const { isScrolling } = useScroll();

  return (
    <div data-scroll={isScrolling}>
      <Hero />
      <Areas />
      <div className="flex flex-col py-7 max-w-6xl w-full mx-auto p-6 space-y-7">
        <Skills />
        {isScrolling && (
          <Button
            className="rounded-full border-cyan-400 border-2 bg-cyan-500/20 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] fixed bottom-5 right-5 z-50"
            variant={"outline"}
            size={"icon"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp strokeWidth={4} />
          </Button>
        )}
      </div>
    </div>
  );
}

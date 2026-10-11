
"use client";

import { useTranslations } from "next-intl";
import Formatting from "./Formatting";
import GraphicDesign from "./GraphicDesign";
import BrandIdentity from "./BrandIdentity";


const Works = () => {
  const t = useTranslations("home");

  return (
    <section id="work" className="md:px-0">
      <div className="mx-auto w-full">
        <Formatting />
        <GraphicDesign />
        <BrandIdentity />
      </div>
    </section>
  );
};

export default Works;

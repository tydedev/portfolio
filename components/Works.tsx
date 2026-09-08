"use client";

import { works } from "@/lib/works";
import { WorkSection } from "./WorkSection";

const Works = () => {
  const editorialWorks = works.filter(
    (work) => work.category === "Editorial & DTP",
  );

  const brandingWorks = works.filter(
    (work) => work.category === "Brand Identity",
  );

  const socialMediaWorks = works.filter(
    (work) => work.category === "Social Media",
  );

  const graphicWorks = works.filter(
    (work) => work.category === "Graphic Design",
  );

  return (
    <section id="work" className="md:px-0">
      <div className="mx-auto w-full">
        <WorkSection
          title="Brand Identity"
          works={brandingWorks}
          background="bg-[#F1EFE8]"
          textColor="text-[#1C1C1A]"
          position="left"
        />

        <WorkSection
          title="Graphic Design"
          works={graphicWorks}
          background="bg-[#D8C7B8]"
          textColor="text-[#211C19]"
          position="left"
        />

        <WorkSection
          title="Editorial & DTP"
          works={editorialWorks}
          background="bg-[#54232D]"
          textColor="text-[#F5F1EA]"
          position="right"
        />

        <WorkSection
          title="Social Media"
          works={socialMediaWorks}
          background="bg-[#263B36]"
          textColor="text-[#F3F0E8]"
          position="left"
        />
      </div>
    </section>
  );
};

export default Works;

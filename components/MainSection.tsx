"use client";
const services = [
  "Brand Identity",
  "Editorial Design",
  "Typography Systems",
  "Grid Systems",
  "Desktop Publishing",
  "Print & Digital Design",
  "Social Media",
  "Visual Systems",
  "UI/UX Design",
  "Web Design",
];
const MainSection = () => {
  return (
    <section className="relative min-h-screen h-full w-full px-4 md:min-h-[calc(100vh-120px)] md:px-0">
      {" "}
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-6 md:grid-cols-12">
        {" "}
        {/* HERO */}{" "}
        <h1 className="pt-[25vh] text-5xl font-heading font-bold uppercase md:leading-[0.8] md:col-span-12 md:text-8xl">
          {" "}
          Editorial <br /> And Digital Design{" "}
        </h1>{" "}
        {/* SERVICES MARQUEE */}{" "}
        <div className="overflow-hidden md:col-span-12">
          {" "}
          <div className="flex w-max animate-marquee">
            {" "}
            {[...services, ...services].map((service, index) => (
              <span
                key={`${service}-${index}`}
                className="flex shrink-0 items-center whitespace-nowrap text-xl font-semibold leading-tight md:text-2xl"
              >
                {" "}
                {service} <span className="mx-4">—</span>{" "}
              </span>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* INTRO */}{" "}
        <div className="mt-12 grid grid-cols-1 gap-8 font-semibold md:col-span-12 md:mt-20 md:grid-cols-12 md:gap-6">
          {" "}
          <p className="leading-tight md:col-span-3">
            {" "}
            Independent designer working across editorial, brand and digital
            design.{" "}
          </p>{" "}
          <p className="leading-tight md:col-span-4">
            {" "}
            I build visual systems, identities and digital experiences with a
            focus on typography and structure.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default MainSection;

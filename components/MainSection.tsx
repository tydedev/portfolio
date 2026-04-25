import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("Home");
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 items-start mx-auto w-full py-20">
      <div className="col-span-1 md:col-span-7">
        <h1 className="uppercase font-bold tracking-[-0.02em] leading-[0.9] text-4xl md:text-6xl lg:text-8xl">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 relative">
            <span>Graphic</span>
            <span>Designer</span>
            <p className="text-fuchsia-500">/</p>
            <span>Web</span>
            <span>Developer</span>
          </div>
        </h1>
      </div>
      <div className="col-span-1 md:col-span-5 grid md:grid-cols-6 text-sm leading-normal space-y-6 w-full">
        <div className="md:col-span-4">
          {t.rich("about", {
            u: (chunks) => <u>{chunks}</u>,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </div>
      </div>
    </section>
  );
};

export default MainSection;

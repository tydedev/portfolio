import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("Home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto w-full ">
      {/* TITLE */}
      <div className="col-span-1 md:col-span-7">
        <h1 className="uppercase font-bold tracking-tighter leading-[0.8] text-4xl md:text-6xl lg:text-8xl">
          <div className="flex flex-col gap-2">
            <span>Graphic Designer</span>

            <span>Web Developer</span>

            <span>
              eBook <span className="text-fuchsia-500">Specialist</span>
            </span>
          </div>
        </h1>
      </div>

      {/* ABOUT */}
      <div className="col-span-1 md:col-span-3 text-sm leading-relaxed w-full">
        <div className="space-y-6">
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

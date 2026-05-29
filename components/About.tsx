import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Home");
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto min-h-screen justify-baseline-first py-20 px-4 md:px-0 items-center">
      <div className="col-span-5 flex-col items-start justify-start">
        <h2 className="text-5xl font-bold leading-10">
          {t.rich("hello", {
            red: chunks => <span className="text-red-500">{chunks}</span>,
            br: chunks => (
              <>
                <br />
                {chunks}
              </>
            ),
          })}
        </h2>
      </div>
      <div className="col-span-7">
        <div className="mt-4 text-lg leading-relaxed">
          {t.rich("about", {
            p: chunks => <p>{chunks}</p>,
            b: chunks => <span className="font-semibold">{chunks}</span>,
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

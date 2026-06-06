"use client";

import { Link } from "@/i18n/navigation";
import { getNavigation } from "@/lib/nav";
import { useLocale } from "use-intl";

const MainSection = () => {
  const locale = useLocale();
  const navigation = getNavigation(locale);
  return (
    <section className="w-full h-screen md:h-[calc(100vh-100px)] bg-red-500 text-white px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-300 mx-auto">
        <div className="col-span-1 md:col-span-7">
          <div className="uppercase font-bold tracking-tight leading-[0.8] text-6xl lg:text-8xl">
            <div className="flex flex-col gap-2">
              <h1>Graphic Designer</h1>
              <span className="text-black mt-10">
                — <br /> Branding,
                <br /> Editorial
                <br />& Digital{" "}
                <span className="text-stroke-black text-red-500">Design</span>
              </span>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="col-span-1 md:col-span-5 md:text-7xl text-6xl mt-10 md:mt-0 leading-tighter w-full h-full flex flex-col items-end justify-center font-bold text-black">
          {navigation.map((link) => (
            <Link key={link.label} href={link.href as never}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;

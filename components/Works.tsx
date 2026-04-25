import { useTranslations } from "next-intl";
import Image from "next/image";

export const Works = () => {
  const t = useTranslations("Works");

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm">
      {/* LEFT BLOCK */}
      <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* TITLE */}
        <div className="md:col-span-3">
          <p className="font-semibold">Bascorp</p>
          <p>{t("Bascorp.subtitle")}</p>
        </div>

        {/* POSTER */}
        <div className="md:col-span-3">
          <Image
            src="/images/bascorp/cover.png"
            alt="Bascorp"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-2 text-xs">
          <p>{t("Bascorp.description")}</p>
        </div>

        {/* IMAGES STACK */}
        <div className="md:col-span-4 space-y-4">
          <Image
            src="/images/bascorp/truck.png"
            alt="Bascorp"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />

          <Image
            src="/images/bascorp/poster.png"
            alt="Bascorp"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* RIGHT BLOCK */}
      <div className="md:col-span-6 space-y-4">
        <Image
          src="/images/bascorp/stationery.png"
          alt="Bascorp"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/images/bascorp/site.png"
          alt="Bascorp"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

import Image from "next/image";

const BrandIdentity = () => {
  return (
    <section className="grid grid-cols-1 items-start gap-x-4 gap-y-15 bg-[#B7B7A5] px-10 py-10 font-sans text-base font-semibold text-[#302820] md:grid-cols-12 md:px-4">
      <h2 className="py-10 font-heading text-3xl uppercase md:col-start-2 md:col-span-3 md:row-start-2 md:py-0 md:text-5xl">
        Visual Identity
      </h2>

      <div className="md:col-start-4 md:col-span-4 md:row-start-2">
        <Image
          src="/images/bascorp/header.jpg"
          alt="Visual identity design for Bascorp"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>

      <div className="md:col-start-8 md:col-span-4 md:row-start-2">
        <Image
          src="/images/petrha/man.jpg"
          alt="Visual identity project for Petrha"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>

      <h2 className="py-10 font-heading text-3xl uppercase md:col-start-10 md:col-span-4 md:row-start-3 md:py-0 md:text-5xl">
        Brand Applications
      </h2>

      <div className="md:col-start-2 md:col-span-4 md:row-start-3">
        <Image
          src="/images/bascorp/poster.png"
          alt="Branded poster design for Bascorp"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>

      <div className="md:col-start-6 md:col-span-4 md:row-start-3">
        <Image
          src="/images/petrha/businesscard.jpg"
          alt="Branded business card design for Petrha"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
};

export default BrandIdentity;

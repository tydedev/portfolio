import Image from "next/image";

const Formatting = () => {
  return (
    <section className="grid grid-cols-1 items-start gap-x-4 gap-y-15 bg-[#E8E0D2] px-10 py-10 font-sans text-base font-semibold text-[#302820] md:grid-cols-12 md:px-4">
      <h2 className="py-10 font-heading text-3xl uppercase md:col-start-3 md:col-span-2 md:row-start-2 md:py-0 md:text-5xl">
        Fiction
      </h2>

      <div className="md:col-start-6 md:col-span-3 md:row-start-2">
        <Image
          src="/images/editorial/experimentation/Alice-in-wonderland-chapter-opener.webp"
          alt="Chapter opener from an illustrated edition of Alice in Wonderland"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>

      <h2 className="py-10 font-heading text-3xl uppercase md:col-start-9 md:col-span-4 md:row-start-3 md:py-0 md:text-5xl">
        Non-fiction <br />& Manuals
      </h2>

      <div className="md:col-start-3 md:col-span-3 md:row-start-3">
        <Image
          src="/images/editorial/experimentation/saggio.jpg"
          alt="Interior page layout of a non-fiction book"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>

      <div className="md:col-start-6 md:col-span-3 md:row-start-3">
        <Image
          src="/images/editorial/experimentation/saggio2.jpg"
          alt="Typographic details of a non-fiction book layout"
          width={400}
          height={400}
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Formatting;

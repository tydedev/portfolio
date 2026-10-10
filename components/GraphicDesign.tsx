import Image from "next/image";

const GraphicDesign = () => {
  return (
    <section className="grid grid-cols-1 items-start gap-x-4 gap-y-15 px-10 py-10 font-sans text-base font-semibold bg-[#243B3A] text-[#F2EBDD] md:grid-cols-12 md:px-4">

{/* Presentazioni aziendali */}
<div className="py-4 font-heading text-3xl uppercase md:col-start-2 md:col-span-4 md:row-start-2 md:self-start md:pt-0 md:text-5xl">
  Corporate <br />
    Presentations
</div>

<div className="md:col-start-7 md:col-span-5 md:row-start-2">
  <Image
    src="/images/editorial/aquadro-brochure.jpg"
    alt="Progettazione di presentazioni aziendali"
    width={400}
    height={400}
    className="block h-auto w-full"
  />
</div>

{/* Low-content */}
<div className="py-4 font-heading text-3xl uppercase md:col-start-8 md:col-span-4 md:row-start-3 md:self-start md:pt-0 md:text-5xl">
  Planner &
  <br />
  low-content
</div>

<div className="md:col-start-2 md:col-span-5 md:row-start-3">
  <Image
    src="/images/editorial/bird_logbook.jpg"
    alt="Progettazione di planner e pubblicazioni low-content"
    width={400}
    height={400}
    className="block h-auto w-full"
  />
</div>

{/* Print & Promotional */}
<div className="py-4 font-heading text-3xl uppercase md:col-start-2 md:col-span-5 md:row-start-4 md:self-start md:pt-0 md:text-5xl">
  Print & Promotional
</div>

<div className="md:col-start-7 md:col-span-5 md:row-start-4">
  <Image
    src="/images/editorial/bascorp-flyer.jpg"
    alt="Progettazione grafica di flyer promozionali"
    width={400}
    height={400}
    className="block h-auto w-full"
  />
</div>
    </section>
  );
};

export default GraphicDesign;
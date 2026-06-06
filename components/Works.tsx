import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";

const Works = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-6 auto-rows-[250px] min-h-screen mb-20"
      id="work"
    >
      {projects.map((project) => (
        <Link
          href={`/work/${project.slug}` as never}
          key={project.slug}
          className={`group relative overflow-hidden ${project.gridClass} cursor-pointer`}
        >
          <Image
            src={project.thumbnail.src}
            alt=""
            fill
            className={`object-cover ${project.thumbnail.position ?? "object-center"} w-full transition-transform duration-300 group-hover:scale-105`}
          />
          <div
            className={`absolute inset-0 ${project.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex p-4`}
          >
            <div className="text-white self-baseline-last">
              <h3
                className={`text-6xl font-semibold ${project.nameClass ?? ""}`}
              >
                {project.name}
              </h3>
              <p className="text-base font-semibold">
                {project.tags.slice(0, 3).join(", ")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Works;

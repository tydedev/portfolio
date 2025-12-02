import {
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const icons = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Javascript", icon: FaJs },
  { name: "Wordpress", icon: FaWordpress },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "InDesign", icon: SiAdobeindesign },
  { name: "Figma", icon: SiFigma },
];

const Areas = () => {
  return (
    <div className="relative w-full overflow-hidden max-w-6xl mx-auto py-5">
      <div className="flex gap-4 border-b border-t py-3 md:py-5 border-muted-foreground/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...icons, ...icons].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-4 text-muted-foreground/70 select-none transition duration-300 ease-in-out
             hover:text-white/70 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              <item.icon className="md:w-7 md:h-7 w-5 h-5" />
              <span className="md:text-lg font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute left-0 top-0 w-10 h-full bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-10 h-full bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};

export default Areas;

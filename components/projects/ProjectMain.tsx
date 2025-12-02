import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiAdobeillustrator,
  SiFigma,
  SiTailwindcss,
  SiJavascript,
  SiAdobephotoshop,
} from "react-icons/si"; // import icone tech
import { JSX } from "react";
import { FaCss3Alt, FaHtml5, FaPhp, FaWordpress } from "react-icons/fa";
import CustomBadge from "@/components/ui/customBadge";

// Mappa stringhe dei tech a icone
const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="inline w-5 h-5 text-white mr-1" />,
  NextJS: <SiNextdotjs className="inline w-5 h-5 text-white mr-1" />,
  TypeScript: <SiTypescript className="inline w-5 h-5 text-white mr-1" />,
  NodeJS: <SiNodedotjs className="inline w-5 h-5 text-white mr-1" />,
  Illustrator: (
    <SiAdobeillustrator className="inline w-5 h-5 text-white  mr-1" />
  ),
  Photoshop: <SiAdobephotoshop className="inline w-5 h-5 text-white mr-1" />,
  Figma: <SiFigma className="inline w-5 h-5 text-white mr-1" />,
  Tailwind: <SiTailwindcss className="inline w-5 h-5 text-white mr-1" />,
  HTML: <FaHtml5 className="inline w-5 h-5 text-white mr-1" />,
  CSS: <FaCss3Alt className="inline w-5 h-5 text-white mr-1" />,
  Javascript: <SiJavascript className="inline w-5 h-5 text-white mr-1" />,
  Wordpress: <FaWordpress className="inline w-5 h-5 text-white mr-1" />,
  PHP: <FaPhp className="inline w-5 h-5 text-white mr-1" />,
  // aggiungi altre tech se serve
};

export const category = (type: string) => {
  switch (type) {
    case "Web Application":
      return (
        <CustomBadge glow glowColor="blue" className="text-xs!">
          Web App
        </CustomBadge>
      );
    case "mobile":
      return "Mobile App";
    case "Web Design":
      return (
        <CustomBadge glow glowColor="cyan" className="text-xs!">
          Web Design
        </CustomBadge>
      );
    case "Brand Identity":
      return (
        <CustomBadge glow glowColor="green" className="text-xs!">
          Brand Identity
        </CustomBadge>
      );
    case "Web Development":
      return (
        <CustomBadge glow glowColor="yellow" className="text-xs!">
          Web Development
        </CustomBadge>
      );
    case "UI/UX Design":
      return (
        <CustomBadge glow glowColor="fuchsia" className="text-xs!">
          UI/UX Design
        </CustomBadge>
      );
    default:
      return type;
  }
};

export interface Project {
  title: string;
  description: string;
  type: string;
  tech: string[];
}

export default function ProjectsMain({ projects }: { projects: Project[] }) {
  return (
    <div className="max-w-6xl min-h-screen mx-auto py-10 px-6 space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {category(project.type)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center text-sm font-mediumpx-2 py-1"
                  >
                    {techIcons[t] || null}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

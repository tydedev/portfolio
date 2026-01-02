import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  imageURL: string;
  title: string;
  description?: string;
  route: string;
  link: string;
  skills?: { icon: IconType }[];
}

const ProjectCard = ({
  imageURL,
  title,
  description,
  skills,
  link,
  route,
}: Props) => {
  const t = useTranslations("home.projects");
  const router = useRouter();

  return (
    <Card className="group relative overflow-hidden max-w-sm w-full pt-0">
      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden p-10">
        <Image
          src={imageURL}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* HOVER TEXT */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          {description && (
            <p className="text-white/80 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <CardContent className="pt-5 space-y-4">
        {/* ACTIONS */}
        <div className="flex items-center justify-between">
          <Button size="sm" onClick={() => router.push(route)}>
            {t("details")}
          </Button>

          <Button asChild size="sm" variant="ghost">
            <Link href={link} target="_blank">
              {t("button")}
            </Link>
          </Button>
        </div>

        {/* SKILLS FOOTER */}
        {skills && (
          <div className="flex items-center gap-4 pt-3 border-t text-muted-foreground">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return <Icon key={index} className="w-4 h-4 opacity-70" />;
            })}
          </div>
        )}
      </CardContent>

      {/* GLOW */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
};

export default ProjectCard;

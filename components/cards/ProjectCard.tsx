import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
  imageURL: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ imageURL, title, description, link }: Props) => {
  const t = useTranslations("home.projects");
  return (
    <div className="md:p-7 flex flex-col md:flex-row items-center justify-between w-full gap-7 relative">
      <Image src={imageURL} alt={title} width={500} height={300} />
      <div className="md:p-8 w-full">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              asChild
              className="w-full"
              variant={"secondary"}
              size={"sm"}
            >
              <Link href={link} target="_blank">
                {t("button")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="absolute rounded-full bg-cyan-400/20 blur-3xl w-100 h-100 -z-1" />
    </div>
  );
};

export default ProjectCard;

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const Wordpress = () => {
  const t = useTranslations("wordpress");
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-y-7 w-full items-center">
        <h2 className="text-2xl text-center md:text-5xl font-medium">
          {t.rich("title", {
            cyan: (text) => <span className="text-cyan-500">{text}</span>,
            fuchsia: (text) => <span className="text-fuchsia-500">{text}</span>,
          })}
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground max-w-4xl text-center text-lg md:text-xl">
            {t.rich("description", {
              medium: (text) => <span className="font-medium">{text}</span>,
              italic: (text) => <span className="italic">{text}</span>,
            })}
          </p>
          <Button className="my-5" variant={"secondary"}>
            {t("button")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wordpress;

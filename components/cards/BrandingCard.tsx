import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const brandList = [
  {
    title: "brandList.one_title",
    desc: "brandList.one_description",
  },
  {
    title: "brandList.two_title",
    desc: "brandList.two_description",
  },
  {
    title: "brandList.three_title",
    desc: "brandList.three_description",
  },
  {
    title: "brandList.four_title",
    desc: "brandList.four_description",
  },
  {
    title: "brandList.five_title",
    desc: "brandList.five_description",
  },
];

export const BrandingCard = () => {
  const t = useTranslations("services.graphic");

  return (
    <Card className="w-full h-full border-none bg-linear-to-br from-background to-muted/40 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="grid grid-cols-1 gap-12 p-8 md:p-12 justify-start">
        {/* LEFT SIDE */}
        <div className="space-y-6 md:px-6">
          <h3 className="text-3xl font-semibold text-fuchsia-500 text-center drop-shadow-sm">
            {t("brandTitle")}
          </h3>

          <div className="space-y-3 text-sm leading-relaxed">
            {t.rich("brandAnswer", {
              cyan: (text) => <span className="text-cyan-500">{text}</span>,
              fuchsia: (text) => (
                <span className="text-fuchsia-500">{text}</span>
              ),
              b: (text) => <span className="font-semibold">{text}</span>,
              p: (text) => <p>{text}</p>,
            })}
          </div>
        </div>

        {/* RIGHT SIDE — TIMELINE STYLE */}
        <div className="relative space-y-6">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 h-full bg-linear-to-b from-fuchsia-400/50 to-cyan-400/50" />
          {brandList.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Text */}
              <div className="space-y-1 ml-10">
                <p className="font-semibold text-sm">{t(item.title)}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

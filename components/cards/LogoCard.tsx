import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

const logoElements = [
  { title: "logoList.symbol", desc: "logoList.symbolDesc" },
  { title: "logoList.typography", desc: "logoList.typographyDesc" },
  { title: "logoList.colour", desc: "logoList.colourDesc" },
  { title: "logoList.usage", desc: "logoList.usageDesc" },
];

export const LogoCard = () => {
  const t = useTranslations("services.graphic");

  return (
    <Card className="w-full h-full border-none bg-linear-to-tl from-background to-muted/40 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="grid grid-cols-1 gap-12 p-8 md:p-12 justify-start">
        {/* LEFT BLOCK */}
        <div className="space-y-6 md:px-6">
          <h3 className="text-3xl font-semibold text-cyan-500 text-center drop-shadow-sm">
            {t("logoTitle")}
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            {t.rich("description", {
              b: (text) => <span className="font-semibold">{text}</span>,
              cyan: (text) => <span className="text-cyan-500">{text}</span>,
              fuchsia: (text) => (
                <span className="text-fuchsia-500">{text}</span>
              ),
              p: (text) => <p>{text}</p>,
            })}
          </div>
        </div>

        {/* RIGHT BLOCK — ELEMENT LIST */}
        <div className="relative space-y-6">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400/50 to-fuchsia-400/50" />

          {logoElements.map((item, i) => (
            <div key={i} className="flex gap-4 ml-10">
              <div className="space-y-1">
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

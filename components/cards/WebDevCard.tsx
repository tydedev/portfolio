import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";

const webList = [
  { title: "webList.one_title", desc: "webList.one_description" },
  { title: "webList.two_title", desc: "webList.two_description" },
  { title: "webList.three_title", desc: "webList.three_description" },
  { title: "webList.four_title", desc: "webList.four_description" },
];

export const WebDevCard = () => {
  const t = useTranslations("services.webdev");

  return (
    <Card className="w-full h-full border-none bg-linear-to-br from-background to-muted/40 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="grid grid-cols-1 gap-12 p-8 md:p-12 justify-start">
        {/* LEFT SIDE */}
        <div className="space-y-6 md:px-6">
          <div className="space-y-3 text-sm leading-relaxed">
            {t.rich("webAnswer", {
              cyan: (text) => <span className="text-cyan-500">{text}</span>,
              b: (text) => <span className="font-semibold">{text}</span>,
              p: (text) => <p>{text}</p>,
            })}
          </div>
        </div>

        {/* RIGHT SIDE — TIMELINE STYLE */}
        <div className="relative space-y-6">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 h-full bg-linear-to-b from-cyan-400/50 to-blue-400/50" />
          {webList.map((item, index) => (
            <div key={index} className="flex gap-4">
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

export default WebDevCard;

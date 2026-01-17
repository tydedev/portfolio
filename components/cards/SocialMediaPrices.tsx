import {
  Activity,
  CheckCircle,
  CheckCircle2,
  CircleArrowOutDownRight,
  SmilePlus,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useTranslations } from "next-intl";

export const SocialMediaPrices = () => {
  const t = useTranslations("services.socialMedia");
  const listSocial = t.raw("listSocial") as string[];
  const listAdv = t.raw("listAdv") as string[];

  return (
    <section className="flex gap-8 flex-col md:flex-row w-full max-w-5xl">
      <Card className="flex-1 relative overflow-hidden">
        <CardHeader>
          <SmilePlus className="mb-3 text-sky-400 w-8 h-8" strokeWidth={3} />
          <h3 className="text-lg font-semibold mb-2">{t("socialTitle")}</h3>
          <p className="text-3xl font-medium mb-2">
            €650
            <span className="text-muted-foreground text-base">
              /{t("month")}
            </span>
          </p>
          <p className="text-muted-foreground mb-2 text-sm">
            {t("socialDescription")}
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-px w-full relative overflow-hidden">
            <div className="absolute top-0 h-56 w-full rounded-full blur-xl bg-white/50" />
          </div>
          <div className="text-sm text-muted-foreground">
            <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2">
              {listSocial.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <div className="pointer-events-none absolute -top-20 -left-25 h-56 w-56 rounded-full bg-sky-400/20 blur-2xl" />
      </Card>
      <Card className="flex-1 relative overflow-hidden">
        <CardHeader>
          <Activity className="mb-3 text-green-400 w-8 h-8" strokeWidth={3} />
          <h3 className="text-lg font-semibold mb-2">{t("advTitle")}</h3>
          <p className="text-3xl font-medium mb-2">
            €350
            <span className="text-muted-foreground text-base">
              /{t("month")}
            </span>
          </p>
          <p className="text-muted-foreground mb-2 text-sm">
            {t("advDescription")}
          </p>
        </CardHeader>
        <CardContent className="h-full mb-2">
          <div className="h-px w-full relative overflow-hidden">
            <div className="absolute top-0 h-56 w-full rounded-full blur-xl bg-white/50" />
          </div>
          <div className="text-sm text-muted-foreground h-full">
            <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2 h-full flex flex-col">
              {listAdv.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> {item}
                </li>
              ))}
              <li className="flex items-center gap-2 text-xs mt-auto">
                {t("note")}
              </li>
            </ul>
          </div>
        </CardContent>
        <div className="pointer-events-none absolute -top-20 -left-25 h-56 w-56 rounded-full bg-green-400/20 blur-2xl" />
      </Card>
      <div className="flex-1 flex flex-col gap-8 ">
        <Card className="flex-1 relative overflow-hidden border-fuchsia-400">
          <div className="absolute pt-3 -top-2 right-4 bg-fuchsia-500 text-white text-xs font-semibold px-3 py-1 rounded-sm shadow-lg shadow-fuchsia-500/30">
            Hot Deal!
          </div>
          <CardHeader>
            <h3 className="text-lg font-semibold mb-2">
              {t("socialTitle")} + ADV
            </h3>
            <p className="text-3xl font-medium mb-2">
              €900
              <span className="text-muted-foreground text-base">
                /{t("month")}
              </span>
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <CheckCircle className="w-4 h-4" />
              {t("allIncluded")}
            </p>
          </CardHeader>
          <CardContent></CardContent>
          <div className="pointer-events-none absolute -top-20 -left-25 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-2xl" />
        </Card>
        <Card className="flex-1 relative overflow-hidden">
          <CardHeader>
            <h3 className="text-lg font-semibold mb-2">{t("customPlan")}</h3>
            <p className="text-3xl font-medium mb-2">Custom</p>
            <p className="text-muted-foreground mb-2 text-sm">
              {t("customDescription")}
            </p>
          </CardHeader>
          <CardContent className="h-full mb-2"></CardContent>
          <div className="pointer-events-none absolute -top-20 -left-25 h-56 w-56 rounded-full bg-slate-600/20 blur-2xl" />
        </Card>
      </div>
    </section>
  );
};

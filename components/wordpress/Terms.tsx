import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import parse from "html-react-parser";
import { CheckCircle, CircleX } from "lucide-react";

const Terms = () => {
  const t = useTranslations("home.wordpress.templates.terms");
  const s = useTranslations("home.wordpress.templates.terms.sections");

  return (
    <Card id="terms">
      <CardHeader>
        <CardTitle>{t("meta.title")}</CardTitle>
        <CardDescription>
          {t.rich("intro", {
            strong: (text: React.ReactNode) => (
              <span className="font-semibold">{text}</span>
            ),
          })}
        </CardDescription>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("product.title")}>
              <AccordionTrigger>{s("product.title")}</AccordionTrigger>
              <AccordionContent>
                <p>
                  {s.rich("product.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("license.title")}>
              <AccordionTrigger>{s("license.title")}</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>
                  {s.rich("license.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
                <p>{s("license.allowedTitle")}</p>
                <div className="space-y-2 pl-3">
                  {(s.raw("license.allowed") as string[]).map((item, i) => (
                    <span key={i} className="flex items-center text-sm">
                      <CheckCircle className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                      {parse(item)}
                    </span>
                  ))}
                </div>
                <p>{s("license.notAllowedTitle")}</p>
                <div className="space-y-2 pl-3">
                  {(s.raw("license.notAllowed") as string[]).map((item, i) => (
                    <span key={i} className="flex items-center text-sm">
                      <CircleX className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                      {parse(item)}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("ownership.title")}>
              <AccordionTrigger>{s("ownership.title")}</AccordionTrigger>
              <AccordionContent>
                <p>
                  {s.rich("ownership.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("updatesSupport.title")}>
              <AccordionTrigger>{s("updatesSupport.title")}</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>{s("updatesSupport.includedTitle")}</p>
                <div className="space-y-2 pl-3">
                  {(s.raw("updatesSupport.included") as string[]).map(
                    (item, i) => (
                      <span key={i} className="flex items-center text-sm">
                        <CheckCircle className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                        {parse(item)}
                      </span>
                    )
                  )}
                </div>
                <p>{s("updatesSupport.excludedTitle")}</p>
                <div className="space-y-2 pl-3">
                  {(s.raw("updatesSupport.excluded") as string[]).map(
                    (item, i) => (
                      <span key={i} className="flex items-center text-sm">
                        <CircleX className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                        {parse(item)}
                      </span>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("refunds.title")}>
              <AccordionTrigger>{s("refunds.title")}</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>
                  {s.rich("refunds.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
                <span className="text-fuchsia-500 text-xs">
                  {s("refunds.extra")}
                </span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("disclaimer.title")}>
              <AccordionTrigger>{s("disclaimer.title")}</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>
                  {s.rich("disclaimer.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
                <div className="space-y-2 pl-3">
                  {(s.raw("disclaimer.list") as string[]).map((item, i) => (
                    <span key={i} className="flex items-center text-sm">
                      <CheckCircle className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                      {parse(item)}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("liability.title")}>
              <AccordionTrigger>{s("liability.title")}</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p>
                  {s.rich("liability.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
                <div className="space-y-2 pl-3">
                  {(s.raw("liability.list") as string[]).map((item, i) => (
                    <span key={i} className="flex items-center text-sm">
                      <CheckCircle className="text-cyan-500 mr-2 h-4 w-4 shrink-0" />
                      {parse(item)}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("termination.title")}>
              <AccordionTrigger>{s("termination.title")}</AccordionTrigger>
              <AccordionContent>
                <p>
                  {s.rich("termination.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value={s("law.title")}>
              <AccordionTrigger>{s("law.title")}</AccordionTrigger>
              <AccordionContent>
                <p>
                  {s.rich("law.text", {
                    strong: (text: React.ReactNode) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  })}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Terms;

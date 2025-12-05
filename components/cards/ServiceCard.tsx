import { useLocale, useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { services } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ServiceCard = () => {
  const t = useTranslations("services");
  const locale = useLocale();
  const router = useRouter();

  return (
    <Card className="w-full border-none bg-linear-to-br from-background to-muted/40 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => router.push(`/${locale}/${service.href}`)}
            className={cn(
              "group relative rounded-xl p-6 md:p-8 flex flex-col gap-4",
              "bg-background/60 backdrop-blur-sm border border-white/10 shadow-sm",
              "transition-all duration-500 ease-out",
              "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:bg-background/70 cursor-pointer"
            )}
          >
            {/* Soft glow accent */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-primary/30 to-primary/0 pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-2xl tracking-tight leading-tight">
                {t(service.title)}
              </h3>

              <ArrowRight className="w-5 h-5 mt-1 opacity-20 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
            </div>

            {/* List */}
            <ul className="space-y-2 text-foreground/80 text-[15px] leading-relaxed">
              {service.list.map((item) => (
                <li key={item} className="pl-4 relative">
                  <span className="absolute left-0 top-2 size-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></span>
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

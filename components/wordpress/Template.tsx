"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
  title?: string;
  heroImage?: string;
  templateInfo?: string[];
  subtitle?: string;
  description?: string;
  price?: number;
  href?: string;
  previewHref?: string;
}

const Template = ({
  title,
  heroImage,
  templateInfo,
  subtitle,
  description,
  previewHref,
  price,
  href,
}: Props) => {
  const t = useTranslations("home.wordpress");
  const terms = useTranslations("home.wordpress.templates.terms");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row items-start gap-16">
        {/* CONTENT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          {templateInfo && (
            <div className="flex flex-wrap gap-2">
              {templateInfo.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="pointer-events-none text-sm border-muted-foreground/20 rounded-full px-5"
                >
                  <CheckCircle className="text-cyan-500 mr-2 h-4 w-4" />
                  {item}
                </Button>
              ))}
            </div>
          )}

          <div className="space-y-2 max-w-xl">
            <h2 className="text-lg md:text-xl font-semibold">{subtitle}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-4">
            {price && (
              <p className="text-5xl md:text-6xl font-bold">{price}€</p>
            )}

            <div className="flex flex-col gap-y-2">
              <div className="gap-2 flex items-center">
                {previewHref && (
                  <Button
                    variant="default"
                    className="md:w-auto font-semibold"
                    asChild
                  >
                    <Link href={previewHref} target="_blank">
                      Live Preview
                    </Link>
                  </Button>
                )}
                {href && (
                  <Button
                    variant="default"
                    className="md:w-auto font-semibold"
                    asChild
                  >
                    <Link href={href} target="_blank">
                      {price ? t("buy") : t("free")}
                    </Link>
                  </Button>
                )}
              </div>
              <button
                onClick={() => {
                  document.getElementById("terms")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-xs text-cyan-500 hover:text-cyan-700 cursor-pointer"
              >
                {terms.rich("intro", {
                  strong: (text: React.ReactNode) => (
                    <span className="font-semibold">{text}</span>
                  ),
                })}
              </button>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <aside className="w-full md:w-[420px] shrink-0 mx-auto">
          <div className="flex justify-center md:justify-end">
            {heroImage && (
              <Image
                src={heroImage}
                alt={title || ""}
                width={420}
                height={520}
                priority
                className="h-auto max-w-full"
              />
            )}
          </div>
        </aside>
      </div>

      <div className="mt-20 h-px w-full bg-border" />
    </section>
  );
};

export default Template;

"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CheckCircle, Flame, Sparkles, Tags } from "lucide-react";
import { Badge } from "../ui/badge";

interface Props {
  title: string;
  description: string;
  image: string;
  price?: number;
  href?: string;
  isNew?: boolean;
  isPopular?: boolean;
  info?: string[];
}

const WordpressCard = ({
  title,
  description,
  image,
  price,
  href,
  isNew,
  isPopular,
  info,
}: Props) => {
  const t = useTranslations("home.wordpress");

  return (
    <div className="relative md:max-w-xs w-full bg-slate-900 rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {/* BADGE */}
      {(isNew || isPopular) && (
        <div className="absolute top-4 right-4 flex gap-1">
          {isNew && (
            <Badge className="bg-fuchsia-400 font-semibold">
              New <Sparkles size={16} />{" "}
            </Badge>
          )}
          {isPopular && (
            <Badge className="bg-red-600 font-semibold">
              Popular <Flame size={16} />
            </Badge>
          )}
        </div>
      )}

      {/* IMAGE */}
      <div className="w-full bg-muted flex justify-center">
        <Image
          src={image}
          alt={title}
          width={500}
          height={180}
          className="h-auto max-w-full"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>

          <p className="text-muted-foreground mt-2 text-xs">{description}</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
          {price && <p className="text-2xl font-bold">{price}€</p>}

          {href && (
            <Button variant="secondary" className="w-full md:w-auto" asChild>
              <Link href={href}>{price ? t("buy") : t("free")}</Link>
            </Button>
          )}
        </div>
        {/* INFO TAGS */}
        {info && (
          <div className="flex flex-wrap gap-1 mt-2 items-center">
            <Tags className="h-3 w-3 text-muted-foreground" />
            {info.map((item, i) => (
              <span key={i} className="flex items-center gap-1 text-xs">
                {item}
                {i < info.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WordpressCard;

"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";

export const CurrentTime = () => {
  const t = useTranslations("Header");
  const locale = useLocale();

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: "Europe/Rome",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const getDateTime = () => ({
    date: dateFormatter.format(new Date()),
    time: timeFormatter.format(new Date()),
  });

  const [now, setNow] = useState(getDateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(getDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs grid tracking-wider md:grid-cols-4 font-semibold w-full leading-relaxed">
      <div className="md:col-span-1">{now.date}</div>
      <div className="tabular-nums md:col-span-1">{now.time}</div>
      <div className="md:col-span-2 flex md:flex-row flex-col items-start ">
        <span>{t("country")}</span>
        <span className="md:ml-auto">
          <LocaleSwitcher />
        </span>
      </div>
    </div>
  );
};

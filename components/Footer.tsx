import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("VAT");
  const i = useTranslations("home");
  return (
    <div className="bg-stone-900 px-4">
      <footer className="mx-auto grid w-full max-w-360 grid-cols-1 items-baseline gap-6 py-3 font-heading text-base font-semibold text-stone-100 md:grid-cols-12 md:gap-6">
        <div className="leading-none md:col-span-3">
          <p>Maria Basso</p>
          <p className="text-sm">{i("availability")}</p>
        </div>

        <div className="flex-1 font-semibold leading-none md:col-span-7">
          <p>
            {t("label")} {t("value")}
          </p>
          <Link
            href="mailto:maria.basso.td@gmail.com"
            className="hover:bg-red-500"
          >
            maria.basso.td@gmail.com
          </Link>
        </div>

        <div className="md:col-span-2 md:text-right">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

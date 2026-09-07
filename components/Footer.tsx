import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("VAT");
  return (
    <footer className="grid grid-cols-1 font-heading py-3 md:grid-cols-12 gap-6 max-w-360 mx-auto text-base items-baseline w-full shrink-0 font-semibold text-foreground px-4 lg:px-0">
      <div className="col-span-1 md:col-span-3 leading-none">
        <p>Maria Basso</p>
        <p>Available for freelance work</p>
      </div>
      <div className="col-span-1 md:col-span-7 leading-none">
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
      <div className="col-span-1 md:col-span-2 md:text-right ">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("VAT");
  return (
    <footer className="grid grid-cols-1 py-3 md:grid-cols-12 gap-6 max-w-300 mx-auto text-xs md:h-15 items-baseline w-full shrink-0 tracking-wide font-semibold text-foreground">
      <div className="col-span-1 md:col-span-3">
        <p>
          Maria Basso
          <br />
          {t("label")} {t("value")}
        </p>
      </div>
      <div className="col-span-1 md:col-span-7">
        <p>maria.basso.td@gmail.com</p>
      </div>
      <div className="col-span-1 md:col-span-2 md:text-right ">
        <p>Developed by myself</p>
        <p>&copy; 2013–{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

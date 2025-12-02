import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");
  return (
    <>
      <footer className="flex flex-col border-t bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5 mt-10 md:mt-25">
        <div className="flex-1 min-h-[100px] p-4">Some Content</div>
        <small className="p-4 select-none text-muted-foreground/70 text-center md:text-left">
          Tydedev &copy; {year} - {t("rights")} |{" "}
          <Link href="/privacy" className="font-semibold">
            Privacy Policy
          </Link>
        </small>
      </footer>
    </>
  );
};

export default Footer;

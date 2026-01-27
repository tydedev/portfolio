import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");
  return (
    <>
      <footer className="flex flex-col border-t bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5 mt-10 md:mt-25">
        <div className="flex-1 min-h-[100px] flex flex-col justify-center p-4 space-y-3">
          <Logo size="xl" />
          <p className="font-semibold text-center text-lg">Tydedev</p>
          <p className="text-center text-muted-foreground text-sm">
            Maria Basso
          </p>
          <p className="text-center text-muted-foreground text-sm">
            {t("vatNumber")}
          </p>
          <p className="text-center text-muted-foreground text-sm">
            Torre Del Greco, 80059 Napoli
          </p>
          <p className="text-center text-muted-foreground text-sm">
            <Link href="mailto:info@tydedev.it">info@tydedev.it</Link>
          </p>
        </div>
        <small className="p-4 select-none text-muted-foreground/70 text-center">
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

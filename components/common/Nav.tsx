import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const Nav = ({ links }: { links: { name: string; href?: string }[] }) => {
  const t = useTranslations("header.nav");
  return (
    <nav className="ml-auto mr-2 hidden md:flex">
      {links.map((link) => (
        <Button
          key={link.name}
          variant={"ghost"}
          size={"sm"}
          className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link href={link.href || "#"}>{t(link.name)}</Link>
        </Button>
      ))}
    </nav>
  );
};

export default Nav;

import Link from "next/link";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Nav = ({
  links,
}: {
  links: {
    name: string;
    href?: string;
    isDropDown?: boolean;
    dropDown?: { name: string; href?: string }[];
  }[];
}) => {
  const locale = useLocale();
  const t = useTranslations("header.nav");
  const s = useTranslations("services");
  return (
    <nav className="ml-auto mr-2 hidden md:flex">
      {links.map((link) =>
        !link.isDropDown ? (
          // --- LINK NORMALE ---
          <Button
            key={link.name}
            variant="ghost"
            size="sm"
            className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href={link.href || ""}>{t(link.name)}</Link>
          </Button>
        ) : (
          // --- DROPDOWN ---
          <DropdownMenu key={link.name} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
              >
                {t(link.name)}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {link.dropDown?.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  asChild
                  className="cursor-pointer"
                >
                  <Link href={`/${locale}/${item.href}` || ""}>
                    {s(item.name)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )
      )}
    </nav>
  );
};

export default Nav;

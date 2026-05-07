import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useState } from "react";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

const MobileMenu = () => {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);
  return (
    <Sheet modal={false} open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="rounded-none" size={"icon"}>
          <Menu className="md:hidden" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden flex flex-col space-y-6 p-6 pt-15 w-full! sm:max-w-full">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 text-4xl font-semibold">
          <Link href="/work" onClick={() => setOpen(false)}>
            {t("work")}
          </Link>
          <Link href="/profile" onClick={() => setOpen(false)}>
            {t("profile")}
          </Link>
          <DropdownMenuSeparator className="my-4" />
          <p className="text-2xl font-normal uppercase">{t("services")}</p>
          <Link href="/services/epub-conversion" onClick={() => setOpen(false)}>
            {t("eBook")}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

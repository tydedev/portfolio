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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

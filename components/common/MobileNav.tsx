"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

type LinkItem = {
  name: string;
  href?: string;
  icon?: LucideIcon;
  isDropDown?: boolean;
  dropDown?: { name: string; href?: string }[];
};

const MobileNav = ({ links }: { links: LinkItem[] }) => {
  const t = useTranslations("header.nav");
  const s = useTranslations("services");
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen} modal={false}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <div className="mx-auto w-full max-w-sm flex flex-col">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="p-6 flex flex-col gap-2">
              {links.map((link) => {
                if (!link.dropDown) {
                  return (
                    <Button
                      onClick={() => setOpen(false)}
                      key={link.name}
                      variant="ghost"
                      size="sm"
                      className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <Link href={link.href || ""}>{t(link.name)}</Link>
                    </Button>
                  );
                }
              })}
              <DropdownMenuSeparator className="my-3" />
              {links.map((link) => {
                if (link.dropDown) {
                  return (
                    <div key={link.name} className="w-full">
                      <p className="text-center mb-6">{t(link.name)}</p>
                      <div className="flex flex-col gap-2 w-full">
                        {link.dropDown.map((item) => (
                          <Button
                            onClick={() => setOpen(false)}
                            key={item.name}
                            variant="ghost"
                            size="sm"
                            className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
                            asChild
                          >
                            <Link href={item.href || ""}>{s(item.name)}</Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

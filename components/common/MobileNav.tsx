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

type LinkItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
};

const MobileNav = ({ links }: { links: LinkItem[] }) => {
  const t = useTranslations("header.nav");
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
              {links.map(link => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    className="text-base justify-start font-semibold leading-6 text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {Icon && <Icon className="mr-2 h-4 w-4" />}
                      {t(link.name)}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

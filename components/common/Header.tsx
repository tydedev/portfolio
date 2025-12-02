"use client";

import LangToggle from "../switchers/LangToggle";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import LoadingState from "../ui/LoadingState";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Home, Mail, Shapes } from "lucide-react";

const links = [
  { name: "home", href: "/", icon: Home },
  { name: "projects", href: "/projects", icon: Shapes },
  { name: "contacts", href: "/contacts", icon: Mail },
];

const Header = () => {
  return (
    <header className="sticky  top-0 z-50 border-b h-13 flex items-center justify-between px-4 select-none bg-slate-950/75 backdrop-blur-lg">
      <MobileNav links={links} />
      <Logo hasText size="lg" hasLink />
      <Nav links={links} />
      <LangToggle />
    </header>
  );
};

export default Header;

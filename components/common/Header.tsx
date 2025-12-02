"use client";

import LangToggle from "../switchers/LangToggle";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Home, Mail } from "lucide-react";

const links = [
  { name: "home", href: "/", icon: Home },
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

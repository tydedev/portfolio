"use client";

import { links } from "@/lib/constants";
import LangToggle from "../switchers/LangToggle";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

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

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import { getNavigation } from "@/lib/nav";
import { useLocale } from "next-intl";

const Navbar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const navigation = getNavigation(locale);
  const isActive = (
    href: string | { pathname: string; params?: Record<string, string> },
  ) => {
    const path = typeof href === "string" ? href : href.pathname;
    return pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center justify-end space-x-6 font-semibold">
      {navigation.map((link) => (
        <Link
          key={link.label}
          href={link.href as never}
          className={cn(
            "text-foreground/60 hover:text-foreground transition-all duration-200",
            isActive(link.href) && "text-white",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

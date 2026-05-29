import { navigation } from "@/lib/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // normalizza eventuale locale (/it, /en)
  const normalizedPath = pathname.replace(/^\/(it|en)/, "") || "/";

  const isActive = (href: string) => {
    return normalizedPath === href;
  };

  return (
    <nav className="hidden md:flex items-center justify-end space-x-6 font-semibold">
      {navigation.map((link) => (
        <Link
          key={link.label}
          href={link.href}
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

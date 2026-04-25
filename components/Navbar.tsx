import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Design",
    href: "/graphic-design",
  },
  {
    name: "Development",
    href: "/web-development",
  },
  {
    name: "Profile",
    href: "/profile",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="space-x-10 text-sm tracking-wide font-semibold">
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-foreground/60 hover:text-foreground transition-all duration-200",
            pathname === link.href && "text-foreground",
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

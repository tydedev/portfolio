import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hasText?: boolean;
  size?: "sm" | "md" | "lg";
  hasLink?: boolean;
}

const Logo = ({ hasText, size = "md", hasLink }: Props) => {
  const content = (
    <span
      className={cn(
        "flex items-center justify-center gap-x-2 font-semibold select-none",
        size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-lg"
      )}
    >
      <Image
        src="/images/logo_icon.svg"
        className="shrink-0 self-center"
        width={size === "sm" ? 6 : size === "md" ? 9 : 16}
        height={size === "sm" ? 6 : size === "md" ? 9 : 16}
        alt="Tydedev Logo"
        priority
      />
      {hasText && "Tydedev"}
    </span>
  );

  return hasLink ? <Link href="/">{content}</Link> : content;
};

export default Logo;

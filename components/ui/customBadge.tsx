import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface Props {
  className?: string;
  glow?: boolean;
  glowColor?: "blue" | "green" | "cyan" | "yellow" | "purple" | "fuchsia";
  children?: React.ReactNode;
}

const CustomBadge = ({
  className,
  glow,
  glowColor = "blue",
  children,
}: Props) => {
  const glowClassesMap: Record<string, string> = {
    blue: "border-blue-400 bg-blue-500/20 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]",
    cyan: "border-cyan-400 bg-cyan-500/20 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]",
    green:
      "border-green-400 bg-green-500/20 drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]",
    yellow:
      "border-yellow-400 bg-yellow-500/20 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]",
    purple:
      "border-purple-400 bg-purple-500/20 drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]",
    fuchsia:
      "border-fuchsia-400 bg-fuchsia-500/20 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]",
  };

  const glowClasses = glow ? glowClassesMap[glowColor] : "";

  return (
    <Badge
      variant="outline"
      className={cn("rounded-sm lg:text-base", className, glowClasses)}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;

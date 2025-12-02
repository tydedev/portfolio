import { ReactNode } from "react";
import CustomBadge from "../ui/customBadge";

interface Props {
  badge?: string;
  title: string;
  text: ReactNode;
  color?: "blue" | "green" | "cyan" | "yellow" | "purple" | "fuchsia";
}

const SkillCard = ({ badge, title, text, color }: Props) => {
  return (
    <div className="flex flex-col gap-y-4 items-center py-10 text-center ">
      {badge && (
        <CustomBadge glow glowColor={color}>
          {badge}
        </CustomBadge>
      )}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm lg:text-base text-muted-foreground">{text}</p>
      </div>
    </div>
  );
};

export default SkillCard;

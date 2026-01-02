"use client";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface Props {
  categories: string[];
  colors: string[];
  selectedCategories: string[];
  selectedColors: string[];
  toggleCategory: (category: string) => void;
  toggleColor: (color: string) => void;
}

const MobileFilters = ({
  categories,
  colors,
  selectedCategories,
  selectedColors,
  toggleCategory,
  toggleColor,
}: Props) => {
  const t = useTranslations("home.wordpress");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"gradient"}>
          <Filter className="h-4 w-4" />
          <span className="font-medium">{t("filtersLabel")}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t("filtersLabel")}</DrawerTitle>
          <DrawerDescription>{t("filtersMobileDescription")}</DrawerDescription>
        </DrawerHeader>
        <aside className="md:w-64 shrink-0 h-full overflow-y-auto border-r p-6">
          <h3 className="font-semibold mb-4">{t("categoriesLabel")}</h3>

          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <Checkbox
                  id={cat}
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
                />
                <Label
                  htmlFor={cat}
                  className="capitalize cursor-pointer font-normal"
                >
                  {cat}
                </Label>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-4 mt-8">{t("colorsLabel")}</h3>

          <div className="flex flex-wrap gap-3 max-w-[200px]">
            {colors.map((color) => {
              const isChecked = selectedColors.includes(color);

              return (
                <label
                  key={color}
                  htmlFor={`color-${color}`}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`color-${color}`}
                    aria-label={color}
                    checked={isChecked}
                    onChange={() => toggleColor(color)}
                    className="sr-only"
                  />

                  <span
                    className={`
            h-4 w-4 rounded-full border
            ${isChecked ? "ring-2 ring-offset-2 ring-slate-50" : ""}
            ${color === "black" && "border-muted-foreground/50"}
          `}
                    style={{ backgroundColor: color }}
                  />
                </label>
              );
            })}
          </div>
        </aside>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">{t("closeFilters")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilters;

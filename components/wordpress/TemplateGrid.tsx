"use client";

import { useState } from "react";
import { templates, categories, colors } from "@/lib/constants";
import WordpressCard from "./WordpressCard";
import { useTranslations } from "next-intl";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Filter, Search } from "lucide-react";
import { Button } from "../ui/button";
import MobileFilters from "./MobileFilters";

const TemplateGrid = () => {
  const t = useTranslations("home.wordpress");
  const w = useTranslations("home.wordpress.templates");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const query = searchQuery.trim().toLowerCase();
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(template.category);

    const matchesColor =
      selectedColors.length === 0 ||
      template.colors?.some((c) => selectedColors.includes(c));

    const matchesSearch =
      !query ||
      template.name.toLowerCase().includes(query) ||
      template.description.toLowerCase().includes(query) ||
      template.info?.some((kw) => kw.toLowerCase().includes(query));

    return matchesCategory && matchesColor && matchesSearch;
  });

  const orderedTemplates = query
    ? filteredTemplates
    : [
        ...filteredTemplates.filter((t) => t.isPopular),
        ...filteredTemplates.filter((t) => !t.isPopular),
      ];

  return (
    <section className="max-w-7xl w-full mx-auto h-screen py-12 px-6 flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-center mb-20 gap-y-5">
        <h1 className="font-semibold text-2xl">
          {t.rich("title", {
            cyan: (text) => <span className="text-cyan-500">{text}</span>,
          })}
        </h1>

        <form className="md:max-w-sm w-full ml-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Content */}
      <div className="flex flex-1 gap-8 h-full">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0 h-full overflow-y-auto border-r hidden md:block">
          <div className="flex gap-x-1 items-center mb-4">
            <Filter className="h-4 w-4" />
            <h3 className="font-medium">{t("filtersLabel")}</h3>
          </div>

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

        {/* Grid */}
        <div className="flex-1 h-full">
          <div className="flex gap-x-1 items-center justify-end mb-8 md:hidden">
            <MobileFilters
              categories={categories}
              colors={colors}
              selectedCategories={selectedCategories}
              selectedColors={selectedColors}
              toggleCategory={toggleCategory}
              toggleColor={toggleColor}
            />
          </div>
          {orderedTemplates.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center border rounded-md">
              <p className="text-gray-500 text-center">{t("noResults")}.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {orderedTemplates.map((template) => (
                <WordpressCard
                  key={template.id}
                  title={w(template.name)}
                  description={w(template.description)}
                  price={template.price}
                  href={template.href}
                  image={template.image}
                  info={template.info}
                  isNew={template.isNew}
                  isPopular={template.isPopular}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TemplateGrid;

"use client";

import { Project } from "./ProjectMain";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  projects: Project[];
  setFiltered: (projects: Project[]) => void;
}

export default function ProjectsSidebar({ projects, setFiltered }: Props) {
  const categories = Array.from(new Set(projects.map((p) => p.type))).sort();

  const [selected, setSelected] = useState("all");

  const handleFilter = (type: string) => {
    setSelected(type);

    if (type === "all") {
      return setFiltered(projects);
    }

    const filtered = projects.filter((p) => p.type === type);
    setFiltered(filtered);
  };

  return (
    <aside className="w-64 p-4 border-r flex flex-col px-9 bg-slate-900">
      <h2 className="mb-4 font-semibold text-lg self-start">Filtra</h2>
      <RadioGroup
        value={selected}
        onValueChange={(val) => handleFilter(val)}
        className="space-y-3 text-xs"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all" className="cursor-pointer">
            Tutti
          </Label>
        </div>

        {categories.map((cat) => {
          const id = cat.toLowerCase().replace(/\s+/g, "-");
          return (
            <div key={cat} className="flex items-center space-x-2">
              <RadioGroupItem value={cat} id={id} />
              <Label htmlFor={id} className="cursor-pointer">
                {cat}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </aside>
  );
}

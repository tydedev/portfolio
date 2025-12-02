"use client";

import ProjectsMain from "@/components/projects/ProjectMain";
import ProjectsSidebar from "@/components/projects/ProjectSidebar";
import projectsData from "@/db/projects.json";
import { useState } from "react";

const ProjectsPage = () => {
  const projects = projectsData;
  const [filtered, setFiltered] = useState(projects);

  return (
    <div className="flex items w-full h-full">
      <ProjectsSidebar projects={projects} setFiltered={setFiltered} />
      <ProjectsMain projects={filtered} />
    </div>
  );
};

export default ProjectsPage;

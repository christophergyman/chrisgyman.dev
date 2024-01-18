import { Project } from "../project";
import { ProjectBubble } from "./project-bubble";

interface ProjectGridProps {
  projectList: Project[];
}

function ProjectGrid({ projectList }: ProjectGridProps) {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0">
      {projectList.map((project) => (
        <ProjectBubble project={project} />
      ))}
    </div>
  );
}

export { ProjectGrid };

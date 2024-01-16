import { Project } from "../project";
import { ProjectBubble } from "./project-bubble";

interface ProjectGridProps {
  projectList: Project[];
}

function ProjectGrid({ projectList }: ProjectGridProps) {
  return (
    <div>
      {projectList.map((project) => (
        <ProjectBubble project={project} />
      ))}
    </div>
  );
}

export { ProjectGrid };

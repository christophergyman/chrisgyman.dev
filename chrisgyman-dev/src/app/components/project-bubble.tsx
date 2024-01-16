import type { Project } from "../project";

interface ProjectBubbleProps {
  project: Project;
}

function ProjectBubble({ project }: ProjectBubbleProps) {
  return (
    <div className="outline m-5 w-1/2">
      <p>{project.title}</p>
      <p>{project.date.toString()}</p>
      <p>{project.link}</p>
    </div>
  );
}

export { ProjectBubble };

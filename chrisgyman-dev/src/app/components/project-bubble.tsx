import type { Project } from "../project";

interface ProjectBubbleProps {
  project: Project;
}

function ProjectBubble({ project }: ProjectBubbleProps) {
  return (
    <div className="outline m-5 w-1/2">
      <div>
        <p>{project.title}</p>
        <p>{project.link}</p>
        <p>{project.postType}</p>
        <p>{project.description}</p>
        <p>{project.bubbleColor}</p>
        <p>{project.bubbleName}</p>
      </div>
    </div>
  );
}

export { ProjectBubble };

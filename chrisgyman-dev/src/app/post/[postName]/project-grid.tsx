import { ProjectBubble } from "@/app/components/project-bubble";
import { ProjectGridProps } from "./project-grid-props";

export function ProjectGridComponent({ projectListArray }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 pt-10 px-2">
      {projectListArray.map((project) => (
        <ProjectBubble project={project} />
      ))}
    </div>
  );
}

import type { Project } from "./project";

interface ProjectBubbleProps {
  project: Project;
}

function ProjectBubble({ project }: ProjectBubbleProps) {
  return (
    <div className="overflow-hidden outline outline-1 dark:outline-[#bdbdbd] rounded-xl md:w-[397px] lg:w-[397px] xl:w-[397px] 2xl:w-[397px]">
      <div className="m-5">
        <div className="">
          <a href={project.link} className="flex flex-row">
            <p className="pr-3 text-lg">📘</p>
            <p className="font-black text-lg text-[#539bf5] underline">
              {project.title}
            </p>
            <div className="pl-3 m-1">
              <div></div>
              <div className="badge badge-neutral shadow-lg text-sm">
                {project.postType}
              </div>
            </div>
          </a>
        </div>
        <div className="text-[12px] dark:text-[#bdbdbd]">
          <p>{project.description}</p>
          <div className="flex flex-row pt-2">
            <p className="pr-1">{project.bubbleColor}</p>
            <p>{project.bubbleName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectBubble };

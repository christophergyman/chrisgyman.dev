import { GridProps } from "./gridprops";
import { ProjectBubble } from "./project-bubble";
import { PostCardComponent } from "./post-card";

function GridDisplay({ projectListArray, postCardListArr }: GridProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 pt-10 pb-10 px-2">
        {projectListArray.map((project) => (
          <ProjectBubble project={project} />
        ))}

        {postCardListArr.map((postcard) => (
          <PostCardComponent postCardDetails={postcard} />
        ))}
      </div>
    </div>
  );
}

export { GridDisplay };

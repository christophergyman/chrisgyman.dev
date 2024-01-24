import { GridProps } from "../gridprops";
import { ProjectBubble } from "./project-bubble";
import { PostCardComponent } from "./post-card";

function GridDisplay({ projectListArray, postCardListArr }: GridProps) {
  return (
    <div>
      <div className="grid grid-cols-2">
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

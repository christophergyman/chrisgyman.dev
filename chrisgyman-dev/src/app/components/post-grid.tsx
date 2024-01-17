import { Post } from "../post";
import { PostBubble } from "./post-bubble";

interface PostGridProps {
  postList: Post[];
}

function PostGrid({ postList }: PostGridProps) {
  return (
    <div className="">
      {postList.map((post) => (
        <PostBubble post={post} />
      ))}
    </div>
  );
}

export { PostGrid };

import { Post } from "../post";
import { PostBubble } from "./post-bubble";

interface PostGridProps {
  postList: Post[];
}

function PostGrid({ postList }: PostGridProps) {
  return (
    <div className="w-fit md:w-fit lg:w-[890px] xl:w-[890px] 2xl:w-[890px]">
      {postList.map((post) => (
        <PostBubble post={post} />
      ))}
    </div>
  );
}

export { PostGrid };

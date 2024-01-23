import { PostCardComponent } from "./post-card";
import { PostCardProps } from "../postcard";

interface PostCardGridProps {
  postGridArray: PostCardProps[];
}

function PostCardGridComponent({ postGridArray }: PostCardGridProps) {
  return (
    // grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0 w-fit"
    <div className="mt-4 mb-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 w-fit">
        {postGridArray.map((postGridArray) => (
          <PostCardComponent postCardDetails={postGridArray} />
        ))}
      </div>
    </div>
  );
}

export { PostCardGridComponent };

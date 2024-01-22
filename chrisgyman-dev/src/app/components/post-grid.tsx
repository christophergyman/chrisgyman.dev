import { PostBubbleComponentProps } from "../post";
import { PostBubble } from "./post-bubble";


interface PostGridProps{
  postSourceArray: PostBubbleComponentProps[];
}


  // const examplePostArr: PostBubbleComponentProps[] = [examplePost, examplePost];

function PostGrid({ postSourceArray}: PostGridProps) {
  return (
    <div className="w-fit md:w-fit lg:w-[890px] xl:w-[890px] 2xl:w-[890px]">
      {postSourceArray.map((postSourceArray) => (
        <PostBubble filepath={postSourceArray.filepath} />
      ))}



      {/* {postList.map((postList) => (
        <PostBubble filepath={post} />
      ))} */}
    </div>
  );
}

export { PostGrid };

import { Post } from "../post";

interface PostBubbleProps {
  post: Post;
}

function PostBubble({ post }: PostBubbleProps) {
  // mt-2 mx-5 mb-6
  return (
    <div className=" outline outline-1 outline-[#bdbdbd] rounded-xl lg:m-5 md:m-3 mt-5 mx-2">
      <div className="px-6 py-1">
        <a href={post.link}>
          <h1 className="text-lg text-[#bdbdbd] font-bold underline md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
            {post.title}
          </h1>
        </a>
      </div>
      <hr className="w-full text-[#bdbdbd]" />
      <div className="px-6 py-1 text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">
        <p className="text text-[#bdbdbd] ">{post.content}</p>
      </div>
    </div>
  );
}

export { PostBubble };

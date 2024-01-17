import { Post } from "../post";

interface PostBubbleProps {
  post: Post;
}

function PostBubble({ post }: PostBubbleProps) {
  return (
    <div className=" outline outline-1 outline-[#bdbdbd] rounded-xl mt-2 mx-5 mb-6 ">
      <div className="px-6 py-1">
        <a href={post.link}>
          <h1 className="text-lg text-[#bdbdbd] font-bold underline">
            {post.title}
          </h1>
        </a>
      </div>
      <hr className="w-full" />
      <div className="px-6 py-1">
        <p className="text text-[#bdbdbd] ">{post.content}</p>
      </div>
    </div>
  );
}

export { PostBubble };

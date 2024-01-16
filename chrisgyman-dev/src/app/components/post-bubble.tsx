import { Post } from "../post";

interface PostBubbleProps {
  post: Post;
}

function PostBubble({ post }: PostBubbleProps) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.link}</p>
      <p>{post.content}</p>
    </div>
  );
}

export { PostBubble };

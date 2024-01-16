import Image from "next/image";
import { ProjectBubble } from "./components/project-bubble";
import { Project } from "./project";
import { ProjectGrid } from "./components/project-grid";
import { PostGrid } from "./components/post-grid";
import { Post } from "./post";

export default function Home() {
  // example project
  const exampleProject: Project = {
    id: 1,
    title: "Haskell Compiler",
    link: "https://github.com/christophergyman",
    postType: "Project",
    description: "Base compiler built using Haskell",
    bubbleColor: "blue",
    bubbleName: "Haskell",
  };
  // example projectArr
  const exampleProjectArr: Project[] = [exampleProject, exampleProject];

  // example post
  const examplePost: Post = {
    id: 1,
    title: "How I got into front-end dev",
    content: "The way that I got into.... ",
    link: "https://www.chrisgyman.com",
  };

  const examplePostArr: Post[] = [examplePost, examplePost];

  // return JSX
  return (
    <main>
      <div className="flex justify-center w-screen h-screen mt-[50px]">
        <div className="outline sm:w-full lg:w-1/2 ">
          <h1 className="font-black text-white text-4xl text-center">
            Chrisgyman.dev
          </h1>
          <ProjectGrid projectList={exampleProjectArr} />
          <PostGrid postList={examplePostArr} />
        </div>
      </div>
    </main>
  );
}

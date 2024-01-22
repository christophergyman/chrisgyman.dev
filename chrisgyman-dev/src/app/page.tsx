import Image from "next/image";
import { ProjectBubble } from "./components/project-bubble";
import { Project } from "./project";
import { ProjectGrid } from "./components/project-grid";
import { PostGrid } from "./components/post-grid";
import { Post } from "./post";

export default function Home() {
  // Test data
  // example project
  const exampleProject: Project = {
    id: 1,
    title: "Haskell Compiler",
    link: "https://github.com/christophergyman",
    postType: "Project",
    description:
      "This project is based around creating a simple compiler in react",
    bubbleColor: "🔵",
    bubbleName: "Haskell",
  };
  // example projectArr
  const exampleProjectArr: Project[] = [
    exampleProject,
    exampleProject,
    exampleProject,
    exampleProject,
  ];

  // example post
  const examplePost: Post = {
    id: 1,
    title: "How I got into front-end dev",
    content: "",
    link: "https://www.chrisgyman.com",
  };

  const examplePostArr: Post[] = [examplePost, examplePost];

  // return JSX
  return (
    <main>
      <div className="flex flex-col items-center w-screen h-screen mt-10">
        <h1 className="font-black text-white text-4xl">Chrisgyman.dev</h1>
        <div className="flex flex-col items-center">
          <ProjectGrid projectList={exampleProjectArr} />
          <PostGrid postList={examplePostArr} />
        </div>
      </div>
    </main>
  );
}

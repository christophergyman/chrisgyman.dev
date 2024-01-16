import Image from "next/image";
import { ProjectBubble } from "./components/project-bubble";
import { Project } from "./project";
import { ProjectGrid } from "./components/project-grid";
import { PostGrid } from "./components/post-grid";

export default function Home() {
  // example project
  const exampleProject: Project = {
    title: "Haskell Compiler",
    link: "https://github.com/christophergyman",
    postType: "Project",
    description: "Base compiler built using Haskell",
    bubbleColor: "blue",
    bubbleName: "Haskell",
  };
  // example projectArr
  const exampleProjectArr: Project[] = [exampleProject, exampleProject];

  // return JSX
  return (
    <main>
      <div className="flex justify-center w-screen h-screen mt-[50px]">
        <div className="outline sm:w-full lg:w-1/2 ">
          <h1 className="font-black text-white text-4xl text-center">
            Chrisgyman.dev
          </h1>
          <ProjectGrid projectList={exampleProjectArr} />
        </div>
      </div>
    </main>
  );
}

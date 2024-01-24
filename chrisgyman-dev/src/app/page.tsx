import Image from "next/image";
import { ProjectBubble } from "./components/project-bubble";
import { Project } from "./project";
import { ProjectGrid } from "./components/project-grid";
import { PostGrid } from "./components/post-grid";
import { PostBubbleComponentProps } from "./post";
import { PostCardComponent } from "./components/post-card";
import { PostCardProps } from "./postcard";
import { PostCardGridComponent } from "./components/post-card-grid";
import { GridDisplay } from "./components/grid-display";
import { GridProps } from "./gridprops";

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

  const examplePostCard: PostCardProps = {
    imageSrc:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    imageAlt: "Shoes",
    title: "Why make a website?",
    subTitle: "Its important to present work thats non github-able",
    bubbleText1: "Blog",
    bubbleText2: "Nextjs",
  };

  const arrPostCards: PostCardProps[] = [
    examplePostCard,
    examplePostCard,
    examplePostCard,
    examplePostCard,
  ];

  // return JSX
  return (
    <main>
      <div className="flex flex-col items-center w-screen h-screen mt-10">
        <h1 className="font-black text-white text-4xl">Chrisgyman.dev</h1>
        <div className="flex flex-col items-center">
          <GridDisplay
            projectListArray={exampleProjectArr}
            postCardListArr={arrPostCards}
          />
          {/* <ProjectGrid projectList={exampleProjectArr} />
          <PostCardGridComponent postGridArray={arrPostCards} /> */}
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import { ProjectBubble } from "./components/project-bubble";
import { Project } from "./project";
import { ProjectGrid } from "./components/project-grid";
import { PostGrid } from "./components/post-grid";
import { Post } from "./post";
import { MarkdownComponent } from "./components/markdown-post";

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
    content:
      "In the dynamic landscape of technology, front-end development has continued to evolve and shape the digital experience in profound ways as of 2024. The year 2024 marks a significant era for front-end developers, characterized by a fusion of cutting-edge technologies, refined user interfaces, and a heightened focus on user experience. With the advent of more powerful browsers and the widespread adoption of progressive web applications, front-end developers now wield an arsenal of tools that enable them to create highly responsive and seamless interfaces. The integration of artificial intelligence and machine learning into front-end development has paved the way for personalized user experiences, where interfaces intelligently adapt to individual preferences. Furthermore, the rise of low-code and no-code platforms has democratized the development process, allowing individuals with varying levels of technical expertise to contribute to the creation of user interfaces. In this era, front-end development is not merely about crafting visually appealing designs but is a pivotal force in shaping how users interact with and experience the digital realm. As front-end development in 2024 continues to push the boundaries of innovation, it remains a dynamic field where creativity converges with technology to redefine the digital landscape.",
    link: "https://www.chrisgyman.com",
  };

  const examplePostArr: Post[] = [examplePost, examplePost];

  // return JSX
  return (
    <main>
      <div className="flex flex-col items-center w-screen h-screen mt-10">
        <h1 className="font-black text-white text-4xl">Chrisgyman.dev</h1>
        <MarkdownComponent />
        <div className="flex flex-col items-center">
          <ProjectGrid projectList={exampleProjectArr} />
          <PostGrid postList={examplePostArr} />
        </div>
      </div>
    </main>
  );
}

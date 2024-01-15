import Image from "next/image";
import ProjectBubble from "./components/project-bubble";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center w-screen h-screen mt-[50px]">
        <div className="outline w-[85vh]">
          <h1 className="font-black text-white text-4xl text-center">
            Chrisgyman.dev
          </h1>
          <ProjectBubble />
        </div>
      </div>
    </main>
  );
}

import { link } from "fs";

function ProjectBubble() {
  const projectDetails = {
    emoji: "📘",
    title: "Haskell_compiler",
    posttype: "Compiler",
    description: "Compiler built from scratch",
    language: "Haskell",
    color: "Blue",
    link: "https://github.com/christophergyman/haskell_compiler",
  };

  return (
    <div className="outline outline-[3px] outline-[#BDBDBD] m-5 pt-2 max-w-[380px] rounded-lg h-[95px]">
      <div className="inline-block m-2 w-[363px] h-[80px]">
        <div className="flex flex-row">
          <p>{projectDetails.emoji}</p>
          <a href="https://github.com/christophergyman/haskell_compiler">
            <p className="font-bold pl-2">{projectDetails.title}</p>
          </a>
          <div className="flex outline outline-[1px] outline-[#BDBDBD] ml-[12px] rounded-lg p-1 text-xs">
            <p className="mx-2 text-[#BDBDBD]">{projectDetails.posttype}</p>
          </div>
        </div>

        <div className="text-[#BDBDBD]">
          <p className="text-sm">{projectDetails.description}</p>
          <div className="flex flex-row text-xs">
            <p>{projectDetails.language}</p>
            <p>{projectDetails.color}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBubble;

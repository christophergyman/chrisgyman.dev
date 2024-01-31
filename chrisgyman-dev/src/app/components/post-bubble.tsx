import Markdown from "react-markdown";
import { promises as fs } from "fs";
import { PostBubbleComponentProps } from "./post";

// Async function to read markdown filepath into string
export async function PostBubble({ filepath }: PostBubbleComponentProps) {
  const source = filepath;
  const file = await fs.readFile(process.cwd() + source, "utf8");

  return (
    <div className="flex flex-col items-center outline outline-1 outline-[#bdbdbd] rounded-xl lg:m-5 md:m-3 mt-5 mx-2">
      <div className="prose p-5">
        <Markdown>{file}</Markdown>
      </div>
    </div>
  );
}

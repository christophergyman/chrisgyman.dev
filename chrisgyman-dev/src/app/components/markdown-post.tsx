import Markdown from "react-markdown";
import { promises as fs } from "fs";

export default async function MarkdownComponent() {
  const file = await fs.readFile(process.cwd() + "/public/post.txt", "utf8");
  return (
    <div>
      <Markdown>{file}</Markdown>
    </div>
  );
}

export { MarkdownComponent };

import { PostBubble } from "@/app/components/post-bubble";
import Link from "next/link";
import path from "path";

function getMarkdownDirectory() {
  return path.join(process.cwd(), "src", "app", "markdownfiles/");
}

export default async function FullPost({
  // take in parameter from url and define prop type
  params: { postName },
}: {
  params: {
    postName: string;
  };
}) {
  //markdown filepaht
  let markdownFilesPath: string = "";
  let finalPath: string = "";

  markdownFilesPath = getMarkdownDirectory();
  finalPath = markdownFilesPath + postName + ".md";

  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <Link href="/">
          <h1 className="font-black text-white text-4xl drop-shadow-xl">
            Chrisgyman.dev
          </h1>
        </Link>
        <PostBubble filepath={finalPath} />
      </div>
    </main>
  );
}

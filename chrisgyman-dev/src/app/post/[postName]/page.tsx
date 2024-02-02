import { PostBubble } from "@/app/components/post-bubble";
import Link from "next/link";
import path from "path";

function getMarkdownDirectoryDev() {
  return path.join(process.cwd(), "/public/markdownfiles/");
}

function getMarkdownDirectoryProd() {
  return path.join(process.cwd(), "/markdownfiles/");
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

  // check if prod of dev and read files differently....
  const env = process.env.NODE_ENV;
  if (env == "development") {
    // do something
    markdownFilesPath = getMarkdownDirectoryDev();
    finalPath = markdownFilesPath + postName + ".md";
  } else if (env == "production") {
    markdownFilesPath = getMarkdownDirectoryProd();
    finalPath = markdownFilesPath + postName + ".md";
    // do something
  }

  console.log("final path is: " + { finalPath });

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

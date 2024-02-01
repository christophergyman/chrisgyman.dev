import { PostBubble } from "@/app/components/post-bubble";
import Link from "next/link";

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
    markdownFilesPath = "/public/markdownfiles/";
    finalPath = markdownFilesPath + postName + ".md";
  } else if (env == "production") {
    markdownFilesPath = "/markdownfiles/";
    finalPath = markdownFilesPath + postName + ".md";
    // do something
  }

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

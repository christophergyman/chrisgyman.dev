import { ProjectGridComponent } from "./project-grid";
import { exampleProjectArr } from "@/app/components/grid-data";
import { PostBubble } from "@/app/components/post-bubble";

export default async function FullPost({
  // take in parameter from url and define prop type
  params: { postName },
}: {
  params: {
    postName: string;
  };
}) {
  //markdown filepaht
  const markdownFilesPath: string = "/src/app/markdownfiles/";
  const finalPath: string = (await markdownFilesPath) + postName + ".md";

  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-black text-white text-4xl drop-shadow-xl">
          Chrisgyman.dev
        </h1>
        <PostBubble filepath={finalPath} />
      </div>
    </main>
  );
}

import { GridDisplay } from "./components/grid-display";
import { exampleProjectArr } from "./grid-data";
import { arrPostCards } from "./grid-data";

export default function Home() {
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
        </div>
      </div>
    </main>
  );
}

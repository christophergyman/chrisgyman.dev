import { GridDisplay } from "./components/grid-display";
import { exampleProjectArr } from "./grid-data";
import { arrPostCards } from "./grid-data";
import { AboutMeComponent } from "./components/about-page";

export default function Home() {
  // return JSX
  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-black text-white text-4xl drop-shadow-xl">
          Chrisgyman.dev
        </h1>
        <div className="md:flex lg:flex xl:flex 2xl:flex">
          <div className="pl-6 pt-10 pr-0 md:pr-10 lg:pr-10 2xl:pr-10">
            <AboutMeComponent />
          </div>
          <GridDisplay
            projectListArray={exampleProjectArr}
            postCardListArr={arrPostCards}
          />
        </div>
      </div>
    </main>
  );
}

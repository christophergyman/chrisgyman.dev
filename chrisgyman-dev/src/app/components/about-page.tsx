import logo from "public/profilePIc.jpeg";
import { Avatar } from "./proflie-pic";

function AboutMeComponent() {
  return (
    <div>
      <Avatar />
      <div className="pt-3">
        <p className="font-black text-xl">Christopher Man</p>
        <div className="font-bold text-[#bdbdbd]">
          <p className="text-gray-300 ">@chrisgyman he/him</p>
          <p className="w-80 pt-2">
            🚀 Passionate about Programming | 💻 Code Enthusiast | 🌟 Front End
            Dev
          </p>
        </div>
      </div>
    </div>
  );
}

export { AboutMeComponent };

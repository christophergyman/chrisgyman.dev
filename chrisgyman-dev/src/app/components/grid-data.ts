import { Project } from "./project";
import { PostCardProps } from "./postcard";
import Image from "next/image";

const chrisgymandevProject: Project = {
  id: 1,
  title: "Chrisgyman.dev",
  link: "https://github.com/christophergyman/chrisgyman.dev",
  postType: "Project",
  description: "Personal website written in NextJS using Typescript",
  bubbleColor: "🔵",
  bubbleName: "Typescript",
};

const nobloatWebsite: Project = {
  id: 2,
  title: "Nobloat Website",
  link: "https://github.com/christophergyman/nobloat_website",
  postType: "Project",
  description: "A full website written barebones with no frameworks at all!",
  bubbleColor: "🟠",
  bubbleName: "HTML",
};

const androidWeatherApp: Project = {
  id: 3,
  title: "EX-Weather Android App",
  link: "https://github.com/christophergyman/weatherAndroidApp",
  postType: "Project",
  description: "Android based Weather app using API",
  bubbleColor: "🟡",
  bubbleName: "Java",
};

const campusVideogame: Project = {
  id: 4,
  title: "Campus GPS Game",
  link: "https://github.com/christophergyman/campus_gpa_game",
  postType: "Project",
  description: "A fullstack GPS Web-Dev game written in a team",
  bubbleColor: "🟣",
  bubbleName: "Fullstack",
};

const projectArray: Project[] = [
  chrisgymandevProject,
  nobloatWebsite,
  androidWeatherApp,
  campusVideogame,
];

const learnedFromNoBloat: PostCardProps = {
  imageSrc:
    "/nobloatPostCardimage.png",
  imageAlt: "Learning",
  title: "Learning from NoBloat.Dev",
  subTitle: "Takeaways from a no framework static site",
  bubbleText1: "Blog",
  bubbleText2: "HTML",
  markdownTitleName: "what-i-learned-from-no-bloat",
};

const arrPostCards: PostCardProps[] = [learnedFromNoBloat, learnedFromNoBloat];

export { arrPostCards, projectArray};

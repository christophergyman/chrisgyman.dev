// Test data
// example project
import { Project } from "./project";
import { PostCardProps } from "./postcard";

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

// example projectArr
const exampleProjectArr: Project[] = [
  chrisgymandevProject,
  nobloatWebsite,
  androidWeatherApp,
  campusVideogame,
];

const examplePostCard: PostCardProps = {
  imageSrc:
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  imageAlt: "Shoes",
  title: "Why make a website?",
  subTitle: "Its important to present work thats non github-able",
  bubbleText1: "Blog",
  bubbleText2: "Nextjs",
};

const arrPostCards: PostCardProps[] = [
  examplePostCard,
  examplePostCard,
  examplePostCard,
  examplePostCard,
];

export { arrPostCards, exampleProjectArr };

// Test data
// example project
import { Project } from "./project";
import { PostCardProps } from "./postcard";

const exampleProject: Project = {
  id: 1,
  title: "Haskell Compiler",
  link: "https://github.com/christophergyman",
  postType: "Project",
  description:
    "This project is based around creating a simple compiler in react",
  bubbleColor: "🔵",
  bubbleName: "Haskell",
};
// example projectArr
const exampleProjectArr: Project[] = [
  exampleProject,
  exampleProject,
  exampleProject,
  exampleProject,
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

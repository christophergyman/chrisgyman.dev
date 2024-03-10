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
  id: 1,
  imageSrc: "/nobloatPostCardimage.png",
  imageAlt: "Learning",
  title: "Learning from NoBloat.Dev",
  subTitle: "Takeaways from a no framework static site",
  bubbleText1: "Blog",
  bubbleText2: "HTML",
  markdownTitleName: "what-i-learned-from-no-bloat",
};

const dev2CodeReview: PostCardProps = {
  id: 2,
  imageSrc: "/ytStreamCodeReviewDev2.png",
  imageAlt: "YTStream",
  title: "Code Review YT-Stream",
  subTitle: "Stream: Code Review 16/01/2024",
  bubbleText1: "Stream",
  bubbleText2: "Code Review",
  markdownTitleName: "https://www.youtube.com/watch?v=obqlCZw4azg&t=7s",
};

const dev1DevStream: PostCardProps = {
  id: 3,
  imageSrc: "/ytStreamDevBlogDev1.png",
  imageAlt: "YTStream",
  title: "DevBlog1 YT-Stream",
  subTitle: "Stream: Dev1 Blog 15/01/2024",
  bubbleText1: "Stream",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=2fFcN39WU40&t=4776s",
};

const dev2DevStream: PostCardProps = {
  id: 4,
  imageSrc: "/ytStreamDevBlogDev2.png",
  imageAlt: "YTStream",
  title: "DevBlog2 YT-Stream",
  subTitle: "Stream: Dev2 Blog 16/01/2024",
  bubbleText1: "Stream",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=C-zm18X1d0Y&t=544s",
};

const dev3DevStream: PostCardProps = {
  id: 5,
  imageSrc: "/ytStreamDevBlogDev3.png",
  imageAlt: "YTStream",
  title: "DevBlog3 YT-Stream",
  subTitle: "Stream: Dev3 Blog 18/01/2024",
  bubbleText1: "Stream",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=4k3Hppf0QBw&t=768s",
};

const dev4DevStream: PostCardProps = {
  id: 6,
  imageSrc: "/ytStreamDevBlogDev4.png",
  imageAlt: "YTStream",
  title: "DevBlog4 YT-Stream",
  subTitle: "Stream: Dev4 Blog 24/01/2024",
  bubbleText1: "Stream",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=s-ghhV74fM4&t=32s",
};

const devBlogFinish: PostCardProps = {
  id: 7,
  imageSrc: "/devBlogFinish.png",
  imageAlt: "YTVideo",
  title: "DevBlog Final!",
  subTitle: "Video: Final Update! 19/02/2024",
  bubbleText1: "Video",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=r75oD4_EV4U",
};

const openGLRendering: PostCardProps = {
  id: 8,
  imageSrc: "/openGLRendering.png",
  imageAlt: "OpenGL Video",
  title: "OpenGL Pygame Render",
  subTitle: "Video: OpenGL Game Engine 01/02/2024",
  bubbleText1: "Video",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=XTd0tisWBIA",
};

const dogCNN: PostCardProps = {
  id: 9,
  imageSrc: "/dogCNN.png",
  imageAlt: "DogCNN Video",
  title: "Stanford Dogs CNN",
  subTitle: "Video: Stanford Dogs AI 05/02/2024",
  bubbleText1: "Video",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=SJnnS_8Tql8",
};

const skyguardDev1: PostCardProps = {
  id: 10,
  imageSrc: "/skyguardDev1.png",
  imageAlt: "SkyGuard Dev1",
  title: "SkyGuard Dev 1",
  subTitle: "Drone Intelligence Software 10/03/2024",
  bubbleText1: "Stream",
  bubbleText2: "Dev",
  markdownTitleName: "https://www.youtube.com/watch?v=n-gdqmzC8XM&t=2204s",
};

const arrPostCards: PostCardProps[] = [
  skyguardDev1,
  devBlogFinish,
  dogCNN,
  openGLRendering,
  dev4DevStream,
  dev3DevStream,
  dev2CodeReview,
  dev2DevStream,
  dev1DevStream,
  learnedFromNoBloat,
];

export { arrPostCards, projectArray };

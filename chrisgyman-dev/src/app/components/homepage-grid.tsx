import { Project } from "../project";
import { PostBubbleComponentProps } from "../post";

// Get Array 1 project components
// Get Array 2 post components

// Append arrays into one large array

// Map each item in array to a grid componenet

interface ProjectBubblePropsArray {
  projectList: Project[];
  postSourceArray: PostBubbleComponentProps[];
}


function HomePageGridComponent() {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

export { HomePageGridComponent };

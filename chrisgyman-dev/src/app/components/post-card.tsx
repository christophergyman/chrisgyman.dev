import { postcss } from "tailwindcss";
import { PostCardProps } from "../postcard";

interface PostCardItemsProps{
    postCardDetails: PostCardProps,
}

function PostCardComponent({postCardDetails}: PostCardItemsProps) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={postCardDetails.imageSrc}
            alt={postCardDetails.imageAlt}
            // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            // alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {postCardDetails.title}
            {/* Shoes! */}
            </h2>
          <p>
            {postCardDetails.subTitle}
            {/* If a dog chews shoes whose shoes does he choose? */}
            </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
                {postCardDetails.bubbleText1}
                {/* Fashion */}
                </div>
            <div className="badge badge-outline">
                {postCardDetails.bubbleText2}
                {/* Products */}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PostCardComponent };

import { postcss } from "tailwindcss";
import { PostCardProps } from "../postcard";

interface PostCardItemsProps {
  postCardDetails: PostCardProps;
}

function PostCardComponent({ postCardDetails }: PostCardItemsProps) {
  return (
    <div className="">
      <div className="outline outline-1 card w-fit md:w-[397px] lg:w-[397px] xl:w-[397px] 2xl:w-[397px] bg-base-100 drop-shadow-2xl">
        <figure>
          <img
            src={postCardDetails.imageSrc}
            alt={postCardDetails.imageAlt}
            // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            // alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#bdbdbdb] font-bold">
            {postCardDetails.title}
            {/* Shoes! */}
          </h2>
          <div className="">
            <p className="">
              {postCardDetails.subTitle}
              {/* If a dog chews shoes whose shoes does he choose? */}
            </p>
          </div>
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

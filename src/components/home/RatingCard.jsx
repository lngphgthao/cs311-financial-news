import React from "react";
import { FaStar } from "react-icons/fa";

const RatingCard = ({ rating }) => {
  const numberOfStars = Array.from({ length: rating.rating });

  return (
    <div className="flex flex-col items-center border-b border-neutral-600 p-10">
      {/* User Info */}
      <div className="flex gap-3 p-8 pb-12">
        <img className="size-12 rounded-full" src={rating.user.image} alt="" />
        <div className="flex flex-col justify-center">
          <h3>{rating.user.name}</h3>
          <h4 className="text-sm text-neutral-500">{rating.user.location}</h4>
        </div>
      </div>
      <div className="relative w-full">
        {/* User Comment */}
        <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-8 pt-10 text-center">
          {rating.comment}
        </div>

        {/* User Rating */}
        <div className="absolute inset-x-32 -top-4 flex items-center justify-center rounded-3xl border border-neutral-700 bg-neutral-950 p-2">
          <p className="flex gap-2 text-lg">
            {numberOfStars.map(() => (
              <FaStar className="inline text-yellow-400" />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;

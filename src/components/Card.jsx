import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  console.log(review.name);
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 py-2 ">
      <div className=" user-img h-28 w-28 rounded-full absolute -top-20 left-0 shadow-md shadow-zinc-600">
        <img className=" aspect-square object-cover absolute z-[10]" src={review.image} alt="" />
        <div className="h-28 w-28 rounded-full bg-violet-500 absolute top-[-1px] left-2 z[0] "></div>
      </div>
      <div className="user-details flex flex-col justify-center items-center gap-1 mb-2">
        <h2 className="user-name text-xl font-bold tracking-wider">
          {review.name}
        </h2>
        <span className="User-designation text-xs font-medium text-gray-400 uppercase">
          {review.job}
        </span>
      </div>
      <FaQuoteLeft className="text-gray-500" />
      <div className="user-review text-sm text-gray-600 text-center">
        {review.text}
      </div>
      <FaQuoteRight className="text-slate-500" />
    </div>
  );
};

export default Card;

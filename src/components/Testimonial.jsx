import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = ({ reviews }) => {
  console.log(reviews[0]);
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index - 1 < 0)
    {
      setIndex(reviews.length - 1);
    }
    else {
      setIndex(index - 1);
    }

  };

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length)
    {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  };

  const surpriseMeHandler = () => {
    setIndex(Math.floor(Math.random() * reviews.length));
  };

  return (
    <div className="h-[375px] w-[600px] relative flex flex-col justify-center items-center gap-4 px-10 py-2 bg-white shadow-lg shadow-zinc-600 rounded-md">
      {/* {reviews.map((review) => {
        return <Card key={review.id} review={review} />;
      })} */}
      <Card review={reviews[index]} />
      <div className=" flex gap-5 ">
        <button onClick={leftShiftHandler}>
          <IoIosArrowBack className="h-7 w-6 cursor-pointer text-gray-500 border-[1px] border-transparent hover:border-gray-300 transition duration-[.3s] ease" />
        </button>
        <button onClick={rightShiftHandler}>
          <IoIosArrowForward className="h-7 w-6 cursor-pointer text-gray-500 border-[1px] border-transparent hover:border-gray-300 transition duration-[.3s] ease" />
        </button>
      </div>
      <button
        className="px-12 py-2 text-base font-medium bg-violet-500 rounded-md text-white"
        onClick={surpriseMeHandler}>
        Surprise Me
      </button>
    </div>
  );
};

export default Testimonial;

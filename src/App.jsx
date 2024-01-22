import React, { useState } from "react";
import Testimonial from "./components/Testimonial";
import { data } from "./data";

const App = () => {
  const [reviews, setReviews] = useState(data);

  return (
      <div className="container h-screen w-screen flex flex-col justify-center items-center bg-gray-300">
        <h1 className="testimonial-title text-4xl font-bold">
          Our Testimonials
        </h1>
        <div className="divider my-2 mb-7 h-[1.5px] w-40 bg-gray-500"></div>
        <Testimonial reviews={reviews} />
      </div>
  );
};

export default App;

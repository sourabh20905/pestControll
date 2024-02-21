// TestimonialSlider.js
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere justo nec ultricies lacinia.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative ">
      <div className="w-full max-w-md mx-auto  ">
        <div className="overflow-hidden bg-[#e5e7e2] ">
          <div className="w-full flex bg-[#e5e7e2]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full flex-shrink-0 flex justify-center items-center bg-[#e5e7e2] ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div className="p-8 bg-[#e5e7e2] rounded-lg shadow-md text-center ">
                  <p className="text-lg font-semibold mb-4 bg-[#e5e7e2]">
                    {testimonial.text}
                  </p>
                  <p className="text-gray-600">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full"
        onClick={prevSlide}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full"
        onClick={nextSlide}
      >
        <GrNext />
      </button> */}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 bg-gray-400 rounded-full mx-1 cursor-pointer ${
              index === activeIndex ? "bg-gray-900" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
      <button
        className="absolute top-[50%] left-0 lg:left-8 transform -translate-y-1/2 text-gray-700 p-2 "
        onClick={prevSlide}
      >
        <GrPrevious className=" text-3xl" />
      </button>
      <button
        className="absolute right-0 lg:right-8 top-[50%] transform -translate-y-1/2  text-gray-700 p-2 "
        onClick={nextSlide}
      >
        <GrNext className="text-3xl" />
      </button>
    </div>
  );
};

export default TestimonialSlider;

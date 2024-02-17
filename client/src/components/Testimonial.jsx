// TestimonialSlider.js
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere justo nec ultricies lacinia.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="overflow-hidden">
        <div className="w-full flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full flex-shrink-0 flex justify-center items-center ${
                index === activeIndex ? 'block' : 'hidden'
              }`}
            >
              <div className="p-8 bg-gray-100 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold mb-4">{testimonial.text}</p>
                <p className="text-gray-600">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-gray-400 rounded-full mx-1 cursor-pointer ${
              index === activeIndex ? 'bg-gray-900' : ''
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

// ImageGallery.js
import React from "react";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import five from "../assets/five.avif";
import six from "../assets/six.avif";
import seven from "../assets/seven.avif";
import twelve from "../assets/twelve.avif";
import ten from "../assets/ten.avif";
import eleven from "../assets/eleven.avif";
const ImageGallery = () => {
 

  return (
    <div className="flex flex-wrap justify-center ">
      <div className="w-full py-7 flex justify-center items-center sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 relative">
        <h1 className=" text-center  text-2xl  font-extrabold ">
          Our Latest Works
        </h1>
      </div>
      <div className="flex flex-col items-center gap-3">

      <div className="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img src={five} alt="Image 2" className="w-full h-auto " />
      </div>
      <div className="  w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img src={six} alt="Image 3" className="w-full h-auto" />
      </div>
      <div className="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img src={twelve} alt="Image 4" className="w-full h-auto " />
      </div>
      <div className="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img src={ten} alt="Image 5" className="w-full h-auto " />
      </div>
      <div className="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img src={eleven} alt="Image 6" className="w-full h-auto" />
      </div>
      </div>
    </div>
  );
};

export default ImageGallery;

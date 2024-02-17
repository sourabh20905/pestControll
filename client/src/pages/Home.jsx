import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import Footer from "../components/Footer";
import bedbug from "../assets/bedbug.jpg";
import fogging from "../assets/fogging.webp";
import fumiseal from "../assets/fumiseal.webp";
import honeybee from "../assets/honeybee.webp";
import mosquito from "../assets/mosquito.png";
import Rodent from "../assets/Rodent-Control.png";
import Card from "../components/Card";
import four from "../assets/four.webp";
import three from "../assets/three.webp";
import TestimonialSlider from "../components/Testimonial";
import ImageGallery from "../components/Gallery";

const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Rodent Control",
      Eimage: Rodent,
    },
    {
      name: "Mosquito Control",
      Eimage: mosquito,
    },
    {
      name: "Fumiseal Control",
      Eimage: fumiseal,
    },
    {
      name: "Bedbug Control",
      Eimage: bedbug,
    },
    {
      name: "Fogging for Mosquito Control",
      Eimage: fogging,
    },

    {
      name: "Honeybhive Snakey Treatment",
      Eimage: honeybee,
    },
  ];
  const itemToShow = services.slice(0, 4);
  return (
    <>
      <div className="w-full h-[100vh] max-h-100vh max-h-screen sm:bg-hero-pattern bg-fixed bg-hero-sm bg-contain bg-no-repeat z-0  relative  ">
        <div
          className=" w-[40%] h-[50%] absolute right-20 top-64 z-10
       flex text-center justify-center items-center font-bold text-6xl bg-white md:[w-[50%]] "
        >
          "Enjoy a pest-free home with our expert service."
        </div>
      </div>
      <div className="bg-white h-[100vh]">
        <div className=" w-[50%] p-14 mx-auto mt-0 flex flex-col gap-6">
          <h1 className=" font-bold text-6xl">Services</h1>
          <p>
            "Delivering peace of mind by exterminating pests, protecting homes,
            and restoring tranquility to your living space."
          </p>
        </div>
        <div className=" flex flex-col bg-[#e5e7e2] mx-10">
          <div className="flex flex-wrap justify-around m-[5px]  p-16 ">
            <div className="  flex p-[5px] m-[20px] w-[280px] mb-[5px] h-[280px] shadow-sm">
              <div className="relative hover:shadow-md">
                <img src={services[0].Eimage} alt="" className="" />
                <h1
                  className=" w-[80%] absolute -right-4 bottom-[-9px] bg-white text-center font-bold text-2xl"
                  c
                >
                  {services[0].name}
                </h1>
              </div>
            </div>
            <div className="flex p-[5px] w-[280px] m-[20px] mb-[5px] h-[280px] shadow-sm">
              <div className="relative bg-white hover:shadow-md">
                <img src={services[1].Eimage} alt="" />
                <h1 className=" absolute w-[80%] bg-white text-center font-bold text-2xl -right-4 bottom-[-9px]">
                  {services[1].name}
                </h1>
              </div>
            </div>
            <div className="flex p-[5px] m-[20px] mb-[5px] w-[280px] h-[280px] shadow-sm">
              <div className="relative hover:shadow-md ">
                <img src={services[3].Eimage} alt="" />
                <h1 className="absolute w-[80%] bg-white text-center font-bold text-2xl -right-4 bottom-[-30px]">
                  {services[3].name}
                </h1>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/services")}
            className=" w-32  bg-[#22c55e] ml-[60%] mr-[30%] mt-8 p-2 text-white mb-4 text-lg  hover:shadow-md rounded-md overflow-auto"
          >
            More Services
          </button>
        </div>
        <div className="w-full bg-[#e5e7e2]">
          <div className="w-[90%] bg-white h-full mx-auto">
            <div className="flex">
              <div className="w-1/2 p-20 flex flex-col gap-3">
                <h1 className=" text-4xl font-bold">
                  About Rp pest <br /> Control
                </h1>
                <span className=" m-1">pest control services in indore</span>
                <p>
                  Rp pest Control Service provides top-notch pest control
                  solutions for homes and businesses. With years of experience
                  in the industry, their trained professionals use the latest
                  technology and eco-friendly methods to eliminate pests and
                  prevent them from coming back. Whether it's insect control,
                  rodent control, or wildlife control, Bharat Pest Control
                  Service offers customized solutions to meet their clients'
                  unique needs. With their commitment to quality and customer
                  satisfaction, they have built a strong reputation as a
                  reliable and trusted pest control service provider.
                </p>
                <button className=" w-[280px] mt-8 p-8 bg-[#4d7c0f] mx-auto ">
                  About us
                </button>
              </div>
              <img src={four} alt="" className="w-1/2 " />
            </div>
            <div className="flex">
              <img src={three} alt="" className="w-1/2" />
              <div className="w-1/2 flex flex-col justify-center items-center">
                <h1>
                  "Don't let pests take over. Take control with our expert
                  services."
                </h1>
                <button>Contact</button>
                <span>Or Call us : 91XXXXXXXXX</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-center">Testimonial</h1>
            <TestimonialSlider />
          </div>
          <div>
            <ImageGallery />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full">
            <div className="w-full sm:w-1/3 text-center">
              <div className="flex flex-col justify-center items-center h-[280px]">
                <FaRegThumbsUp className=" text-9xl" />
                <h3 className="text-lg font-semibold">Fully Bonded</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <div className="flex justify-center  flex-col items-center h-[280px]">
                <FaRegStar className=" text-9xl text-white" />
                <h3 className="text-lg font-semibold">
                  Reliable & Trustworthy
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <div className="flex flex-col justify-center items-center h-[280px]">
                <GrTask className=" text-9xl" />
                <h3 className="text-lg font-semibold">
                  Professional & Experienced
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

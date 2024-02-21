import React, { Suspense } from "react";
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
import main from "../assets/main.webp";
import four from "../assets/four.webp";
import three from "../assets/three.webp";
import TestimonialSlider from "../components/Testimonial";
import ImageGallery from "../components/Gallery";
import s1 from "../assets/Services/s1.jpg";
import s2 from "../assets/Services/s2.jpg";
import s3 from "../assets/Services/s3.jpg";
import main2 from "../assets/main2.jpg";
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

  return (
    <>
      <div className="w-full h-full  relative mt-3">
        <div className="">
          <img src={main2} className="object-cover bg-contain lg:w-[80%]" />
          <div className="absolute right-0  text-center px-2 py-2 font-bold top-[170px] bg-white text-2xl w-[280px] h-[130px]">
            "Enjoy a pest-free home with our expert service"
          </div>
        </div>

        {/* Other content here */}
        <div className="bg-white h-full">
          <div className=" w-full lg:w-[50%] lg:p-14 p-8 lg:mx-auto sm:mt-0 flex flex-col gap-6">
            <h1 className=" font-bold lg:text-6xl text-3xl">Services</h1>
            <p>
              "Delivering peace of mind by exterminating pests, protecting
              homes, and restoring tranquility to your living space."
            </p>
          </div>
          <div className=" flex flex-col bg-[#e5e7e2] mx-10 lg:py-16">
            <div className="flex flex-wrap justify-around m-[5px]  lg:p-16 ">
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
              className=" w-32  bg-[#4d7c0f] ml-[60%] mr-[30%] mt-8 p-2 text-white mb-4 text-lg  hover:shadow-md rounded-md overflow-auto"
            >
              More Services
            </button>
          </div>
        </div>

        <div className="w-full bg-[#e5e7e2] h-full lg:mt-48">
          <div className="w-[90%] bg-white lg:h-full mx-auto">
            <div className="lg:flex">
              <div className="lg:w-1/2 lg:p-20 p-6 flex flex-col gap-3">
                <h1 className="text-4xl font-bold">
                  About Rp pest <br /> Control
                </h1>
                <span className="m-1">pest control services in indore</span>
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
                <button className=" lg:inline w-[280px] mt-8 p-6 bg-[#4d7c0f] mx-auto">
                  About us
                </button>
              </div>
              <div className="lg:flex lg:w-1/2 justify-center items-center ">
                {/* Ensure that `four` points to the correct image */}
                <img
                  src={four}
                  alt=""
                  className="object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="lg:flex w-full  justify-center items-center ">
                <img
                  src={three}
                  alt=""
                  className="object-cover w-full h-full "
                />
              </div>

              <div className="lg:w-1/2 h-auto flex flex-col lg:justify-center lg:items-center py-9">
                <h1 className="  text-center text-4xl font-bold px-10 lg:p-14 ">
                  "Don't let pests take over. Take control with our expert
                  services."
                </h1>
                <button className=" w-[280px] m-8 p-6 bg-[#4d7c0f] mx-auto ">
                  Contact
                </button>
                <span className="self-center">Or Call us : 91XXXXXXXXX</span>
              </div>
              <div className=" mt-9 flex flex-col gap-8 bg-[#e5e7e2] py-9">
                <h1 className=" text-center text-4xl  font-extrabold">
                  Testimonials
                </h1>
                <div className=" bg-[#e5e7e2]">
                  <TestimonialSlider />
                </div>
              </div>

              <div>
                <ImageGallery />
              </div>

              <div className="w-full h-auto flex flex-col my-4">
                <div className="w-full h-[280px] flex justify-center items-center bg-[#365314]">
                  <div className=" flex flex-col gap-3  ">
                    <FaRegThumbsUp className=" text-6xl self-center " />
                    <h3 className=" font-bold text-2xl">Fully Bonded</h3>
                  </div>
                </div>
                <div className="w-full h-[280px] flex justify-center items-center bg-[#3f6212]">
                  <div className="flex flex-col gap-3 ">
                    <FaRegStar className="text-6xl self-center " />
                    <h3 className="font-bold text-2xl">
                      Reliable & Trustworthy
                    </h3>
                  </div>
                </div>
                <div className="w-full h-[280px] flex justify-center items-center bg-[#4d7c0f]">
                  <div className="flex flex-col gap-3 ">
                    <GrTask className="text-6xl self-center " />
                    <h3 className="font-bold text-2xl">
                      Professional & Experienced
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

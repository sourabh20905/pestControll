import React from "react";
import bedbug from "../assets/bedbug.jpg";
import fogging from "../assets/fogging.webp";
import fumiseal from "../assets/fumiseal.webp";
import honeybee from "../assets/honeybee.webp";
import mosquito from "../assets/mosquito.png";
import Rodent from "../assets/Rodent-Control.png";
import Card from "../components/Card";
const Home = () => {
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
        <div className="">
          
            
         
        </div>
      </div>
    </>
  );
};

export default Home;

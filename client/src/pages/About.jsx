import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import aboutimg from "../assets/about.webp";
import m1 from "../assets/1.webp";
import m2 from "../assets/2.webp";
import m4 from "../assets/4.webp";
import m3 from "../assets/3.webp";
import m6 from "../assets/6.webp";

import Cards from "../components/AboutCard";

function AboutUs() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="mb-4 font-bold">
          "Your Trusted Partner for a Pest-Free Home!"
        </p>
        <p className="mb-8 ">
          For over 35 years, Bharat Pest Control has been providing quality and
          reliable pest control services. We strive to ensure that our customers
          receive the best service and the most effective solutions to their
          pest control needs. Our team of experienced technicians are equipped
          with the latest technology to ensure that all of your pest control
          needs are met. We take pride in our commitment to providing the
          highest quality service and our dedication to customer satisfaction.
          Contact us today to find out more about how we can help you!
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto mb-8">
        <img
          src={aboutimg}
          alt="Your Image"
          className="h-auto max-w-full mx-auto my-4"
        />
      </div>
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Bharat Pest Control Service provides top-notch pest control solutions
          for homes and businesses. With years of experience in the industry,
          their trained professionals use the latest technology and eco-friendly
          methods to eliminate pests and prevent them from coming back. Whether
          it's insect control, rodent control, or wildlife control, Bharat Pest
          Control Service offers customized solutions to meet their clients'
          unique needs. With their commitment to quality and customer
          satisfaction, they have built a strong reputation as a reliable and
          trusted pest control service provider.
        </p>
      </div>
      <div className="w-full mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          <Cards m1={m1} occupation="farmer" name="no name" />
          <Cards m1={m2} occupation="farmer" name="Sourabh" />
          <Cards m1={m3} occupation="farmer" name="no name" />
          <Cards m1={m4} occupation="farmer" name="no-name" />
          <Cards m1={m6} occupation="farmer" name="no name" />
        </div>
      </div>

      <div className="flex flex-col bg-emerald-800 w-full mx-auto justify-center">
        <div className="flex flex-col items-center  justify-center py-6">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-white py-2">
            Call or Message Us for a Free Quote!
          </p>
        </div>
        {/* Form */}
        <div className="mx-auto w-full lg:w-[80%]">
          <form className="bg-emerald-800 shadow-md flex flex-col justify-center rounded px-8 pt-6 pb-8 mb-8">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="shadow placeholder-emerald-800 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border placeholder-emerald-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              ></label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="shadow appearance-none placeholder-emerald-800 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row lg:flex-row  my-200px  justify-center space-y-8 sm:space-y-0 lg:space-x-16 text-white">
          <div className="flex justify-center">
          
            <FaFacebookF className="h-24 mt-0  mb-5 ml-10 mr-5" />
           

            <FaInstagram  className="h-24 ml-10 mr-9"/>
          
          </div>
          <div className="bg-white hidden sm:block h-24 w-[4px] mt-0"></div>
          <div className=" flex flex-col items-center">
            {" "}
            {/* Hide on small screens */}
            <span>Dig Bungalow, Green Park</span>
            <br />
            <span>Colony, Jamalpura, Bhopal,</span>
            <br />
            <span>Madhya Pradesh 462001</span>
          </div>
          <div className="bg-white  hidden sm:block h-24 w-[4px] mt-0"></div>
          <div className="flex flex-col lg:flex items-center">
            {" "}
            {/* Center contact info */}
            <span>info.bharatpestcontro@</span>
            <br />
            <span>gmail.com</span>
            <br />
            <span>+91 8319458245</span>
          </div>
          <div className="bg-white  hidden sm:block h-24 w-[4px] mt-0"></div>
          <div className="flex flex-col lg:flex items-center">
            {" "}
            {/* Center contact info */}
            <span>© 2023 by Bharat Pest Control.</span>
            <br />
            <span>Website Designed by Wisdom Visuals</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

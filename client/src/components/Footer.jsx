import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>

   
    <div className="flex flex-col sm:flex-row lg:flex-row  my-200px  justify-center space-y-8 sm:space-y-0 lg:space-x-16 mb-11 text-white">
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
      <span>info.bharatpestcontro@gmail.com</span>
      
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
  )
}

export default Footer
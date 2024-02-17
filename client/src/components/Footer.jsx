import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  my-200px  justify-center  sm:space-y-0 lg:space-x-16 mb-11 text-white">
        <div className="flex justify-center ">
          <FaFacebookF className="h-24 mt-0  mb-5 ml-10 mr-5" />

          <FaInstagram className="h-24 ml-10 mr-9" />
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
  );
}

export default Footer;

// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (

//       <div className="flex flex-col bg-emerald-800 w-full mx-auto justify-center">
//         <div className="flex flex-col items-center  justify-center py-6">
//           <h2 className="text-4xl font-bold text-white">Contact Us</h2>
//           <p className="text-white py-2">
//             Call or Message Us for a Free Quote!
//           </p>
//         </div>
//         {/* Form */}
//         <div className="mx-auto w-full lg:w-[80%]">
//           <form className="bg-emerald-800 shadow-md flex flex-col justify-center rounded px-8 pt-6 pb-8 mb-8">
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Your Name"
//                   className="shadow placeholder-emerald-800 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </label>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Your Email"
//                   className="shadow appearance-none border placeholder-emerald-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </label>
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <textarea
//                 id="message"
//                 placeholder="Your Message"
//                 className="shadow appearance-none placeholder-emerald-800 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//         {/* Contact Info */}
//         <div className="flex flex-col sm:flex-row lg:flex-row  my-200px  justify-center space-y-8 sm:space-y-0 lg:space-x-16 text-white">
//           <div className="flex justify-center">

//             <FaFacebook className="h-24 mt-0  mb-5 ml-10 mr-5" />

//             <FaInstagram  className="h-24 ml-10 mr-9"/>

//           </div>
//           <div className="bg-white hidden sm:block h-24 w-[4px] mt-0"></div>
//           <div className=" flex flex-col items-center">
//             {" "}
//             {/* Hide on small screens */}
//             <span>Dig Bungalow, Green Park</span>
//             <br />
//             <span>Colony, Jamalpura, Bhopal,</span>
//             <br />
//             <span>Madhya Pradesh 462001</span>
//           </div>
//           <div className="bg-white  hidden sm:block h-24 w-[4px] mt-0"></div>
//           <div className="flex flex-col lg:flex items-center">
//             {" "}
//             {/* Center contact info */}
//             <span>info.bharatpestcontro@</span>
//             <br />
//             <span>gmail.com</span>
//             <br />
//             <span>+91 8319458245</span>
//           </div>
//           <div className="bg-white  hidden sm:block h-24 w-[4px] mt-0"></div>
//           <div className="flex flex-col lg:flex items-center">
//             {" "}
//             {/* Center contact info */}
//             <span>© 2023 by Bharat Pest Control.</span>
//             <br />
//             <span>Website Designed by Wisdom Visuals</span>
//           </div>
//         </div>
//       </div>

//   );
// };

// export default Footer;

import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-full  px-4 py-8 bg-white rounded-lg mb-11">
        <h1 className="text-5xl mt-5 font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Need our assistance? We're just a call away! You're only one call away from our expert help. Don't hesitate to call us - we're ready to assist you right now!
        </p>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl mb-4 font-bold">Let's Chat</h2>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="mb-4">
              <p className="text-lg font-semibold">Email:</p>
              <p className="text-lg">arjunjagotra2001@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Phone:</p>
              <p className="text-lg">67898765678</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Social Media:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-6 mb-4">Send us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border- border-black rounded-lg px-4 py-2  focus:outline-none focus:border-blue-400" />
            <input type="text" placeholder="Last Name" className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400" />
            <textarea placeholder="Message" className="col-span-2 border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col bg-neutral-900 w-full mx-auto justify-center   ">
        <div className="flex flex-col items-center justify-center py-6 ">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-white py-2">
            Call or Message Us for a Free Quote!
          </p>
        </div>
        <div className="mx-auto w-full   lg:w-[80%]">
        <form className="bg-neutral-900 shadow-md flex flex-col justify-center rounded px-8 pt-3 mb-8">
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
                className="bg-neutral-900 hover:border-2 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;

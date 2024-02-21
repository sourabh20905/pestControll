import { Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <div className=" w-full sticky top-0 z-50">
      <div className="w-full">
        <Navbar className="w-full h-28 mx-auto  flex justify-center items-center">
          <div className="w-full flex justify-between sm:px-32">
            <Link to="/" className="">
              <span class="self-center text-2xl font-semibold">
                RP_paste_controller
              </span>
            </Link>
            <div className="">
              <div className=" text-lg w-full hidden sm:inline ">
                <div>Call us +91XXXXXXXX</div>
              </div>
              <Navbar.Toggle className="sm:hidden" />
            </div>
          </div>
          <div className="w-full max-h-11">
            <Navbar.Collapse className="md:hidden ">
              <div className=" bg-white">
                <Navbar.Link as={"div"} active={path === "/"}>
                  <Link to="/">Home</Link>
                </Navbar.Link>

                <Navbar.Link as={"div"} active={path === "/about"}>
                  <Link to="/about" className="">
                    About
                  </Link>
                </Navbar.Link>
                <Navbar.Link as={"div"} active={path === "/contact-us"}>
                  <Link to="/contact-us">Contact Us</Link>
                </Navbar.Link>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <nav class="w-full sm:inline hidden h-max ">
          <div class="w-full px-10 py-3 bg-[#e5e7e2]  ">
            <div class="flex items-center">
              <ul class="flex flex-row gap-24 font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                <li>
                  <Link
                    to="/"
                    class="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className=" h-10 flex justify-center bg-[#4d7c0f] lg:hidden">
        <h1 className="self-center text-xl font-semibold text-white">
          Call us Now : 91887493433
        </h1>
      </div>
    </div>
  );
};

export default Header;

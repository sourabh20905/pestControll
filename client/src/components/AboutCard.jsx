import React from "react";

function AboutCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img
        src={props.m1}
        alt="Team Member"
        className="rounded-full mx-auto w-64 h-64 mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{props.occupation}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 6.343a8 8 0 00-11.314 11.314c1.988 1.988 5.008 2.601 7.557 1.528m-7.453-3.055a12 12 0 0116.97-1.697l.007.006m-3.055-7.453a15.937 15.937 0 00-17.882 17.883l-.005.005"
            ></path>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 15c-1.5 0-2.5-1-3.5-2 0 0-1 0-1-1 0-3 3-5 3-5s-2-3-5-3c-2 0-3 1-4 2"
            ></path>
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AboutCard;

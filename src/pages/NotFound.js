import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="bg-purple-900 h-screen mt-20 flex justify-center">
        <div className="mt-20">
          <span className="text-7xl mr-5">😟</span>
          <span className="text-7xl">4</span>
          <span className="text-7xl text-yellow-400">0</span>
          <span className="text-7xl">4</span>
        </div>

        <div className="absolute transform translate-y-52 text-yellow-300 text-3xl">
          Sorry, Page Not Found
        </div>

        <div
          className="absolute transform translate-y-80 bg-yellow-400 p-3 text-2xl rounded-md flex hover:bg-yellow-200 cursor-pointer"
          onClick={handleHome}
        >
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </span>
          Home
        </div>
      </div>
    </div>
  );
};

export default NotFound;

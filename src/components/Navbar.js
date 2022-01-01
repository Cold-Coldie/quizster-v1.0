import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="shadow-md flex justify-center md:justify-start fixed top-0 w-screen bg-white z-10">
        <Link to="/" className="px-6 pb-3">
          <span className="text-7xl text-purple-800 font-poppins">Quiz</span>
          <span className="text-7xl text-pink-600 font-dancingScript">
            ster
          </span>
        </Link>

        <div className="ml-auto hidden lg:flex items-center text-purple-800 font-poppins text-lg">
          <ul className="flex">
            <li className="mr-5 hover:text-pink-600 focus-within:text-pink-600">
              <Link to="/">
                <span className="flex">
                  <h3>Home</h3>
                </span>
              </Link>
            </li>

            <li className="mr-5 hover:text-pink-600 focus-within:text-pink-600">
              <Link to="/computerscience">
                <span>
                  <h3>Computer Science</h3>
                </span>
              </Link>
            </li>

            <li className="mr-5 hover:text-pink-600 focus-within:text-pink-600">
              <Link to="/generalknowledge">
                <span>
                  <h3>General Knowledge</h3>
                </span>
              </Link>
            </li>

            <li className="mr-5 hover:text-pink-600 focus-within:text-pink-600">
              <Link to="/mathematics">
                <span>
                  <h3>Mathematics</h3>
                </span>
              </Link>
            </li>

            <li className="mr-8 hover:text-pink-600 focus-within:text-pink-600">
              <Link to="/aboutUs">
                <span>
                  <h3>About Us</h3>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="flex absolute right-5 top-7 items-center text-purple-800 lg:hidden cursor-pointer hover:text-pink-600 focus-within:text-pink-600"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;

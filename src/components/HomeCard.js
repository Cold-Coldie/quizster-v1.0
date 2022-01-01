import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ image, alt, subject, link, height }) => {
  return (
    <div>
      <div className="mx-auto rounded-lg overflow-hidden bg-white pb-1 transform duration-300 hover:scale-105 border-2 hover:border-purple-800">
        <div className="pb-3">
          <img
            className={`w-72 ${height} border-gray-500 border-b`}
            src={image}
            alt={alt}
          />
        </div>
        <div className="text-center pb-3">
          <h1 className="text-xl font-semibold pb-3">{subject}</h1>
          <p className="pb-5">Contains three difficulty levels</p>
          <Link className="flex justify-center" to={link}>
            <div className=" border-2 bg-gradient-to-br from-purple-800 to-pink-600 text-white rounded-lg w-28 p-2 cursor-pointer duration-300 animate-bounce hover:from-white hover:to-white hover:text-pink-600 hover:border-pink-600">
              Enter
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

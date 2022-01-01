import React from "react";
import ScoreBackground from "../images/ScoreBackground.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-20">
        <img className="h-80 w-screen" src={ScoreBackground} alt="background" />
      </div>

      <div className="transform -translate-y-60 flex justify-center">
        <h1 className="text-yellow-300 text-6xl">About Us</h1>
      </div>

      <div className="text-gray-600 transform -translate-y-32 p-16 font-semibold">
        <p>
          <span className="font-poppins text-purple-800 text-2xl">Quiz</span>
          <span className="font-dancingScript text-pink-600 text-2xl">
            ster
          </span>
          , developed by Ogedengbe Erioluwa as a frontend project using a
          popular framework of Javascript called React and a framework of CSS
          called Tailwind CSS, is developed as an avenue to test ones knowledge
          on Computer Science, General Knowledge and Mathematics.
        </p>
        <br />
        <p>
          It fetches it's questions and answers from
          <a
            className="ml-3 underline text-purple-800"
            href="https://opentdb.com/api_config.php"
          >
            https://opentdb.com/api_config.php
          </a>
        </p>
      </div>

      <div className="flex justify-center transform -translate-y-28">
        <span className="cursor-pointer mx-3">
          <a href="https://www.facebook.com/erioluwa.ogedengbe.3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon text-blue-800 border-2 border-blue-800 rounded-full"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </span>

        <span className="cursor-pointer mx-3">
          <a href="http://twitter.com/cold_coldie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon text-blue-500 border-2 border-blue-500 rounded-full"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default AboutUs;

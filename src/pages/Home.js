import React from "react";
import HomeCard from "../components/HomeCard";
import HomeComputerScience from "../images/homeComputerScience.jpg";
import HomeGeneralKnowledge from "../images/HomeGeneralKnowledge.jpg";
import HomeMathematics from "../images/homeMathematics.jpg";

const Home = () => {
  return (
    <div className="font-poppins text-gray-700 mt-20">
      <div className="mt-6 bg-gray-100 p-6 grid gap-6 h-auto md:h-screen md:pt-10 md:flex md:flex-row justify-evenly">
        <HomeCard
          image={HomeComputerScience}
          alt="computer science"
          subject="Computer Science Quiz"
          link="/computerscience"
        />

        <HomeCard
          image={HomeGeneralKnowledge}
          alt="general knowledge"
          subject="General Knowledge Quiz"
          link="/generalknowledge"
        />

        <HomeCard
          height="h-72"
          image={HomeMathematics}
          alt="mathematics"
          subject="Mathematics Quiz"
          link="/mathematics"
        />
      </div>
    </div>
  );
};

export default Home;

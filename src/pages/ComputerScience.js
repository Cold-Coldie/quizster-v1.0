import React from "react";
import SubjectCards from "../components/SubjectCards";
import ComputerScienceOne from "../images/computerScienceOne.jpg";
import ComputerScienceTwo from "../images/computerScienceTwo.jpg";
import ComputerScienceThree from "../images/computerScienceThree.png";

const ComputerScience = () => {
  const nameOne = "computerscience";
  const subjectOne = 18;
  const firstDifficulty = "easy";
  const secondDifficulty = "medium";
  const thirdDifficulty = "hard";

  return (
    <SubjectCards
      imageOne={ComputerScienceOne}
      linkOne={`/questions/${nameOne}/${subjectOne}/${firstDifficulty}`}
      imageTwo={ComputerScienceTwo}
      linkTwo={`/questions/${nameOne}/${subjectOne}/${secondDifficulty}`}
      imageThree={ComputerScienceThree}
      linkThree={`/questions/${nameOne}/${subjectOne}/${thirdDifficulty}`}
      subject="Computer Science"
    />
  );
};

export default ComputerScience;

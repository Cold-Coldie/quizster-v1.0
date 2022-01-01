import React from "react";
import SubjectCards from "../components/SubjectCards";
import MathsFour from "../images/mathsFour.jpg";
import MathsOne from "../images/mathsOne.jpg";
import MathsThree from "../images/mathsThree.jpg";

const Mathematics = () => {
  const nameThree = "mathematics";
  const subjectThree = 19;
  const firstDifficulty = "easy";
  const secondDifficulty = "medium";
  const thirdDifficulty = "hard";

  return (
    <SubjectCards
      imageOne={MathsFour}
      linkOne={`/questions/${nameThree}/${subjectThree}/${firstDifficulty}`}
      imageTwo={MathsOne}
      linkTwo={`/questions/${nameThree}/${subjectThree}/${secondDifficulty}`}
      imageThree={MathsThree}
      linkThree={`/questions/${nameThree}/${subjectThree}/${thirdDifficulty}`}
      subject="Mathematics"
    />
  );
};

export default Mathematics;

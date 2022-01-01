import React from "react";
import SubjectCards from "../components/SubjectCards";
import GeneralKnowledgeOne from "../images/generalknowledgeOne.jpg";
import GeneralKnowledgeTwo from "../images/generalKnowledgeTwo.jpeg";
import GeneralKnowledgeThree from "../images/generalKnowledgeThree.jpg";

const GeneralKnowledge = () => {
  const nameTwo = "generalknowledge";
  const subjectTwo = 9;
  const firstDifficulty = "easy";
  const secondDifficulty = "medium";
  const thirdDifficulty = "hard";

  return (
    <SubjectCards
      imageOne={GeneralKnowledgeOne}
      linkOne={`/questions/${nameTwo}/${subjectTwo}/${firstDifficulty}`}
      imageTwo={GeneralKnowledgeTwo}
      linkTwo={`/questions/${nameTwo}/${subjectTwo}/${secondDifficulty}`}
      imageThree={GeneralKnowledgeThree}
      linkThree={`/questions/${nameTwo}/${subjectTwo}/${thirdDifficulty}`}
      subject="General Knowledge"
    />
  );
};

export default GeneralKnowledge;

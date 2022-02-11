import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);
  const [nine, setNine] = useState(0);
  const [ten, setTen] = useState(0);

  var sum = 0;
  sum = one + two + three + four + five + six + seven + eight + nine + ten;

  const value = {
    setOne,
    setTwo,
    setThree,
    setFour,
    setFive,
    setSix,
    setSeven,
    setEight,
    setNine,
    setTen,
    sum,
  };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};

export default ScoreContextProvider;

import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import ScoreContextProvider from "./hooks/ScoreContext";
import AboutUs from "./pages/AboutUs";
import ComputerScience from "./pages/ComputerScience";
import GeneralKnowledge from "./pages/GeneralKnowledge";
import Home from "./pages/Home";
import Mathematics from "./pages/Mathematics";
import NotFound from "./pages/NotFound";
import Questions from "./pages/Questions";
import Score from "./pages/Score";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <ScoreContextProvider>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mathematics" component={Mathematics} />
          <Route path="/generalknowledge" component={GeneralKnowledge} />
          <Route path="/computerscience" component={ComputerScience} />
          <Route
            path="/questions/:name/:category/:difficulty"
            component={Questions}
          />
          <Route path="/score" component={Score} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </ScoreContextProvider>
    </>
  );
}

export default App;

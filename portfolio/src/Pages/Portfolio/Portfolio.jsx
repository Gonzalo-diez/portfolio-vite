import React from "react";
import Home from "../../Sections/Home/Home";
import About from "../../Sections/About/About";
import Curriculum from "../../Sections/CV/Curriculum";
import Contact from "../../Sections/Contact/Contact";
import Education from "../../Sections/Education/Education";
import Skills from "../../Sections/Skills/Skills";
import TechStack from "../../Sections/Tech Stack/TechStack";

const LazyWorks = React.lazy(() => import("../../Sections/Works/Works"));

function Portfolio({ language }) {
  const token = localStorage.getItem("jwtToken");

  return (
    <>
      <Home language={language} />
      <About language={language} />
      <Skills language={language} />
      <TechStack language={language} />
      <Education language={language} />
      <LazyWorks language={language} token={token} />
      <Contact language={language} />
      <Curriculum language={language} />
    </>
  );
}

export default Portfolio;

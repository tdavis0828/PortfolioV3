import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import References from "../components/References";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <References />
      <Contact />
    </>
  );
}

export default Home;

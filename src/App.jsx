import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <Hero id="hero" />
        <Education id="education" />
        <Experience id="experience" />
        <Research id="research" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Awards id="awards" />
        <Activities id="activities" />
        <Footer id="footer" />
      </div>
    </div>
  );
}

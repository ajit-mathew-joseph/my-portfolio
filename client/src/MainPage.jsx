import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import WhyHireMe from "./Components/WhyHireMe/WhyHireMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import Contact from "./Components/Contact/Contact";

import React from "react";

export default function MainPage() {
  return (
    <div>
      <div className="mainPage">
        <HeroSection />
        <AboutSection />
        <WhyHireMe />
        <ProjectsSection />
        <Contact />
      </div>
      ;
    </div>
  );
}

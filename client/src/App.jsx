import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import WhyHireMe from "./Components/WhyHireMe/WhyHireMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import Contact from "./Components/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <WhyHireMe/>
      <ProjectsSection/>
      <Contact/>
    </div>
  );
}

export default App;

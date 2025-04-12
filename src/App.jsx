import React from "react";

import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubheroSection from "./components/heroSection/subheroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";

import SkillsMain from "./components/skillSection/SkillsMain";
import SubSkills from "./components/skillSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import ContactMeMain from "./components/contactmeSection/ContactMeMain";
import { Toaster, toast } from "react-hot-toast";
import FooterMain from "./components/footer/FooterMain";
import Visit from "./components/footer/Visit";

function App() {
  return (
    <main className="flex flex-col items-center font-body overflow-hidden  ">
      <Toaster position="top-center" reverseOrder={false} />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubheroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />

      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <Visit />
      <FooterMain />
    </main>
  );
}

export default App;

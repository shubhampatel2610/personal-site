"use client";

import { observer } from "mobx-react-lite";
import MainSection from "@/components/components/MainSection/MainSection";
import ServiceSection from "@/components/components/ServiceSection/ServiceSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import SkillSection from "../components/SkillSection/SkillSection";
import ContactSection from "../components/ContactSection/ContactSection";

const HomeSection = observer(() => {
  return (
    <div className="overflow-hidden">
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <ServiceSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="skills">
        <SkillSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
});

export default HomeSection;

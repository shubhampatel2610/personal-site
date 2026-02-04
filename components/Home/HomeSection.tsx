"use client";

import { observer } from "mobx-react-lite";
import MainSection from "@/components/components/MainSection/MainSection";
import ServiceSection from "@/components/components/ServiceSection/ServiceSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import SkillSection from "../components/SkillSection/SkillSection";

const HomeSection = observer(() => {
  return (
    <div className="overflow-hidden">
      <MainSection />
      <ServiceSection />
      <ExperienceSection />
      <SkillSection />
    </div>
  );
});

export default HomeSection;

"use client";

import { observer } from "mobx-react-lite";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import MainSection from "@/components/components/MainSection/MainSection";
import ServiceSection from "@/components/components/ServiceSection/ServiceSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import SkillSection from "../components/SkillSection/SkillSection";
import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect } from "react";
import NavbarStore from "@/store/NavbarStore";
import AppConstants from "@/constant/AppConstants";

const HomeSection = observer(() => {
  useScrollSpy(["home", "about", "experience", "skills", "contact"]);

  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 750) return AppConstants.MOBILE_DEVICE;
    if (width < 1020) return AppConstants.TABLET_DEVICE;
    return AppConstants.DESKTOP_DEVICE;
  };

  useEffect(() => {
    const updateDevice = () => {
      NavbarStore.setCurrentDevice(getDeviceType());
    };

    updateDevice();

    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

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

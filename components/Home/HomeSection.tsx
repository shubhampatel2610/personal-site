"use client";

import { observer } from "mobx-react-lite";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import MainSection from "@/components/components/MainSection/MainSection";
import ServiceSection from "@/components/components/ServiceSection/ServiceSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import SkillSection from "../components/SkillSection/SkillSection";
import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect, useRef, useState } from "react";
import NavbarStore from "@/store/NavbarStore";
import AppConstants from "@/constant/AppConstants";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import GridBackdrop from "@/components/common/GridBackdrop/GridBackdrop";

// ─── Scroll Progress Bar ───────────────────────────────────────────────────
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressOuterClasses = "fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent";
  const progressInnerClasses = "h-full bg-[var(--accent)] transition-all duration-100 ease-out";

  return (
    <div className={progressOuterClasses}>
      <div
        className={progressInnerClasses}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// ─── Section Wrapper with Reveal Animation ────────────────────────────────
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // animate once
        }
      },
      { threshold: 0.07 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wrapperBaseClasses = "transition-all duration-700 ease-out will-change-transform";
  const visibleClasses = "opacity-100 translate-y-0";
  const hiddenClasses = "opacity-0 translate-y-8";

  return (
    <div
      ref={ref}
      id={id}
      className={`${wrapperBaseClasses} ${visible ? visibleClasses : hiddenClasses} ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Section Divider ──────────────────────────────────────────────────────
const SectionDivider = () => {
  const dividerWrapperClasses = "relative flex items-center justify-center py-2 mx-auto max-w-6xl px-6";
  const dividerLineClasses = "w-full h-px bg-[var(--border-subtle)]";

  return (
    <div className={dividerWrapperClasses}>
      <div className={dividerLineClasses} />
    </div>
  );
};

// ─── HomeSection ──────────────────────────────────────────────────────────
const HomeSection = observer(() => {
  useScrollSpy(["home", "about", "experience", "skills", "projects", "contact"]);

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

  const sections = [
    { id: "home", Component: MainSection },
    { id: "about", Component: ServiceSection },
    { id: "experience", Component: ExperienceSection },
    { id: "skills", Component: SkillSection },
    { id: "projects", Component: ProjectSection },
    { id: "contact", Component: ContactSection },
  ];

  const pageWrapperClasses = "relative overflow-hidden min-h-screen";
  const pageSectionsClasses = "relative z-10";

  return (
    <div className={pageWrapperClasses} style={{ backgroundColor: "var(--site-bg)" }}>
      <ScrollProgressBar />

      <GridBackdrop />

      <div className={pageSectionsClasses}>
        {sections.map(({ id, Component }, index) => (
          <div key={id}>
            <SectionWrapper id={id}>
              <Component />
            </SectionWrapper>

            {index < sections.length - 1 && <SectionDivider />}
          </div>
        ))}
      </div>
    </div>
  );
});

export default HomeSection;
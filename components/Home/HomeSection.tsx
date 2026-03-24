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

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent">
      <div
        className="h-full bg-blue-500 transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 8px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.4)",
        }}
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

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out will-change-transform ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Section Divider ──────────────────────────────────────────────────────
const SectionDivider = () => (
  <div className="relative flex items-center justify-center py-2 mx-auto max-w-6xl px-6">
    <div
      className="w-full h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 30%, rgba(59,130,246,0.2) 50%, rgba(255,255,255,0.06) 70%, transparent)",
      }}
    />
  </div>
);

// ─── HomeSection ──────────────────────────────────────────────────────────
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

  const sections = [
    { id: "home", Component: MainSection },
    { id: "about", Component: ServiceSection },
    { id: "experience", Component: ExperienceSection },
    { id: "skills", Component: SkillSection },
    { id: "contact", Component: ContactSection },
  ];

  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Ambient background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient blue glow — top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at top, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Sections */}
      <div className="relative z-10">
        {sections.map(({ id, Component }, index) => (
          <div key={id}>
            <SectionWrapper id={id}>
              <Component />
            </SectionWrapper>

            {/* Divider between sections (not after last) */}
            {index < sections.length - 1 && <SectionDivider />}
          </div>
        ))}
      </div>
    </div>
  );
});

export default HomeSection;
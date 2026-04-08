import { Image } from "primereact/image";
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import Typewriter from "typewriter-effect";
import ParticleBackground from "@/components/common/ParticleBackground";

const MainSection = observer(() => {
  return (
    <section className="relative min-h-screen w-full pt-5 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 p-3 md:px-6 text-center">

        {/* Profile Picture */}
        <div className="group relative">
          {/* Glow ring */}
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Border ring */}
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#3B82F6]/80 to-[#1a1a1a]" />
          {/* Image wrapper */}
          <div className="relative w-40 h-40 sm:w-24 sm:h-24 md:w-50 md:h-50 rounded-full overflow-hidden ring-[2px] ring-white/5">
            <Image
              src={AppConstants.PROFILE_PICTURE_PATH}
              alt="Profile Picture"
              imageClassName="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-col items-center gap-1 animate-[fadeSlideUp_0.6s_ease_0.1s_both]">
          <p className="text-[#a1a1aa] text-sm sm:text-base tracking-[0.2em] uppercase font-light">
            {AppConstants.MAIN_SECTION_TAGLINE_1}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {AppConstants.MAIN_SECTION_TAGLINE_2}
          </h1>
        </div>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent animate-[fadeSlideUp_0.6s_ease_0.2s_both]" />

        {/* Intro + Typewriter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-base sm:text-lg md:text-xl animate-[fadeSlideUp_0.6s_ease_0.3s_both]">
          <span className="text-[#a1a1aa] font-light tracking-wide">
            {AppConstants.MAIN_SECTION_INTROLINE}
          </span>
          <span className="text-[#3B82F6] font-semibold tracking-wide min-w-[220px] text-left flex items-center">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer.",
                  "UI Enthusiast.",
                  "Web Developer.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeSlideUp_0.6s_ease_0.6s_both]">
          {/* <span className="text-[#71717a] text-xs tracking-[0.2em] uppercase">Scroll</span> */}
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#3B82F6]/60 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
});

export default MainSection;
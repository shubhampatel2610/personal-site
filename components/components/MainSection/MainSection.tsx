import { Image } from "primereact/image";
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import Typewriter from "typewriter-effect";
import ParticleBackground from "@/components/common/ParticleBackground";

const MainSection = observer(() => {
  const sectionClasses = "relative min-h-screen w-full pt-20 flex items-center justify-center overflow-hidden bg-[#0a0a0a]";
  const backgroundLayerClasses = "absolute inset-0 z-0 pointer-events-none";
  const glowRingClasses = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px]";
  const contentClasses = "relative z-10 flex flex-col items-center justify-center gap-5 p-3 md:px-6 text-center";
  const pictureWrapperClasses = "relative w-40 h-40 sm:w-24 sm:h-24 md:w-50 md:h-50 rounded-full overflow-hidden ring-[2px] ring-white/5 transform transition-transform duration-700 ease-out group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]";
  const pictureGlowClasses = "absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent blur-sm opacity-70 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.45)]";
  const pictureBorderClasses = "absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#3B82F6]/80 to-[#1a1a1a] transition-shadow duration-700 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.25)]";
  const imageClassName = "w-full h-full object-cover scale-100 transition-transform duration-700 ease-out group-hover:scale-105";
  const taglineClasses = "flex flex-col items-center gap-1 animate-[fadeSlideUp_0.6s_ease_0.1s_both]";
  const taglineTextClasses = "text-[#a1a1aa] text-sm sm:text-base tracking-[0.2em] uppercase font-light";
  const titleClasses = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight";
  const dividerClasses = "w-12 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent animate-[fadeSlideUp_0.6s_ease_0.2s_both]";
  const introWrapperClasses = "flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-base sm:text-lg md:text-xl animate-[fadeSlideUp_0.6s_ease_0.3s_both]";
  const introTextClasses = "text-[#a1a1aa] font-light tracking-wide";
  const typewriterClasses = "text-[#3B82F6] font-semibold tracking-wide min-w-[220px] text-left flex items-center";
  const scrollIndicatorClasses = "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeSlideUp_0.6s_ease_0.6s_both]";
  const scrollLineClasses = "w-[1px] h-8 bg-gradient-to-b from-[#3B82F6]/60 to-transparent animate-pulse";

  return (
    <section className={sectionClasses}>
      <div className={backgroundLayerClasses}>
        <ParticleBackground />
      </div>

      <div className={backgroundLayerClasses}>
        <div className={glowRingClasses} />
      </div>

      <div className={contentClasses}>
        <div className="group relative">
          <div className={pictureGlowClasses} />
          <div className={pictureBorderClasses} />
          <div className={pictureWrapperClasses}>
            <Image
              src={AppConstants.PROFILE_PICTURE_PATH}
              alt="Profile Picture"
              imageClassName={imageClassName}
            />
          </div>
        </div>

        <div className={taglineClasses}>
          <p className={taglineTextClasses}>{AppConstants.MAIN_SECTION_TAGLINE_1}</p>
          <h1 className={titleClasses}>{AppConstants.MAIN_SECTION_TAGLINE_2}</h1>
        </div>

        <div className={dividerClasses} />

        <div className={introWrapperClasses}>
          <span className={introTextClasses}>{AppConstants.MAIN_SECTION_INTROLINE}</span>
          <span className={typewriterClasses}>
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

        <div className={scrollIndicatorClasses}>
          <div className={scrollLineClasses} />
        </div>
      </div>
    </section>
  );
});

export default MainSection;
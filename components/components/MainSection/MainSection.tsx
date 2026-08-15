import { Image } from "primereact/image";
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import Typewriter from "typewriter-effect";

const MainSection = observer(() => {
  const sectionClasses = "relative min-h-screen w-full pt-20 flex items-center justify-center overflow-hidden bg-[var(--site-bg)]";
  const contentClasses = "relative z-10 flex flex-col items-center justify-center gap-5 p-3 md:px-6 text-center";
  const pictureWrapperClasses = "relative w-40 h-40 sm:w-24 sm:h-24 md:w-44 md:h-44 rounded-md overflow-hidden ring-1 ring-[var(--border-visible)]";
  const cornerBaseClasses = "absolute w-5 h-5 border-[var(--accent)] pointer-events-none";
  const imageClassName = "w-full h-full object-cover";
  const taglineClasses = "flex flex-col items-center gap-2 animate-[fadeSlideUp_0.6s_ease_0.1s_both]";
  const taglineTextClasses = "font-mono text-[var(--text-muted)] text-xs sm:text-sm tracking-[0.25em] uppercase";
  const titleClasses = "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--site-text)] tracking-tight leading-tight";
  const dividerClasses = "w-12 h-px bg-[var(--border-visible)] animate-[fadeSlideUp_0.6s_ease_0.2s_both]";
  const introWrapperClasses = "flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-base sm:text-lg md:text-xl animate-[fadeSlideUp_0.6s_ease_0.3s_both]";
  const introTextClasses = "text-[var(--text-muted)] font-light tracking-wide";
  const typewriterClasses = "font-mono text-[var(--accent)] font-medium tracking-wide min-w-[220px] text-left flex items-center";
  const scrollIndicatorClasses = "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeSlideUp_0.6s_ease_0.6s_both]";
  const scrollLineClasses = "w-px h-8 bg-[var(--border-visible)] animate-pulse";

  return (
    <section className={sectionClasses}>
      <div className={contentClasses}>
        <div className="relative">
          <span className={`${cornerBaseClasses} -top-2 -left-2 border-t-2 border-l-2`} />
          <span className={`${cornerBaseClasses} -top-2 -right-2 border-t-2 border-r-2`} />
          <span className={`${cornerBaseClasses} -bottom-2 -left-2 border-b-2 border-l-2`} />
          <span className={`${cornerBaseClasses} -bottom-2 -right-2 border-b-2 border-r-2`} />
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
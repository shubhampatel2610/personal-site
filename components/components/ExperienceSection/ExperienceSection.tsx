// ExperienceSection.tsx
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const ExperienceSection = observer(() => {
  const sectionClasses = "relative w-full py-16 md:py-24 bg-[var(--site-bg)] overflow-hidden";
  const containerClasses = "relative z-10 max-w-4xl mx-auto p-3 md:px-6";
  const timelineWrapperClasses = "relative flex flex-col gap-0";
  const timelineLineClasses = "absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-[var(--border-visible)]";

  const experienceDetails = [...AppConstants.EXPERIENCE_DETAILS].sort(
    (a, b) => b.id - a.id
  );

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <SectionHeader index="02" label="Career" title={AppConstants.EXPERIENCE_HEADER} />

        <div className={timelineWrapperClasses}>
          <div className={timelineLineClasses} />
          {experienceDetails.map((experience, index) => (
            <ExperienceCard key={experience.id} experienceDetails={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;

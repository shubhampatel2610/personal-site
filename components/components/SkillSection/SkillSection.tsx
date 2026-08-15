import AppConstants from "@/constant/AppConstants";
import SkillListRenderer from "@/components/common/SkillListRenderer/SkillListRenderer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const SkillSection = () => {
  const sectionClasses = "relative w-full py-16 md:py-24 bg-[var(--site-bg)] overflow-hidden";
  const containerClasses = "relative z-10 max-w-6xl mx-auto p-3 md:px-6";
  const blockClasses = "flex flex-col gap-5";
  const blockHeaderClasses = "flex items-center gap-4 px-1";
  const blockTitleClasses = "font-mono text-[var(--site-text)] font-medium text-sm tracking-wide uppercase shrink-0";
  const blockLineClasses = "flex-1 h-px bg-[var(--border-subtle)]";

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <SectionHeader index="03" label="Expertise" title="Skills & Tools" />

        <div className={blockClasses}>
          <div className={blockClasses}>
            <div className={blockHeaderClasses}>
              <span className={blockTitleClasses}>{AppConstants.SKILLS_HEADER}</span>
              <div className={blockLineClasses} />
            </div>
            <SkillListRenderer itemList={AppConstants.SKILLS_LIST} direction="left" />
          </div>

          <div className={blockClasses}>
            <div className={blockHeaderClasses}>
              <span className={blockTitleClasses}>{AppConstants.TOOLS_HEADER}</span>
              <div className={blockLineClasses} />
            </div>
            <SkillListRenderer itemList={AppConstants.TOOLS_LIST} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
// ExperienceCard.tsx
import { useState } from "react";
import AppConstants from "@/constant/AppConstants";
import Card from "@/components/common/Card/Card";

interface ExperienceCardProps {
  experienceDetails: {
    id: number;
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
  };
  index?: number;
}

const ExperienceCard = ({ experienceDetails, index = 0 }: ExperienceCardProps) => {
  const { company, duration, role, description, location } = experienceDetails;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionToShow =
    showFullDescription || description.length <= 2
      ? description
      : description.slice(0, 2);

  const wrapperClasses = "relative pl-6 md:pl-10 pb-5";
  const timelineDotClasses = "absolute left-0 top-[10px] w-2.5 h-2.5 md:w-3 md:h-3 bg-[var(--site-bg)] border-2 border-[var(--accent)]";
  const headerClasses = "flex flex-col sm:flex-row sm:items-center justify-between gap-2";
  const companyClasses = "font-display text-[var(--site-text)] font-semibold text-lg md:text-xl tracking-tight";
  const durationClasses = "font-mono inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border-visible)] text-[var(--text-muted)] text-xs whitespace-nowrap self-start sm:self-auto";
  const roleClasses = "flex items-center gap-1.5 text-[var(--site-text)]/80 text-sm font-medium";
  const locationClasses = "flex items-center gap-1.5 text-[var(--text-faint)] text-sm";
  const dividerClasses = "w-full h-px bg-[var(--border-subtle)]";
  const listClasses = "flex flex-col gap-2 list-none m-0 p-0";
  const listItemClasses = "flex items-start gap-2.5 text-[var(--text-muted)] text-sm leading-relaxed";
  const bulletClasses = "mt-[6px] w-1.5 h-1.5 shrink-0 bg-[var(--accent)]/50";
  const toggleButtonClasses = "self-start inline-flex items-center gap-1.5 text-[var(--accent)] text-xs font-medium hover:text-[var(--accent-hover)] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0";

  return (
    <div className={wrapperClasses}>
      <span className={timelineDotClasses} />

      <Card delayMs={index * 120} className="gap-2 p-3 md:p-4">
        <div className={headerClasses}>
          <h3 className={companyClasses}>{company}</h3>
          <span className={durationClasses}>
            <i className="pi pi-calendar text-[10px]" />
            {duration}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between">
          <span className={roleClasses}>
            <i className="pi pi-briefcase text-[var(--accent)] text-xs" />
            {role}
          </span>
          <span className={locationClasses}>
            <i className="pi pi-map-marker text-[var(--text-faint)] text-xs" />
            {location}
          </span>
        </div>

        <div className={dividerClasses} />

        <ul className={listClasses}>
          {descriptionToShow.map((desc, i) => (
            <li key={i} className={listItemClasses}>
              <span className={bulletClasses} />
              {desc}
            </li>
          ))}
        </ul>

        {description.length > 2 && (
          <button onClick={() => setShowFullDescription(!showFullDescription)} className={toggleButtonClasses}>
            <i className={`pi ${showFullDescription ? "pi-chevron-up" : "pi-chevron-down"} text-[10px]`} />
            {showFullDescription ? AppConstants.SHOW_LESS_TEXT : AppConstants.SHOW_MORE_TEXT}
          </button>
        )}
      </Card>
    </div>
  );
};

export default ExperienceCard;

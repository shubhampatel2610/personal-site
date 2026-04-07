// ExperienceCard.tsx
import { useEffect, useState } from "react";
import AppConstants from "@/constant/AppConstants";

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
  const [descriptionToShow, setDescriptionToShow] = useState<string[]>([]);

  // ✅ Store logic untouched
  useEffect(() => {
    if (showFullDescription || description.length <= 2) {
      setDescriptionToShow(description);
    } else {
      setDescriptionToShow(description.slice(0, 2));
    }
  }, [showFullDescription, description]);

  return (
    <div
      style={{ animationDelay: `${index * 120}ms` }}
      className="relative pl-5 md:pl-10 pb-5 animate-[fadeSlideUp_0.5s_ease_both]"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px] flex items-center justify-center
        w-[16px] h-[16px] md:w-[24px] md:h-[24px] rounded-full
        bg-[#0a0a0a] border-2 border-[#3B82F6]
        shadow-[0_0_10px_rgba(59,130,246,0.4)]"
      >
        <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#3B82F6]" />
      </div>

      {/* Card */}
      <div className="group relative flex flex-col gap-2 p-3 md:p-4 rounded-xl
        bg-[#111111] border border-white/[0.06]
        hover:border-[#3B82F6]/30
        hover:shadow-[0_0_30px_rgba(59,130,246,0.07)]
        transition-all duration-300 ease-in-out"
      >
        {/* Top accent line */}
        <span className="absolute top-0 left-8 right-8 h-[1px] rounded-full
          bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Header — company + duration */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">
            {company}
          </h3>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-[#3B82F6]/10 border border-[#3B82F6]/20
            text-[#3B82F6] text-xs font-medium whitespace-nowrap self-start sm:self-auto"
          >
            <i className="pi pi-calendar text-[10px]" />
            {duration}
          </span>
        </div>

        {/* Role + Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between">
          <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
            <i className="pi pi-briefcase text-[#3B82F6] text-xs" />
            {role}
          </span>
          <span className="flex items-center gap-1.5 text-[#71717a] text-sm">
            <i className="pi pi-map-marker text-[#71717a] text-xs" />
            {location}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/[0.06]" />

        {/* Description */}
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {descriptionToShow.map((desc, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[#a1a1aa] text-sm leading-relaxed"
            >
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#3B82F6]/50 shrink-0" />
              {desc}
            </li>
          ))}
        </ul>

        {/* Show more / less */}
        {description.length > 2 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="self-start inline-flex items-center gap-1.5
              text-[#3B82F6] text-xs font-medium
              hover:text-white transition-colors duration-200 cursor-pointer
              bg-transparent border-none p-0"
          >
            <i className={`pi ${showFullDescription ? "pi-chevron-up" : "pi-chevron-down"} text-[10px]`} />
            {showFullDescription
              ? AppConstants.SHOW_LESS_TEXT
              : AppConstants.SHOW_MORE_TEXT}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
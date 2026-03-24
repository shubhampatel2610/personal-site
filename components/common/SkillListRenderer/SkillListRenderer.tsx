// SkillListRenderer.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface SkillListRendererProps {
  itemList: any[];
  direction?: "left" | "right";
}

const SkillListRenderer = ({
  itemList,
  direction = "left",
}: SkillListRendererProps) => {
  if (!itemList || itemList.length === 0) return null;

  // Duplicate list for seamless infinite loop
  const duplicated = [...itemList, ...itemList, ...itemList];

  return (
    <div className="relative w-full overflow-hidden group">

      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10
        bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10
        bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <div
        className={`
          flex gap-3 w-max
          ${direction === "left"
            ? "animate-[scrollLeft_30s_linear_infinite]"
            : "animate-[scrollRight_30s_linear_infinite]"
          }
          group-hover:[animation-play-state:paused]
        `}
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 rounded-lg
              bg-[#111111] border border-white/[0.06]
              hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5
              hover:shadow-[0_0_16px_rgba(59,130,246,0.08)]
              transition-all duration-200 ease-in-out
              cursor-default select-none shrink-0"
          >
            {/* SVG icon component */}
            {item.component && (
              <span className="w-5 h-5 flex items-center justify-center shrink-0
                text-[#a1a1aa] group-hover:text-white transition-colors duration-200"
              >
                <item.component />
              </span>
            )}
            <span className="text-[#a1a1aa] text-sm font-medium
              group-hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillListRenderer;
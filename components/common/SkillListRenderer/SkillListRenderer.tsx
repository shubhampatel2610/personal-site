/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface SkillListRendererProps {
  itemList: any[];
  direction?: "left" | "right";
}

const pillBaseClasses = "flex flex-col items-center justify-center w-[90px] h-[90px] shrink-0 rounded-xl p-2 bg-[var(--surface-2)] border border-[var(--border-subtle)] transition-all duration-200 cursor-default select-none";
const pillHoverClasses = "hover:border-[var(--accent)] hover:bg-[var(--accent-10)] hover:shadow-[0_0_20px_var(--accent-15)] hover:-translate-y-1";
const pillIconWrapperClasses = "w-full h-full flex items-center justify-center shrink-0 overflow-hidden p-1";
const pillNameClasses = "text-[var(--text-muted)] text-[12px] font-medium text-center leading-tight w-full break-words hyphens-auto mb-1";
const outerContainerClasses = "relative w-full overflow-hidden py-3 group";
const fadeEdgeClasses = "absolute top-0 bottom-0 w-20 z-10 pointer-events-none";
const scrollTrackBaseClasses = "group-hover:[animation-play-state:paused]";

const SkillPill = ({ item }: { item: any }) => (
  <div className={`${pillBaseClasses} ${pillHoverClasses}`}>
    {item.component && (
      <div className={pillIconWrapperClasses}>
        <item.component />
      </div>
    )}

    <span className={pillNameClasses}>{item.name}</span>
  </div>
);

const SkillListRenderer = ({ itemList, direction = "left" }: SkillListRendererProps) => {
  if (!itemList || itemList.length === 0) return null;

  const duplicated = [...itemList, ...itemList, ...itemList];
  const scrollAnimation = `${direction === "left" ? "scrollLeft" : "scrollRight"} 40s linear infinite`;

  return (
    <div className={outerContainerClasses}>
      <div className={`${fadeEdgeClasses} left-0`} style={{ background: "linear-gradient(to right, var(--site-bg) 0%, transparent 100%)" }} />
      <div className={`${fadeEdgeClasses} right-0`} style={{ background: "linear-gradient(to left, var(--site-bg) 0%, transparent 100%)" }} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "max-content",
          willChange: "transform",
          animation: scrollAnimation,
        }}
        className={scrollTrackBaseClasses}
      >
        {duplicated.map((item, i) => (
          <SkillPill key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillListRenderer;
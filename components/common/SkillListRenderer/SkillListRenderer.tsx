/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface SkillListRendererProps {
  itemList: any[];
  direction?: "left" | "right";
}

const SkillPill = ({ item }: { item: any }) => (
  <div
    className={[
      "flex flex-col items-center justify-center",
      "w-[90px] h-[90px] shrink-0 rounded-xl p-2",
      "bg-[var(--surface-2)] border border-[var(--border-subtle)]",
      "hover:border-[var(--accent)] hover:bg-[var(--accent-10)]",
      "hover:shadow-[0_0_20px_var(--accent-15)]",
      "hover:-translate-y-1",
      "transition-all duration-200 cursor-default select-none",
    ].join(" ")}
  >
    {/* Icon */}
    {item.component && (
      <div className="w-full h-full flex items-center justify-center shrink-0 overflow-hidden p-1">
        <item.component />
      </div>
    )}

    {/* Name */}
    <span className="text-[var(--text-muted)] text-[12px] font-medium text-center leading-tight w-full break-words hyphens-auto mb-1">
      {item.name}
    </span>
  </div>
);

const SkillListRenderer = ({
  itemList,
  direction = "left",
}: SkillListRendererProps) => {
  if (!itemList || itemList.length === 0) return null;

  // Triple duplicate for seamless loop
  const duplicated = [...itemList, ...itemList, ...itemList];

  return (
    <div className="relative w-full overflow-hidden py-3 group">

      {/* Left fade — uses inline style for CSS var support in gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--site-bg) 0%, transparent 100%)" }}
      />

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--site-bg) 0%, transparent 100%)" }}
      />

      {/* Scroll track */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "max-content",
          willChange: "transform",
          animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} 40s linear infinite`,
        }}
        // Pause on hover via className
        className="group-hover:[animation-play-state:paused]"
      >
        {duplicated.map((item, i) => (
          <SkillPill key={i} item={item} />
        ))}
      </div>

    </div>
  );
};

export default SkillListRenderer;
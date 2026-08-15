interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
}

const SectionHeader = ({ index, label, title }: SectionHeaderProps) => {
  const wrapperClasses = "flex flex-col items-center text-center gap-4 mb-10 md:mb-16";
  const markerClasses = "flex items-center gap-2 font-mono text-xs md:text-sm tracking-[0.2em] uppercase";
  const indexClasses = "text-[var(--accent)]";
  const sepClasses = "text-[var(--text-faint)]";
  const labelClasses = "text-[var(--text-muted)]";
  const titleClasses = "font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--site-text)]";
  const ruleClasses = "w-12 h-px bg-[var(--border-visible)]";

  return (
    <div className={wrapperClasses}>
      <div className={markerClasses}>
        <span className={indexClasses}>{index}</span>
        <span className={sepClasses}>/</span>
        <span className={labelClasses}>{label}</span>
      </div>
      <h2 className={titleClasses}>{title}</h2>
      <div className={ruleClasses} />
    </div>
  );
};

export default SectionHeader;

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  padded?: boolean;
}

const Card = ({ children, className = "", delayMs = 0, padded = true }: CardProps) => {
  const baseClasses = "group relative flex flex-col h-full rounded-lg bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)] transition-colors duration-300 ease-out animate-[fadeSlideUp_0.5s_ease_both]";
  const paddingClasses = padded ? "p-4 gap-3" : "";
  const accentLineClasses = "absolute top-0 left-6 right-6 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none";

  return (
    <div style={{ animationDelay: `${delayMs}ms` }} className={`${baseClasses} ${paddingClasses} ${className}`}>
      <span className={accentLineClasses} />
      {children}
    </div>
  );
};

export default Card;

import { Image } from "primereact/image";
import Card from "@/components/common/Card/Card";

interface ServiceCardProps {
  title: string;
  description: string;
  iconPath: string;
  index?: number;
}

const ServiceCard = ({ title, description, iconPath, index = 0 }: ServiceCardProps) => {
  const iconWrapperClasses = "flex items-center justify-center w-12 h-12 rounded-md bg-[var(--accent-soft)] border border-[var(--accent)]/20 group-hover:border-[var(--accent)]/40 transition-all duration-300 shrink-0";
  const titleClasses = "font-display text-[var(--site-text)] font-semibold text-base tracking-tight leading-snug";
  const descriptionClasses = "text-[var(--text-muted)] text-sm leading-relaxed";

  return (
    <Card delayMs={index * 100}>
      <div className={iconWrapperClasses}>
        <Image src={iconPath} alt={`${title} icon`} imageClassName="w-6 h-6 object-contain" />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;

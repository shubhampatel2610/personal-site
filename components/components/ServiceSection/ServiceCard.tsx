import { Image } from "primereact/image";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  iconPath: string;
  index?: number;
}

const ServiceCard = ({ id, title, description, iconPath, index = 0 }: ServiceCardProps) => {
  return (
    <div className="col-12 sm:col-12 md:col-6 lg:col-3 p-2">
      <div
        style={{ animationDelay: `${index * 100}ms` }}
        className="group relative flex flex-col gap-1 p-3 rounded-xl h-full
          bg-[#111111] border border-white/[0.06]
          hover:border-[#3B82F6]/30
          hover:shadow-[0_0_30px_rgba(59,130,246,0.07)]
          transition-all duration-300 ease-in-out
          animate-[fadeSlideUp_0.5s_ease_both]"
      >
        {/* Top accent line — reveals on hover */}
        <span className="absolute top-0 left-8 right-8 h-[1px] rounded-full
          bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon container */}
        <div className="flex items-center justify-center w-12 h-12 rounded-lg
          bg-[#3B82F6]/10 border border-[#3B82F6]/20
          group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/40
          transition-all duration-300 shrink-0"
        >
          <Image
            src={iconPath}
            alt={`${title} icon`}
            imageClassName="w-6 h-6 object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-white font-semibold text-base tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom arrow — slides in on hover */}
        {/* <div className="flex items-center gap-1.5 text-[#3B82F6]
          opacity-0 group-hover:opacity-70
          -translate-x-1 group-hover:translate-x-0
          transition-all duration-300 pt-1"
        >
          <span className="text-xs font-medium tracking-wide">Learn more</span>
          <i className="pi pi-arrow-right text-xs" />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
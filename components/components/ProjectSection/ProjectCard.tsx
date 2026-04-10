import Image from "next/image";

interface Project {
    id: number;
    name: string;
    description: string[];
    imagePath: string;
    techStacks: string[];
    sourceCodeLink: string;
    liveDemoLink: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { name, description, imagePath, techStacks, sourceCodeLink, liveDemoLink } = project;

    const cardClasses = "group relative flex flex-col gap-2 h-full mx-2 py-3 px-4 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.07)] transition-all duration-300 ease-in-out animate-[fadeSlideUp_0.5s_ease_both]";
    const accentLineClasses = "absolute top-0 left-8 right-8 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300";
    const imageClasses = "w-full h-50 rounded-lg object-cover bg-[#1a1a1a] border border-white/[0.06] flex items-center justify-center overflow-hidden";
    const nameclasses = "text-white font-bold text-lg md:text-xl tracking-tight";
    const descItemClasses = "flex items-start gap-2.5 text-[#a1a1aa] text-sm leading-relaxed";
    const bulletClasses = "mt-[6px] w-1.5 h-1.5 rounded-full bg-[#3B82F6]/50 shrink-0";
    const techBadgeClasses = "px-2.5 py-1 rounded-md text-xs font-medium bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6]";
    const linkButtonClasses = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.08] bg-white/[0.04] text-[#a1a1aa] hover:text-white hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10 transition-all duration-200";
    const imageContentClasses = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105";
    const placeholderWrapperClasses = "flex flex-col items-center justify-center gap-2 w-full h-full";
    const placeholderLabelClasses = "text-[#71717a] text-xs tracking-widest uppercase";
    const sectionDividerClasses = "w-full h-[1px] bg-white/[0.06]";
    const descriptionListClasses = "flex flex-col gap-1.5 list-none m-0 p-0 flex-1";
    const techWrapperClasses = "flex flex-wrap gap-2 mt-auto pt-1";
    const linksWrapperClasses = "flex items-center gap-2";

    return (
        <div className={cardClasses}>
            {/* Top accent line */}
            <span className={accentLineClasses} />

            {/* Image / Placeholder */}
            <div className={imageClasses}>
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={name}
                        className={imageContentClasses}
                        // fill
                        width={500}
                        height={500}
                    />
                ) : (
                    <div className={placeholderWrapperClasses}>
                        <i className="pi pi-code text-[#3B82F6]/30 text-4xl" />
                        <span className={placeholderLabelClasses}>
                            Preview unavailable
                        </span>
                    </div>
                )}
            </div>

            {/* Project name */}
            <h3 className={nameclasses}>{name}</h3>

            {/* Divider */}
            <div className={sectionDividerClasses} />

            {/* Description */}
            <ul className={descriptionListClasses}>
                {description.map((desc, i) => (
                    <li key={i} className={descItemClasses}>
                        <span className={bulletClasses} />
                        {desc}
                    </li>
                ))}
            </ul>

            {/* Tech stack */}
            <div className={techWrapperClasses}>
                {techStacks.map((tech) => (
                    <span key={tech} className={techBadgeClasses}>
                        {tech}
                    </span>
                ))}
            </div>

            {/* Divider */}
            <div className={sectionDividerClasses} />

            {/* Links */}
            <div className={linksWrapperClasses}>
                {sourceCodeLink?.trim() && (
                    <a
                        href={sourceCodeLink}
                        target="_blank"
                        rel="noreferrer"
                        className={linkButtonClasses}
                    >
                        <i className="pi pi-github text-xs" />
                        Source Code
                    </a>
                )}

                {liveDemoLink.trim() && <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    className={linkButtonClasses}
                >
                    <i className="pi pi-external-link text-xs" />
                    Live Demo
                </a>}

            </div>
        </div>
    );
};

export default ProjectCard;
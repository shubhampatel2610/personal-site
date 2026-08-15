import Image from "next/image";
import Card from "@/components/common/Card/Card";

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

    const imageClasses = "relative w-full h-52 rounded-md overflow-hidden bg-[var(--surface-2)] border border-[var(--border-subtle)]";
    const nameclasses = "font-display text-[var(--site-text)] font-semibold text-lg md:text-xl tracking-tight";
    const descItemClasses = "flex items-start gap-2.5 text-[var(--text-muted)] text-sm leading-relaxed";
    const bulletClasses = "mt-[6px] w-1.5 h-1.5 shrink-0 bg-[var(--accent)]/50";
    const techBadgeClasses = "font-mono px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--accent-soft)] border border-[var(--accent)]/20 text-[var(--accent)]";
    const linkButtonClasses = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-[var(--border-visible)] bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--site-text)] hover:border-[var(--accent)]/40 transition-all duration-200";
    const imageContentClasses = "object-cover transition-transform duration-300 group-hover:scale-105";
    const placeholderWrapperClasses = "flex flex-col items-center justify-center gap-2 w-full h-full";
    const placeholderLabelClasses = "font-mono text-[var(--text-faint)] text-xs tracking-widest uppercase";
    const sectionDividerClasses = "w-full h-px bg-[var(--border-subtle)]";
    const descriptionListClasses = "flex flex-col gap-1.5 list-none m-0 p-0 flex-1";
    const techWrapperClasses = "flex flex-wrap gap-2 mt-auto pt-1";
    const linksWrapperClasses = "flex items-center gap-2";

    return (
        <Card className="mx-2 p-4 gap-2">
            {/* Image / Placeholder */}
            <div className={imageClasses}>
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={name}
                        width={800}
                        height={300}
                        className={imageContentClasses}
                    />
                ) : (
                    <div className={placeholderWrapperClasses}>
                        <i className="pi pi-code text-[var(--accent)]/30 text-4xl" />
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
        </Card>
    );
};

export default ProjectCard;

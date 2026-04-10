import AppConstants from "@/constant/AppConstants";
import { Carousel } from "primereact/carousel";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    const sectionClasses = "relative w-full py-10 bg-[#0a0a0a] overflow-hidden";
    const textureClasses = "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none";
    const glowClasses = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3B82F6]/[0.04] rounded-full blur-[100px] pointer-events-none";
    const containerClasses = "flex flex-col relative z-10 max-w-7xl mx-auto p-3 md:px-6";
    const headerClasses = "flex flex-col items-center text-center mb-10 md:mb-16 gap-4";
    const badgeClasses = "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5";
    const badgeDotClasses = "w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse";
    const badgeLabelClasses = "text-[#3B82F6] text-xs font-medium tracking-widest uppercase";
    const titleClasses = "text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight";
    const dividerClasses = "w-12 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent rounded-full";

    // Responsive breakpoints for carousel
    const carouselResponsiveOptions = [
        { breakpoint: "1280px", numVisible: 2, numScroll: 1 },
        { breakpoint: "768px", numVisible: 1, numScroll: 1 },
        { breakpoint: "480px", numVisible: 1, numScroll: 1 },
    ];

    const projectTemplate = (project: (typeof AppConstants.PROJECTS)[0]) => (
        <ProjectCard key={project.id} project={project} />
    );

    return (
        <section className={sectionClasses}>
            <div className={textureClasses} />
            <div className={glowClasses} />

            <div className={containerClasses}>
                <div className={headerClasses}>
                    <div className={badgeClasses}>
                        <span className={badgeDotClasses} />
                        <span className={badgeLabelClasses}>Projects</span>
                    </div>
                    <h2 className={titleClasses}>From Concept to High Performance Applications</h2>
                    <div className={dividerClasses} />
                </div>

                <Carousel
                    value={AppConstants.PROJECTS}
                    itemTemplate={projectTemplate}
                    numVisible={2}
                    numScroll={1}
                    responsiveOptions={carouselResponsiveOptions}
                    circular
                    showIndicators
                    showNavigators
                />
            </div>
        </section>
    )
}

export default ProjectSection;
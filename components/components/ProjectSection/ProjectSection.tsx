import AppConstants from "@/constant/AppConstants";
import { Carousel } from "primereact/carousel";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const ProjectSection = () => {
    const sectionClasses = "relative w-full py-16 md:py-24 bg-[var(--site-bg)] overflow-hidden";
    const containerClasses = "flex flex-col relative z-10 max-w-7xl mx-auto p-3 md:px-6";

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
            <div className={containerClasses}>
                <SectionHeader index="04" label={AppConstants.PROJECT_SECTION_HEADER} title={AppConstants.PROJECT_SECTION_TAGLINE} />

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

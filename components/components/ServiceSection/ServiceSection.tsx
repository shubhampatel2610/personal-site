import AppConstants from "@/constant/AppConstants";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const ServiceSection = () => {
  const sectionClasses = "relative w-full py-16 md:py-24 bg-[var(--site-bg)] overflow-hidden";
  const containerClasses = "relative z-10 max-w-6xl mx-auto p-3 md:px-6";
  const cardsWrapperClasses = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <SectionHeader index="01" label="About" title={AppConstants.SERVICE_SECTION_TAGLINE} />

        <div className={cardsWrapperClasses}>
          {AppConstants.SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              iconPath={service.iconPath}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

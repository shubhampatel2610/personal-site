import AppConstants from "@/constant/AppConstants";
import "./ServiceSection.scss";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div className="serviceMainContainer">
      <div className="parentContainer">
        <div className="taglineContainer">
          {AppConstants.SERVICE_SECTION_TAGLINE}
        </div>
        <div className="serviceContainer grid col-12">
          {AppConstants.SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              iconPath={service.iconPath}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

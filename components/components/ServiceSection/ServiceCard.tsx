import { Image } from "primereact/image";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="sm:col-12 md:col-6 lg:col-3">
      <div className="serviceCardContainer" key={props.id}>
        <div className="iconContainer">
          <Image src={props.iconPath} alt={`${props.title} icon`} />
        </div>
        <div className="titleContainer">{props.title}</div>
        <div className="descriptionContainer">{props.description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;

import { Card } from "primereact/card";
import "./ExperienceSection.scss";
import { useEffect, useState } from "react";
import AppConstants from "@/constant/AppConstants";

interface ExperienceCardProps {
  experienceDetails: {
    id: number;
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
  };
}

interface HeaderTemplateProps {
  companyName: string;
  duration: string;
}

const HeaderTemplate = (props: HeaderTemplateProps) => {
  return (
    <div className="cardHeader">
      <div className="companyName">{props.companyName}</div>
      <div className="duration">{props.duration}</div>
    </div>
  );
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const companyName = props.experienceDetails.company;
  const duration = props.experienceDetails.duration;
  const role = props.experienceDetails.role;
  const description = props.experienceDetails.description;
  const location = props.experienceDetails.location;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [descriptionToShow, setDescriptionToShow] = useState<string[]>([]);

  useEffect(() => {
    if (showFullDescription || description.length <= 2) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDescriptionToShow(description);
    } else {
      setDescriptionToShow(description.slice(0, 2));
    }
  }, [showFullDescription, description]);
  return (
    <div className="experienceCardContainer">
      <Card
        className="experienceCard"
        header={
          <HeaderTemplate companyName={companyName} duration={duration} />
        }
      >
        <div className="cardContent">
          <div className="headerContainer">
            {/* <label className="cardLabel">Role: </label> */}
            <label className="roleText">{role}</label>
            <label className="locationText">
              <i className="pi pi-map-marker" /> {location}
            </label>
          </div>
          <div className="descriptionContainer">
            {/* <label className="cardLabel">Experience: </label> */}
            <ul>
              {descriptionToShow.map((desc, index) => (
                <li key={index} className="descriptionText">
                  {desc}
                </li>
              ))}
            </ul>
            {description.length > 2 && (
              <div
                className="showHyperText"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription
                  ? AppConstants.SHOW_LESS_TEXT
                  : AppConstants.SHOW_MORE_TEXT}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperienceCard;

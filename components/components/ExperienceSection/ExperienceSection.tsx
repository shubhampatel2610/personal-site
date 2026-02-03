import { observer } from "mobx-react-lite";
import "./ExperienceSection.scss";
import AppConstants from "@/constant/AppConstants";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = observer(() => {
  return (
    <div className="expMainContainer">
      <div className="expDetailsContainer">
        <div className="headerText">{AppConstants.EXPERIENCE_HEADER}</div>
        <div className="cardParentContainer">
          <div className="cardContainer">
            {AppConstants.EXPERIENCE_DETAILS.sort((a, b) => b.id - a.id).map(
              (experience) => (
                <ExperienceCard
                  key={experience.id}
                  experienceDetails={experience}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ExperienceSection;

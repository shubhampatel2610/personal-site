import AppConstants from "@/constant/AppConstants";
import "./SkillSection.scss";
import CarouselComponent from "@/components/common/CarouselComponent/CarouselComponent";

const SkillSection = () => {
  return (
    <div className="skillsMainContainer">
      <div className="skillsContainer">
        <div className="headerContainer">{AppConstants.SKILLS_HEADER}</div>
        <div className="skillsListContainer">
          <CarouselComponent
            itemList={AppConstants.SKILLS_LIST}
            horizontalDirection={"right"}
          />
        </div>
      </div>
      <div className="skillsContainer">
        <div className="headerContainer">{AppConstants.TOOLS_HEADER}</div>
        <div className="skillsListContainer">
          <CarouselComponent
            itemList={AppConstants.TOOLS_LIST}
            horizontalDirection={"left"}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

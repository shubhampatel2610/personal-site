import AppConstants from "@/constant/AppConstants";
import "./SkillSection.scss";
import SkillListRenderer from "@/components/common/SkillListRenderer/SkillListRenderer";

const SkillSection = () => {
  return (
    <div className="skillsMainContainer">
      <div className="skillsContainer">
        <div className="headerContainer">{AppConstants.SKILLS_HEADER}</div>
        <div className="skillsListContainer">
          <SkillListRenderer
            itemList={AppConstants.SKILLS_LIST}
          />
        </div>
      </div>
      <div className="skillsContainer">
        <div className="headerContainer">{AppConstants.TOOLS_HEADER}</div>
        <div className="skillsListContainer">
          <SkillListRenderer
            itemList={AppConstants.TOOLS_LIST}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

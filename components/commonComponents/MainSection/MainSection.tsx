import { Image } from "primereact/image";
import "./MainSection.scss";
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import Typewriter from "typewriter-effect";
import { Button } from "primereact/button";

const MainSection = observer(() => {
  return (
    <div className="mainContainer">
      <div className="parentContainer">
        <div className="profilePictureContainer">
          <Image
            src={AppConstants.PROFILE_PICTURE_PATH}
            alt="Profile Picture"
          />
        </div>
        <div className="taglineContainer">
          {AppConstants.MAIN_SECTION_TAGLINE_1}
          <span>{AppConstants.MAIN_SECTION_TAGLINE_2}</span>
        </div>
        <div className="introlineContainer">
          {AppConstants.MAIN_SECTION_INTROLINE}
          <span>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer.",
                  "UI Enthusiast.",
                  "Web Developer.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>
        <div className="buttonContainer">
          <Button
            className="workButton"
            label={AppConstants.WORK_BUTTON_LABEL}
            icon="pi pi-arrow-right"
            iconPos="right"
          />
        </div>
      </div>
    </div>
  );
});

export default MainSection;

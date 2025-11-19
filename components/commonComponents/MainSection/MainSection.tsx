import { Image } from "primereact/image";
import "./MainSection.scss";
import { observer } from "mobx-react-lite";

const MainSection = observer(() => {
  return (
    <div className="mainContainer">
      <div className="parentContainer">
        <div className="profilePictureContainer">
          <Image src="/siteImages/profile_picture.jpg" alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
});

export default MainSection;

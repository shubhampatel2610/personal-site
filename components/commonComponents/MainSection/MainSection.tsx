import "./MainSection.scss";
import { observer } from "mobx-react-lite";

const MainSection = observer(() => {
  return (
    <div className="mainContainer">
      <div className="parentContainer">Hero Section</div>
    </div>
  );
});

export default MainSection;

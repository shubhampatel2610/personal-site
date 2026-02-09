/* eslint-disable @typescript-eslint/no-explicit-any */
import "./SkillListRenderer.scss";

interface SkillListRendererProps {
  itemList: any[];
}

const SkillListRenderer = (props: SkillListRendererProps) => {
  const { itemList } = props;

  return (
    <div className="skillContainer">
      {itemList && itemList.length > 0
        ? [...itemList].map((item, i) => (
            <div key={i} className="skillItem">
              {item.component && (
                <div className="itemIcon">
                  <item.component />
                </div>
              )}
              <div className="itemName">{item.name}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SkillListRenderer;

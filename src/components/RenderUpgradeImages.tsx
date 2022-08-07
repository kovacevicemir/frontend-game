import React from "react";
import { imagePlaceholder } from "../helpers/itemUpgradePlaceholder";
import { IItem } from "../interfaces/IItem";

interface IRenderUpgradeItems {
  item: IItem;
}
const RenderUpgradeImages: React.FC<IRenderUpgradeItems> = ({
  item,
}: IRenderUpgradeItems) => {
  const renderUpgradeImages = (item: IItem) => {
    if (item.upgrade)
      return [...Array(item.upgrade + 1)].map((e, i) => {
        if (i !== 0) {
          return (
            <img src={imagePlaceholder(i)} width={20} alt="upgrades" key={i} />
          );
        } else {
          <></>;
        }
      });
  };

  return <div> {renderUpgradeImages(item)} </div>;
};

export default RenderUpgradeImages;

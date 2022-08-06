import AttackIcon16px from "../images/AttackIcon16px.png";
import Shield16px from "../images/Shield16px.png";
import Health16px from "../images/Health16px.png";

export const iconPicker = (iconType: string) => {
  switch (iconType) {
    case "attack":
      return AttackIcon16px;
    case "deffense":
      return Shield16px;
    case "healthPoints":
      return Health16px;
    default:
      return "";
  }
};

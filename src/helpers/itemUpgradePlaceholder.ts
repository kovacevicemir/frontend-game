import Diamond1 from "../images/Diamond1.gif";

export const imagePlaceholder = (upgradeNumber: number) => {
  switch (upgradeNumber) {
    case 1:
      return Diamond1;
    case 2:
      return Diamond1;
    case 3:
      return Diamond1;

    default:
      return "";
  }
};

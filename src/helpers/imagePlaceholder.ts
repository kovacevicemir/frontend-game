import { itemSlotEnum } from "./../interfaces/IItem";
import weaponPlaceholder from "../images/weaponPlaceholder.png";
import armorPlaceholder from "../images/armorPlaceholder.png";
import beltPlaceholder from "../images/beltPlaceholder.png";
import ringPlaceholder from "../images/ringPlaceholder.png";
import shieldPlaceholder from "../images/shieldPlaceholder.png";
import headPlaceholder from "../images/headPlaceholder.png";
import bootsPlaceholder from "../images/bootsPlaceholder.png";
import neckPlaceholder from "../images/neckPlaceholder.png";

export const imagePlaceholder = (slot: itemSlotEnum | null) => {
  switch (slot) {
    case itemSlotEnum.weapon:
      return weaponPlaceholder;
    case itemSlotEnum.armor:
      return armorPlaceholder;
    case itemSlotEnum.boots:
      return bootsPlaceholder;
    case itemSlotEnum.belt:
      return beltPlaceholder;
    case itemSlotEnum.ring:
      return ringPlaceholder;
    case itemSlotEnum.neck:
      return neckPlaceholder;
    case itemSlotEnum.shield:
      return shieldPlaceholder;
    case itemSlotEnum.head:
      return headPlaceholder;

    default:
      return "";
  }
};

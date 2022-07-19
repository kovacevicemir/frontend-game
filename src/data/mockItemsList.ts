import { IItem, itemSlotEnum } from "../interfaces/IItem";

export const itemsList: IItem[] = [
  {
    id: 1,
    name: "Short Sword",
    attack: 2,
    deffense: 0,
    healthPoints: 0,
    slot: itemSlotEnum.weapon,
  }, //1

  {
    id: 2,
    name: "White T-Shirt",
    attack: 0,
    deffense: 2,
    healthPoints: 5,
    slot: itemSlotEnum.armor,
  }, //2

  {
    id: 3,
    name: "Clown Boots",
    attack: 2,
    deffense: 1,
    healthPoints: 3,
    slot: itemSlotEnum.boots,
  }, //3
];

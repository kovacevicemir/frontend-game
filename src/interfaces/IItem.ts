export interface IItem {
  id: number;
  name: string;
  attack: number;
  deffense: number;
  healthPoints: number;
  slot: itemSlotEnum;
  image?: string;
}

export enum itemSlotEnum {
  head,
  neck,
  weapon,
  armor,
  shield,
  belt,
  boots,
  ring,
}

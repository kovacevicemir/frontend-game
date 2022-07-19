export interface IItem{
    id:number;
    name:string;
    attack:number;
    deffense:number;
    healthPoints:number;
    slot:itemSlotEnum
}

export enum itemSlotEnum {
    weapon,
    armor,
    boots,
    belt,
    ring,
    neck,
    shield,
    head,
  }
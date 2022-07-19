import { IItem } from './IItem';

export interface IEquipedItems{
    weapon: IItem | null;
    armor: IItem | null;
    boots: IItem | null;
    belt: IItem | null;
    ring: IItem | null;
    neck: IItem | null;
    shield: IItem | null;
    head: IItem | null;
}

export const itemSlotNamesArray:string[] = [
    "weapon",
    "armor",
    "boots",
    "belt",
    "ring",
    "neck",
    "shield",
    "head",
  ];
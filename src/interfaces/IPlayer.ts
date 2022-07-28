import { IBattleResults } from "./IBattleResults";
import { IEquipedItems } from "./IEquipedItems";
import { IItem } from "./IItem";
import { IShopAssets } from "./IShopAssets";

export interface IPlayer {
  id: number;
  nickname: string;
  level: number;
  totalAttack: number;
  totalDeffense: number;
  totalHealthPoints: number;
  equipedItems: IEquipedItems;
  inventoryItems: IItem[];
  experience: number;
  gold: number;
  shopAssets: IShopAssets;
  computePlayerStats(): void;
  isLevelUp(): boolean;
  increasePlayerLevel(): void;
  addExpAndGold(battleResults: IBattleResults): void;
  addItemToInventory(battleResults: IBattleResults): void;
  deleteItemFromInventory(item: IItem): void;
  equipItem(item: IItem): void;
  unequipItem(item: IItem): void;
  insertUniqueId(item: IItem): IItem;
}

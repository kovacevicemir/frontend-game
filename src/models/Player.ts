import {
  levelDefinitions,
  levelStatsDefinitions,
} from "../helpers/levelDefinitions";
import { random } from "../helpers/mathHelpers";
import { IBattleResults } from "../interfaces/IBattleResults";
import { IEquipedItems, itemSlotNamesArray } from "../interfaces/IEquipedItems";
import { IItem } from "../interfaces/IItem";
import { IPlayer } from "../interfaces/IPlayer";
import _ from "lodash";

export class Player implements IPlayer {
  id: number;
  nickname: string;
  level: number;
  totalAttack: number = 10;
  totalDeffense: number = 5;
  totalHealthPoints: number = 100;
  equipedItems: IEquipedItems;
  inventoryItems: IItem[] = [];
  experience: number = 0;
  experienceNeeded: number;
  gold: number = 0;

  constructor(
    id: number,
    nickname: string,
    level: number,
    equipedItems: IEquipedItems,
    inventoryItems: IItem[],
    experience: number,
    gold: number
  ) {
    this.id = id;
    this.nickname = nickname;
    this.level = level;
    this.equipedItems = equipedItems;
    this.inventoryItems = inventoryItems;
    this.experience = experience;
    this.gold = gold;
    this.experienceNeeded = levelDefinitions.get(level + 1) as number;
  }

  computePlayerStats(): void {
    const levelBonusRatio = levelStatsDefinitions.get(this.level);
    if (levelBonusRatio === null || levelBonusRatio === undefined) {
      return;
    }

    this.totalAttack = this.computeAttribute(10, levelBonusRatio, "attack");
    this.totalDeffense = this.computeAttribute(5, levelBonusRatio, "deffense");
    this.totalHealthPoints = this.computeAttribute(
      100,
      levelBonusRatio,
      "healthPoints"
    );
  }

  computeAttribute(
    defaultValue: number,
    levelBonusRatio: number,
    attribute: string
  ): number {
    let totalAttributeSum: number = defaultValue;

    for (let item of Object.values(this.equipedItems)) {
      if (item === null) continue;
      totalAttributeSum += item[attribute];
    }

    if (levelBonusRatio) totalAttributeSum += levelBonusRatio;

    return totalAttributeSum;
  }

  isLevelUp(): boolean {
    const nextLevelExp = levelDefinitions.get(this.level + 1);
    if (nextLevelExp == null) return false;

    if (this.experience > nextLevelExp) {
      return true;
    }
    return false;
  }

  increasePlayerLevel(): void {
    if (this.isLevelUp()) {
      this.level = this.level + 1;
      this.experienceNeeded = levelDefinitions.get(this.level + 2) as number;
      this.computePlayerStats();
    }
  }

  addExpAndGold(battleResults: IBattleResults): void {
    if (battleResults.win) this.experience += battleResults.experience;
    this.gold += battleResults.gold;
    this.increasePlayerLevel();
  }

  addItemToInventory(battleResults: IBattleResults): void {
    if (battleResults.drops.length === 0 || this.inventoryItems.length >= 21)
      return;

    let newItem = this.insertUniqueId(battleResults.drops[0]);
    this.inventoryItems = [...this.inventoryItems, newItem];
  }

  addItemToInventoryByItem(item: IItem): void {
    if (this.inventoryItems.length >= 21) return;
    let newItem = this.insertUniqueId(item);
    this.inventoryItems = [...this.inventoryItems, newItem];
  }

  deleteItemFromInventory(item: IItem): void {
    this.inventoryItems = this.inventoryItems.filter((invItem: IItem) => {
      return item !== invItem;
    });
  }

  deleteAllFromInventory(): void {
    this.inventoryItems = [];
  }

  equipItem(item: IItem): void {
    const itemSlot: string = itemSlotNamesArray[item.slot];

    //remove item from player inventory
    this.deleteItemFromInventory(item);

    //check if some item is already equiped on that slot
    const unequipedItem = this.equipedItems[itemSlot as keyof IEquipedItems];
    if (unequipedItem) this.addItemToInventoryByItem(unequipedItem);

    this.equipedItems[itemSlot as keyof IEquipedItems] = item;
    this.computePlayerStats();
  }

  unequipItem(item: IItem): void {
    if (this.inventoryItems.length >= 21) return;
    const itemSlot: string = itemSlotNamesArray[item.slot];
    this.equipedItems[itemSlot as keyof IEquipedItems] = null;
    this.inventoryItems.push(item);
    this.computePlayerStats();
  }

  //Helper only because real db will take care of unique ID in the future
  insertUniqueId(item: IItem): IItem {
    let isUniqueId = true;
    let checkList = _.cloneDeep(this.inventoryItems);

    for (let equipedItem of Object.values(this.equipedItems)) {
      if (equipedItem === null) continue;
      checkList.push(equipedItem);
    }

    checkList.forEach((existingItem) => {
      try {
        if (existingItem.id === item.id) isUniqueId = false;
      } catch (e) {
        console.log(e, existingItem, item);
      }
    });

    if (isUniqueId) {
      return item;
    } else {
      let itemCopy = { ...item };
      itemCopy.id = itemCopy.id + random(100, 200);
      return this.insertUniqueId(itemCopy);
    }
  }
}

import { IShopAssets } from "./../interfaces/IShopAssets";
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
import { getShopAttributeMultiplier } from "../helpers/shopAssetsHelper";
import { IPlayerStatistics } from "../interfaces/IPlayerStatistics";
import { settings } from "../helpers/settings";

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
  shopAssets: IShopAssets = {
    attackSpeed: 0,
    attack: 0,
    deffense: 0,
    healthPoints: 0,
  };
  playerStatistics: IPlayerStatistics = {
    monsterKilled: 0,
    playersKilled: 0,
  };

  constructor(
    id: number,
    nickname: string,
    level: number,
    equipedItems: IEquipedItems,
    inventoryItems: IItem[],
    experience: number,
    gold: number,
    shopAssets: IShopAssets,
    playerStatistics: IPlayerStatistics
  ) {
    this.id = id;
    this.nickname = nickname;
    this.level = level;
    this.equipedItems = equipedItems;
    this.inventoryItems = inventoryItems;
    this.experience = experience;
    this.gold = gold;
    this.experienceNeeded = levelDefinitions.get(level + 1) as number;
    this.shopAssets = shopAssets;
    this.playerStatistics = playerStatistics;
    this.computePlayerStats();
  }

  computePlayerStats(): void {
    const levelBonusRatio = levelStatsDefinitions.get(this.level);
    if (levelBonusRatio === null || levelBonusRatio === undefined) {
      return;
    }

    const attackLevelBonusMultiplier = Math.round(
      levelBonusRatio * (this.level < 15 ? 1 : 1.5)
    );
    const deffenseLevelBonusMultiplier = this.level < 15 ? 1 : 10;
    const hpLevelBonusMultiplier = Math.round(
      levelBonusRatio * (this.level < 15 ? 2 : 4)
    );

    this.totalAttack =
      this.computeAttribute(9, attackLevelBonusMultiplier, "attack") +
      this.shopAssets.attack * getShopAttributeMultiplier("attack");

    this.totalDeffense =
      this.computeAttribute(4, deffenseLevelBonusMultiplier, "deffense") +
      this.shopAssets.deffense * getShopAttributeMultiplier("deffense");

    this.totalHealthPoints =
      this.computeAttribute(99, hpLevelBonusMultiplier, "healthPoints") +
      this.shopAssets.healthPoints * getShopAttributeMultiplier("healthPoints");
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
      this.experienceNeeded = levelDefinitions.get(this.level + 1) as number;
      this.computePlayerStats();
    }
  }

  increasePlayerStatistics(statisticName: keyof IPlayerStatistics) {
    this.playerStatistics[statisticName]++;
  }

  addShopAsset(shopAssetName: keyof IShopAssets) {
    if (
      this.shopAssets[shopAssetName] < 5 &&
      this.gold > settings.shopAssetPrice - 1
    ) {
      this.shopAssets[shopAssetName] = this.shopAssets[shopAssetName] + 1;
      this.gold = this.gold - settings.shopAssetPrice;
    }
  }

  addExpAndGold(battleResults: IBattleResults): void {
    if (battleResults.win) this.experience += battleResults.experience;
    this.gold += battleResults.gold;
    this.increasePlayerStatistics("monsterKilled");
    this.increasePlayerLevel();
  }

  decreaseGold(gold: number) {
    this.gold - gold < 0 ? (this.gold = 0) : (this.gold = this.gold - gold);
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

  pimpItem(item: IItem): void {
    if (item.upgrade !== undefined) {
      if (item.upgrade > 2) return;
    }

    if (this.gold < settings.itemPimpCost) {
      return;
    }

    const foundIndex = this.inventoryItems.findIndex((x) => x.id === item.id);
    if (foundIndex) {
      if (this.inventoryItems[foundIndex].attack !== 0) {
        this.inventoryItems[foundIndex].attack += Math.round(
          this.inventoryItems[foundIndex].attack * 0.333
        );
      }
      if (this.inventoryItems[foundIndex].deffense !== 0) {
        this.inventoryItems[foundIndex].deffense += Math.round(
          this.inventoryItems[foundIndex].deffense * 0.333
        );
      }
      if (this.inventoryItems[foundIndex].healthPoints !== 0) {
        this.inventoryItems[foundIndex].healthPoints += Math.round(
          this.inventoryItems[foundIndex].healthPoints * 0.333
        );
      }

      this.inventoryItems[foundIndex].upgrade = item.upgrade
        ? item.upgrade + 1
        : 1;

      this.decreaseGold(settings.itemPimpCost);
    }
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

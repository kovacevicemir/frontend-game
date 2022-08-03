import { IMonster } from "./../interfaces/IMonster";
import { IItem } from "../interfaces/IItem";
import { IBattleResults } from "../interfaces/IBattleResults";
import { attackMonster } from "../helpers/attackMonster";
import { Player } from "./Player";

export class Monster implements IMonster {
  id: number;
  name: string;
  level: number;
  attack: number;
  deffense: number;
  healthPoints: number;
  droppableItems: IItem[];
  experience: number;
  gold: number;
  battleResults?: IBattleResults;

  constructor(
    id: number,
    name: string,
    level: number,
    attack: number,
    deffense: number,
    healthPoints: number,
    droppableItems: IItem[],
    experience: number,
    gold: number,
    battleResults?: IBattleResults
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.attack = attack;
    this.deffense = deffense;
    this.healthPoints = healthPoints;
    this.droppableItems = droppableItems;
    this.experience = experience;
    this.gold = gold;
    this.battleResults = battleResults;
  }

  attackMe(player: Player): void {
    const battleResults = attackMonster(player, this);

    if (battleResults.win) player.addExpAndGold(battleResults);
    if (battleResults.drops.length > 0) {
      player.addItemToInventory(battleResults);
    }

    this.battleResults = battleResults;
  }
}

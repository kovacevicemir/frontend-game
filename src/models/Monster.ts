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
  image?: string;

  constructor(
    monster:IMonster,
    battleResults?: IBattleResults,
    image?: string
  ) {
    this.id = monster.id;
    this.name = monster.name;
    this.level = monster.level;
    this.attack = monster.attack;
    this.deffense = monster.deffense;
    this.healthPoints = monster.healthPoints;
    this.droppableItems = monster.droppableItems;
    this.experience = monster.experience;
    this.gold = monster.gold;
    this.battleResults = battleResults;
    this.image = image;
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

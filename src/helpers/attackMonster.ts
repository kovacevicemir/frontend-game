import { random } from "lodash";
import { IBattleResults } from "../interfaces/IBattleResults";
import { IItem } from "../interfaces/IItem";
import { Monster } from "../models/Monster";
import { Player } from "../models/Player";
import { dropChances } from "./dropChances";
import { isDrop } from "./isDrop";

export const attackMonster = (
  player: Player,
  monster: Monster
): IBattleResults => {
  let playerAttacks: number[] = [];
  let monsterAttacks: number[] = [];
  let playerHP: number = player.totalHealthPoints;
  let monsterHP: number = monster.healthPoints;

  const addPlayerAttack = (): number => {
    let playerDamage: number;
    playerDamage = player.totalAttack + random(0, 5) - monster.deffense;
    if (playerDamage >= 0) {
      monsterHP -= playerDamage;
      return playerDamage;
    }
    return 0;
  };

  const addMonsterAttack = (): number => {
    let monsterDamage: number;
    monsterDamage = monster.attack + random(0, 5) - player.totalDeffense;
    if (monsterDamage >= 0) {
      playerHP -= monsterDamage;
      return monsterDamage;
    }
    return 0;
  };

  const computeOutcome = () => {
    const dropChance = dropChances.get(monster.level);

    if (playerHP > 0) {
      //Win
      const drops = isDrop(
        monster.droppableItems,
        dropChance ? dropChance : 1
      ) as IItem[];
      const battleResults: IBattleResults = {
        player,
        monster,
        playerAttacks,
        monsterAttacks,
        win: true,
        drops,
        experience: monster.experience,
        gold: monster.gold,
      };
      return battleResults;
    } else {
      const battleResults: IBattleResults = {
        player,
        monster,
        playerAttacks,
        monsterAttacks,
        win: false,
        drops: [],
        experience: 0,
        gold: 0,
      };
      return battleResults;
    }
  };

  while (playerHP > 0 && monsterHP > 0) {
    playerAttacks.push(addPlayerAttack());
    monsterAttacks.push(addMonsterAttack());
  }
  return computeOutcome();
};

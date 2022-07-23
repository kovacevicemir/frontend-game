import { monstersDictionary } from "../data/mockMonsterList";
import { Monster } from "../models/Monster";
import { random } from "./mathHelpers";

export const generateMobsArray = (keyDifficulty: number) => {
  const mob = monstersDictionary[keyDifficulty];
  const numberOfMobs = random(1, keyDifficulty);
  let mobs: Monster[] = [];
  for (let i = 0; i < numberOfMobs; i++) {
    mobs.push(mob as Monster);
  }
  return mobs;
};

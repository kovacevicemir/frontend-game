import { monstersDictionary } from "../data/mockMonsterList";
import { Monster } from "../models/Monster";
import { random } from "./mathHelpers";
import { settings } from "./settings";

export const generateMobsArray = (keyDifficulty: number) => {
  const maxNumber =
    keyDifficulty < settings.maxMobsPerSector + 1
      ? keyDifficulty
      : settings.maxMobsPerSector;

  const mob = monstersDictionary[keyDifficulty];
  const numberOfMobs = random(1, maxNumber);

  let mobs: Monster[] = [];
  for (let i = 0; i < numberOfMobs; i++) {
    mobs.push(mob as Monster);
  }

  return mobs;
};

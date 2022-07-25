import { Monster } from "../models/Monster";
import { itemsDictionary as items } from "./mockItemsList";

export const monstersDictionary: Record<number, object> = {
  1: new Monster(
    1,
    "Monster",
    1,
    15,
    1,
    30,
    [items[1], items[2], items[3], items[4]],
    1,
    1
  ),
  2: new Monster(
    2,
    "Monster",
    2,
    25,
    5,
    55,
    [items[5], items[6], items[7], items[8]],
    2,
    2
  ),
  3: new Monster(
    3,
    "Monster",
    3,
    30,
    10,
    75,
    [items[9], items[10], items[11], items[12]],
    3,
    3
  ),
  4: new Monster(4, "Monster", 4, 40, 18, 80, [items[13], items[14]], 4, 4),
};

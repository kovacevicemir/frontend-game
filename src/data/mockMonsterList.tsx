import { Monster } from "../models/Monster";
import { itemsDictionary as items } from "./mockItemsList";

export const monstersDictionary: Record<number, object> = {
  1: new Monster(
    1,
    "Thief",
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
    "Wolf",
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
    "T8-Robot",
    3,
    30,
    10,
    75,
    [items[9], items[10], items[11], items[12]],
    3,
    3
  ),
  4: new Monster(
    4,
    "Archer of darkness",
    4,
    40,
    18,
    80,
    [items[13], items[14]],
    4,
    4
  ),
  5: new Monster(5, "Capo", 5, 40, 22, 105, [items[15], items[16]], 6, 8),
  6: new Monster(6, "Detective", 6, 50, 20, 125, [items[17]], 7, 8),
  7: new Monster(7, "Knight of darkness", 7, 52, 25, 150, [items[18]], 8, 8),
  8: new Monster(
    8,
    "Enchantress",
    8,
    52,
    30,
    190,
    [items[18], items[19]],
    10,
    8
  ),
  9: new Monster(
    9,
    "Illusionist",
    9,
    50,
    25,
    250,
    [items[18], items[19], items[20]],
    11,
    8
  ),
  10: new Monster(
    10,
    "Beta Monster",
    10,
    67,
    21,
    250,
    [items[18], items[19], items[20], items[21]],
    10,
    10
  ),
};

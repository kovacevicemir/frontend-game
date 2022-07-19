import { Monster } from "../models/Monster";
import { itemsList } from "./mockItemsList";

export const mockMonstersList: Monster[] = [
  new Monster(1, "1Mob", 1, 1, 1, 20, [itemsList[0]], 1, 1),
  new Monster(2, "2Mob", 2, 2, 2, 30, [itemsList[1]], 2, 2),
  new Monster(3, "3Mob", 3, 3, 3, 40, [itemsList[1], itemsList[1]], 3, 3),
];

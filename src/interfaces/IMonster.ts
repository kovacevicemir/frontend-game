import { IItem } from "./IItem";
import { IPlayer } from "./IPlayer";

export interface IMonster {
  id: number;
  name: string;
  level: number;
  attack: number;
  deffense: number;
  healthPoints: number;
  droppableItems: IItem[];
  experience: number;
  gold: number;
  attackMe(player: IPlayer): void;
}

import { Player } from "../models/Player";
import { IItem } from "./IItem";
import { IMonster } from "./IMonster";

export interface IBattleResults{
    player:Player;
    monster:IMonster;
    playerAttacks:number[];
    monsterAttacks:number[];
    win:boolean;
    drops:IItem[];
    experience:number;
    gold:number;
}
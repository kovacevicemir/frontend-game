import { IMonster } from "./IMonster";

export interface IArea {
    id:number;
    name:string;
    levels:string;
    monsters:IMonster[];
}
import { IItem } from "../interfaces/IItem";
import { random } from "./mathHelpers";

export const isDrop = (droppableItems:IItem[], chance:number):IItem[] => {
    if(chance > random(0,100)){
        const randomIndexInItems:number = random(0,droppableItems.length -1);
        return [droppableItems[randomIndexInItems]];
    }
    return [];
}
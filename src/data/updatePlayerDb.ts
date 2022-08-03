import { Player } from "../models/Player";
import { set } from "./localStorage";

export const updatePlayerDb = (player: Player) => {
  player !== null && player !== undefined && set(player.nickname, player);
};

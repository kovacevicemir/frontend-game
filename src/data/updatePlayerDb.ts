import { Player } from "../models/Player";
import { set } from "./localStorage";

export const updatePlayerDb = async (player: Player) => {
  if (player === null || player === undefined) return;

  try {
    set(player.nickname, player);
  } catch (e) {
    console.log(e);
  }
};

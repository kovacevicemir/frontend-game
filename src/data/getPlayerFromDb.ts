import { Player } from "../models/Player";
import { get, set } from "./localStorage";
import { itemsList } from "./mockItemsList";

export const getPlayerFromDb = () => {
  const playerObj = get("LichKing");
  if (playerObj === typeof Player) {
    playerObj.computePlayerStats();
  }

  if (playerObj) {
    return playerObj;
  } else {
    const newPlayer = new Player(
      1,
      "LichKing",
      1,
      {
        weapon: itemsList[0],
        armor: itemsList[1],
        boots: itemsList[2],
        belt: null,
        ring: null,
        neck: null,
        shield: null,
        head: null,
      },
      [itemsList[0], itemsList[1]],
      0,
      0
    );
    newPlayer.computePlayerStats();
    set("LichKing", newPlayer);
    return newPlayer;
  }
};

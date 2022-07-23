import { Player } from "../models/Player";
import { get, set } from "./localStorage";
import { itemsDictionary as items } from "./mockItemsList";

export const getPlayerFromDb = () => {
  const playerObj = get("LichKing");
  if (typeof playerObj === typeof Player && playerObj !== null) {
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
        weapon: items[1],
        armor: null,
        boots: null,
        belt: null,
        ring: null,
        neck: null,
        shield: null,
        head: null,
      },
      [],
      0,
      0
    );
    newPlayer.computePlayerStats();
    set("LichKing", newPlayer);
    return newPlayer;
  }
};

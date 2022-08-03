import { settings } from "../helpers/settings";
import { Player } from "../models/Player";
import { get, set } from "./localStorage";
import { itemsDictionary as items } from "./mockItemsList";

export const getPlayerFromDb = () => {
  const playerObj = get(settings.nickname);
  if (typeof playerObj === typeof Player && playerObj !== null) {
    playerObj.computePlayerStats();
  }

  if (playerObj) {
    return playerObj;
  } else {
    const newPlayer = new Player(
      1,
      settings.nickname,
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
      0,
      {
        attackSpeed: 0,
        attack: 0,
        deffense: 0,
        healthPoints: 0,
      },
      {
        monsterKilled: 0,
        playersKilled: 0,
      }
    );

    set(settings.nickname, newPlayer);
    return newPlayer;
  }
};

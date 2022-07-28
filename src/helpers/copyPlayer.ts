import { Player } from "../models/Player";

//player.shopAssets and statistics is workaround for existing players...
export const copyPlayer = (player: Player): Player => {
  return new Player(
    player.id,
    player.nickname,
    player.level,
    player.equipedItems,
    player.inventoryItems,
    player.experience,
    player.gold,
    player.shopAssets
      ? player.shopAssets
      : {
          attackSpeed: 0,
          attack: 0,
          deffense: 0,
          healthPoints: 0,
        },
    player.playerStatistics
      ? player.playerStatistics
      : {
          monsterKilled: 0,
          playersKilled: 0,
        }
  );
};

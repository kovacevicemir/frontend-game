import { Player } from "../models/Player";

export const copyPlayer = (player: Player): Player => {
  return new Player(
    player.id,
    player.nickname,
    player.level,
    player.equipedItems,
    player.inventoryItems,
    player.experience,
    player.gold
  );
};

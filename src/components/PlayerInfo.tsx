import React from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem, itemSlotEnum } from "../interfaces/IItem";
import { Player } from "../models/Player";
import RenderItem from "./RenderItem";
import { PlayerInfoLayout } from "./styled";

interface IPlayerInfo {
  player: Player;
  setPlayer: any;
}

const PlayerInfo: React.FC<IPlayerInfo> = ({
  player,
  setPlayer,
}: IPlayerInfo) => {
  const handleUnequip = (item: IItem | null) => {
    if (item && player.inventoryItems.length !== 21) {
      const cp = copyPlayer(player);
      cp.unequipItem(item);
      setPlayer(cp);
    }
  };

  return (
    <PlayerInfoLayout>
      <RenderItem item={null} slot={null} handleUnequip={handleUnequip} />
      <RenderItem
        item={player.equipedItems.head}
        slot={itemSlotEnum.head}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.neck}
        slot={itemSlotEnum.neck}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.weapon}
        slot={itemSlotEnum.weapon}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.armor}
        slot={itemSlotEnum.armor}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.shield}
        slot={itemSlotEnum.shield}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.belt}
        slot={itemSlotEnum.belt}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.boots}
        slot={itemSlotEnum.boots}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.ring}
        slot={itemSlotEnum.ring}
        handleUnequip={handleUnequip}
      />
    </PlayerInfoLayout>
  );
};

export default PlayerInfo;

import React from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { settings } from "../helpers/settings";
import { IItem } from "../interfaces/IItem";
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
    if (item && player.inventoryItems.length !== settings.inventoryCapacity) {
      const cp = copyPlayer(player);
      cp.unequipItem(item);
      setPlayer(cp);
    }
  };

  const renderAllItems = () => {
    return Object.entries(player.equipedItems).map(([key, item], i) => {
      return (
        <RenderItem
          key={key}
          item={item}
          slot={i}
          handleUnequip={handleUnequip}
        />
      );
    });
  };

  return (
    <PlayerInfoLayout>
      <div style={{ width: "30%" }}></div>
      {renderAllItems()}
    </PlayerInfoLayout>
  );
};

export default PlayerInfo;

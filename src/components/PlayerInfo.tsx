import React from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";
import MainPanel01 from "../images/MainPanel01.png";
import RenderItem from "./RenderItem";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        minWidth: "300px",
        backgroundImage: `url(${MainPanel01})`,
        backgroundSize: "100% 100%",
        backgroundColor: "black",
        padding: "5%",
      }}
    >
      <RenderItem item={null} handleUnequip={handleUnequip} />
      <RenderItem
        item={player.equipedItems.head}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.neck}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.weapon}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.armor}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.shield}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.belt}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.boots}
        handleUnequip={handleUnequip}
      />
      <RenderItem
        item={player.equipedItems.ring}
        handleUnequip={handleUnequip}
      />
    </div>
  );
};

export default PlayerInfo;

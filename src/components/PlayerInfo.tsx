import React from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IEquipedItems, itemSlotNamesArray } from "../interfaces/IEquipedItems";
import { IItem, itemSlotEnum } from "../interfaces/IItem";
import { Player } from "../models/Player";

interface IPlayerInfo {
  player: Player;
  setPlayer: any;
}

const PlayerInfo: React.FC<IPlayerInfo> = ({
  player,
  setPlayer,
}: IPlayerInfo) => {
  const handleUnequip = (item: IItem | null) => {
    if (item) {
      const cp = copyPlayer(player);
      cp.unequipItem(item);
      setPlayer(cp);
    }
  };

  interface IRenderItem {
    item: IItem | null;
    handleUnequip: (item: IItem | null) => void;
  }

  const renderItem = ({ item, handleUnequip }: IRenderItem) => {
    if (item)
      return (
        <div>
          <strong>{itemSlotNamesArray[item.slot].toUpperCase()}</strong>
          <br />[{item.name}]<br />
          {item.attack ? `Attack: ${item.attack}` : null} <br />
          {item.deffense ? `Deffense: ${item.deffense}` : null}
          <br />
          {item.healthPoints ? `Hp: ${item.healthPoints}` : null}
          <br />
          <button
            onClick={() => {
              handleUnequip(item);
            }}
          >
            Unequip
          </button>
        </div>
      );
  };

  return (
    <div style={{ border: "2px solid black" }}>
      {renderItem({
        item: player.equipedItems.weapon,
        handleUnequip: handleUnequip,
      })}
      <hr />
      {renderItem({
        item: player.equipedItems.armor,
        handleUnequip: handleUnequip,
      })}
      <hr />
      {renderItem({
        item: player.equipedItems.boots,
        handleUnequip: handleUnequip,
      })}
    </div>
  );
};

export default PlayerInfo;

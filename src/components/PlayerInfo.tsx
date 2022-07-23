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
    if (item) {
      return (
        <div
          style={{
            border: "1px solid black",
            width: "30%",
            borderRadius: "3px",
          }}
        >
          <strong>{itemSlotNamesArray[item.slot].toUpperCase()}</strong>
          <div>[{item.name}]</div>
          <div>{item.attack ? `Attack: ${item.attack}` : null}</div>
          <div>{item.deffense ? `Deffense: ${item.deffense}` : null}</div>
          <div>{item.healthPoints ? `Hp: ${item.healthPoints}` : null}</div>
          <button
            onClick={() => {
              handleUnequip(item);
            }}
          >
            Unequip
          </button>
        </div>
      );
    } else {
      return <div style={{ border: "1px solid black", width: "30%" }}></div>;
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
        flexWrap: "wrap",
        gap: "10px",
        minWidth: "300px",
      }}
    >
      {renderItem({
        item: null,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.head,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.neck,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.weapon,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.armor,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.shield,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.belt,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.boots,
        handleUnequip: handleUnequip,
      })}
      {renderItem({
        item: player.equipedItems.ring,
        handleUnequip: handleUnequip,
      })}
    </div>
  );
};

export default PlayerInfo;

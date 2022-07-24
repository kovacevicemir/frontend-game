import React from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { itemSlotNamesArray } from "../interfaces/IEquipedItems";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";
import MainPanel01 from "../images/MainPanel01.png";
import Button04 from "../images/Button04.png";
import Button01 from "../images/Button01.png";
import { GameButton } from "./styled";

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
            width: "28%",
            minHeight: "140px",
            backgroundImage: `url(${Button04})`,
            backgroundSize: "100% 100%",
            color: "#fff",
            padding: "5px",
          }}
        >
          <strong>{itemSlotNamesArray[item.slot].toUpperCase()}</strong>
          <div>[{item.name}]</div>
          <div>{item.attack ? `Attack: ${item.attack}` : null}</div>
          <div>{item.deffense ? `Deffense: ${item.deffense}` : null}</div>
          <div>{item.healthPoints ? `Hp: ${item.healthPoints}` : null}</div>

          <GameButton
            // @ts-ignore
            image={Button01}
            onClick={() => {
              handleUnequip(item);
            }}
          >
            unequip
          </GameButton>
        </div>
      );
    } else {
      return <div style={{ width: "30%" }}></div>;
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

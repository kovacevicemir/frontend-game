import React, { useState } from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";

interface IInventory {
  player: Player;
  setPlayer: any;
}

const Inventory: React.FC<IInventory> = ({ player, setPlayer }: IInventory) => {
  const [data, setData] = useState<IItem | null>(null);
  const handleEquip = (item: IItem) => {
    const cp = copyPlayer(player);
    cp.equipItem(item);
    setPlayer(cp);
  };
  const handleDelete = (item: IItem) => {
    const cp = copyPlayer(player);
    cp.deleteItemFromInventory(item);
    setPlayer(cp);
  };
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <h5>inventory {player.inventoryItems.length}/21</h5>
      {player.inventoryItems.map((item) => {
        return (
          <div
            onMouseEnter={() => setData(item)}
            onMouseLeave={() => setData(null)}
            style={{
              border: "1px solid black",
              padding: "5px",
              maxWidth: "200px",
            }}
          >
            #{item.id} [{item.name}]
            <div style={{ display: data?.id === item.id ? "" : "none" }}>
              Attack: {item.attack}
              <br />
              Deffense: {item.deffense}
              <br />
              Hp: {item.healthPoints}
              <br />
              <button onClick={() => handleEquip(item)}>equip</button>
              <button onClick={() => handleDelete(item)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Inventory;

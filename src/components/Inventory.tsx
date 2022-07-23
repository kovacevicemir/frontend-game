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
    cp.computePlayerStats();
    setPlayer(cp);
  };

  const handleDeleteAll = () => {
    const cp = copyPlayer(player);
    cp.deleteAllFromInventory();
    cp.computePlayerStats();
    setPlayer(cp);
  };

  const renderInventoryItem = (item: IItem) => {
    return (
      <div
        onMouseEnter={() => setData(item)}
        onMouseLeave={() => setData(null)}
        style={{
          border: "1px solid black",
          padding: "5px",
          maxWidth: "200px",
          maxHeight: "20px",
          fontSize: "12px",
        }}
      >
        [{item.name}]
        <div
          style={{
            display: data?.id === item.id ? "" : "none",
            position: "absolute",
            backgroundColor: "black",
            color: "#fff",
          }}
        >
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
  };

  return (
    <div
      style={{
        border: "2px solid black",
        paddingBottom: "100px",
        paddingLeft: "50px",
        minWidth: "300px",
      }}
    >
      <h5>
        {player.inventoryItems.length === 21 && "Full "}inventory{" "}
        {player.inventoryItems.length}/21
        <button onClick={() => handleDeleteAll()} style={{ marginLeft: "5px" }}>
          delete all
        </button>
      </h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {player.inventoryItems.map((item) => {
          return renderInventoryItem(item);
        })}
      </div>
    </div>
  );
};

export default Inventory;

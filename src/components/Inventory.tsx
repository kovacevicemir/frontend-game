import React, { useState } from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";
import Panel_1 from "../images/Panel_1.png";
import Button04 from "../images/Button04.png";
import { GameButton } from "./styled";
import Button01 from "../images/Button01.png";
import Chest2 from "../images/Chest2.png";

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
          padding: "5px",
          width: "50px",
          height: "50px",
          fontSize: "12px",
          backgroundImage: `url(${Button04})`,
          backgroundSize: "100% 100%",
        }}
      >
        [{item.name}]
        <div
          style={{
            display: data?.id === item.id ? "" : "none",
            position: "absolute",
            color: "#fff",
            backgroundImage: `url(${Button04})`,
            backgroundSize: "100% 100%",
            padding: "12px",
            fontSize: "14px",
          }}
        >
          [{item.name}]<br />
          Attack: {item.attack}
          <br />
          Deffense: {item.deffense}
          <br />
          Hp: {item.healthPoints}
          <br />
          <GameButton
            //@ts-ignore
            image={Button01}
            onClick={() => handleEquip(item)}
          >
            equip
          </GameButton>
          <GameButton
            //@ts-ignore
            image={Button01}
            onClick={() => handleDelete(item)}
          >
            delete
          </GameButton>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        color: "#dfd5c3",
        paddingBottom: "125px",
        padding: "5%",
        minWidth: "300px",
        backgroundImage: `url(${Panel_1})`,
        backgroundSize: "100% 100%",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5px",
          fontSize: "20px",
        }}
      >
        <img src={Chest2} width={50} />
        {player.inventoryItems.length === 21 && "Full "}inventory{" "}
        {player.inventoryItems.length}/21
        <GameButton
          //@ts-ignore
          image={Button01}
          style={{ marginLeft: "5px" }}
          onClick={() => handleDeleteAll()}
        >
          Clear Inventory
        </GameButton>
      </div>
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

import React, { useState } from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";
import {
  GameButton,
  InventoryItemsLayout,
  InventoryMainLayout,
} from "./styled";
import Button01 from "../images/Button01.png";
import Chest2 from "../images/Chest2.png";
import RenderInventoryItem from "./RenderInventoryItem";

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

  return (
    <InventoryMainLayout>
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

      <InventoryItemsLayout>
        {player.inventoryItems.map((item) => {
          return (
            <RenderInventoryItem
              item={item}
              data={data}
              handleEquip={handleEquip}
              handleDelete={handleDelete}
              setData={setData}
            />
          );
        })}
      </InventoryItemsLayout>
    </InventoryMainLayout>
  );
};

export default Inventory;

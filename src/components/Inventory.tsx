import React, { useState } from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { IItem } from "../interfaces/IItem";
import { Player } from "../models/Player";
import {
  CenterAlign,
  GameButton,
  InventoryHeaderContainer,
  InventoryItemsLayout,
  InventoryMainLayout,
} from "./styled";
import Button01 from "../images/Button01.png";
import Chest2 from "../images/Chest2.png";
import RenderInventoryItem from "./RenderInventoryItem";
import { settings } from "../helpers/settings";

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
  const handlePimp = (item: IItem) => {
    const cp = copyPlayer(player);
    cp.pimpItem(item);
    setPlayer(cp);
  };

  const handleDeleteAll = () => {
    const cp = copyPlayer(player);
    cp.deleteAllFromInventory();
    setPlayer(cp);
  };

  const renderInventoryHeader = () => {
    return (
      <InventoryHeaderContainer>
        <img src={Chest2} width={50} alt="chest2" />
        <div style={{ fontSize: "15px" }}>
          {player.inventoryItems.length === settings.inventoryCapacity ? (
            <strong style={{ color: "red" }}>Full inventory</strong>
          ) : (
            <div>
              <strong>inventory </strong>
              {player.inventoryItems.length}/{settings.inventoryCapacity}
            </div>
          )}
        </div>

        <GameButton
          //@ts-ignore
          image={Button01}
          style={{ marginLeft: "5px" }}
          onClick={() => handleDeleteAll()}
        >
          Clear Inventory
        </GameButton>
      </InventoryHeaderContainer>
    );
  };

  return (
    <InventoryMainLayout>
      {renderInventoryHeader()}
      <CenterAlign>
        <InventoryItemsLayout>
          {player.inventoryItems.map((item) => {
            return (
              <RenderInventoryItem
                key={item.id}
                item={item}
                data={data}
                handleEquip={handleEquip}
                handleDelete={handleDelete}
                handlePimp={handlePimp}
                setData={setData}
              />
            );
          })}
        </InventoryItemsLayout>
      </CenterAlign>
    </InventoryMainLayout>
  );
};

export default Inventory;

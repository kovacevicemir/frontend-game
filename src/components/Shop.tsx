import React from "react";
import { Player } from "../models/Player";
import { CenterAlign, ShopButton, ShopItem, ShopLayout } from "./styled";
import Coins from "../images/Coins.png";
import { copyPlayer } from "../helpers/copyPlayer";
import { IShopAssets } from "../interfaces/IShopAssets";

interface IShop {
  player: Player;
  setPlayer: any;
}

const Shop: React.FC<IShop> = ({ player, setPlayer }) => {
  const handleBuyAsset = (shopAssetName: keyof IShopAssets) => {
    const cp = copyPlayer(player);
    cp.addShopAsset(shopAssetName);
    setPlayer(cp);
  };

  return (
    <ShopLayout>
      <ShopItem>
        <CenterAlign style={{ color: "#7d7d7d" }}>
          <img src={Coins} alt="coins" width={30} /> 500 each
        </CenterAlign>
      </ShopItem>
      <ShopItem>
        Attack speed +1
        <div>
          {player.shopAssets.attackSpeed}/3{" "}
          <ShopButton
            onClick={() => {
              handleBuyAsset("attackSpeed");
            }}
          >
            +
          </ShopButton>
        </div>
      </ShopItem>
      <ShopItem>
        Attack{" +7"}
        <div>
          {player.shopAssets.attack}/3{" "}
          <ShopButton
            onClick={() => {
              handleBuyAsset("attack");
            }}
          >
            +
          </ShopButton>
        </div>
      </ShopItem>
      <ShopItem>
        Deffense{" +4"}
        <div>
          {player.shopAssets.deffense}/3{" "}
          <ShopButton
            onClick={() => {
              handleBuyAsset("deffense");
            }}
          >
            +
          </ShopButton>
        </div>
      </ShopItem>
      <ShopItem>
        Health {" +20"}
        <div>
          {player.shopAssets.healthPoints}/3{" "}
          <ShopButton
            onClick={() => {
              handleBuyAsset("healthPoints");
            }}
          >
            +
          </ShopButton>
        </div>
      </ShopItem>
    </ShopLayout>
  );
};

export default Shop;

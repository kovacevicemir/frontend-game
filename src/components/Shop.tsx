import React from "react";
import { Player } from "../models/Player";
import { CenterAlign, ShopButton, ShopItem, ShopLayout } from "./styled";
import Coins from "../images/Coins.png";
import { copyPlayer } from "../helpers/copyPlayer";
import { IShopAssets } from "../interfaces/IShopAssets";
import {
  getShopAttributeMultiplier,
  getShopPrice,
} from "../helpers/shopAssetsHelper";
import { settings } from "../helpers/settings";

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
          <img src={Coins} alt="coins" width={30} /> {getShopPrice()} each
        </CenterAlign>
      </ShopItem>
      <ShopItem>
        Attack speed +1
        <div>
          {player?.shopAssets?.attackSpeed}/{settings.maxShopAssets}
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
        Attack +{getShopAttributeMultiplier("attack")}
        <div>
          {player?.shopAssets?.attack}/{settings.maxShopAssets}
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
        Deffense +{getShopAttributeMultiplier("deffense")}
        <div>
          {player?.shopAssets?.deffense}/{settings.maxShopAssets}
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
        Health +{getShopAttributeMultiplier("healthPoints")}
        <div>
          {player?.shopAssets?.healthPoints}/{settings.maxShopAssets}
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

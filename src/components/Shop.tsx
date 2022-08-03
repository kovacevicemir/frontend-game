import React from "react";
import { Player } from "../models/Player";
import { CenterAlign, ShopButton, ShopItem, ShopLayout } from "./styled";
import Coins from "../images/Coins.png";
import { copyPlayer } from "../helpers/copyPlayer";
import { IShopAssets } from "../interfaces/IShopAssets";
import { getShopAttributeMultiplier } from "../helpers/shopAssetsHelper";
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

  const renderShopItem = (shopAssetName: keyof IShopAssets, title: string) => {
    return (
      <ShopItem>
        {shopAssetName === "attackSpeed"
          ? "Attack speed +1 "
          : `${title} +${getShopAttributeMultiplier(shopAssetName)}`}

        <div>
          {player?.shopAssets?.[shopAssetName]}/{settings.maxShopAssets}
          <ShopButton
            onClick={() => {
              handleBuyAsset(shopAssetName);
            }}
          >
            +
          </ShopButton>
        </div>
      </ShopItem>
    );
  };

  return (
    <ShopLayout>
      <ShopItem>
        <CenterAlign style={{ color: "#7d7d7d" }}>
          <img src={Coins} alt="cc" width={30} /> {settings.shopAssetPrice} each
        </CenterAlign>
      </ShopItem>
      {renderShopItem("attackSpeed", "Attack speed")}
      {renderShopItem("attack", "Attack")}
      {renderShopItem("deffense", "Deffense")}
      {renderShopItem("healthPoints", "Health Points")}
    </ShopLayout>
  );
};

export default Shop;

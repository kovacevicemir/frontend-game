import React from "react";
import { Player } from "../models/Player";
import { CenterAlign, ShopButton, ShopItem, ShopLayout } from "./styled";
import Coins from "../images/Coins.png";
import { copyPlayer } from "../helpers/copyPlayer";
import { IShopAssets } from "../interfaces/IShopAssets";
import { getShopAttributeMultiplier } from "../helpers/shopAssetsHelper";
import { settings } from "../helpers/settings";
import { iconPicker } from "../helpers/iconPicker";

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
        {shopAssetName === "attackSpeed" ? (
          " +1 Speed"
        ) : (
          <CenterAlign>
            +{getShopAttributeMultiplier(shopAssetName)} {title}
          </CenterAlign>
        )}

        <CenterAlign>
          {shopAssetName !== "attackSpeed" && (
            <img
              style={{ marginLeft: "2px", marginRight: "3px" }}
              src={iconPicker(shopAssetName)}
              alt="attackIcon"
            />
          )}
          {player?.shopAssets?.[shopAssetName]}/{settings.maxShopAssets}
          <ShopButton
            onClick={() => {
              handleBuyAsset(shopAssetName);
            }}
          >
            +
          </ShopButton>
        </CenterAlign>
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

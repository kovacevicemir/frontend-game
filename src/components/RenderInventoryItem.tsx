import { IItem } from "../interfaces/IItem";
import {
  CenterAlign,
  GameButton,
  InventoryItem,
  InventoryItemHover,
} from "./styled";
import Button01 from "../images/Button01.png";
import Coins from "../images/Coins.png";
import { settings } from "../helpers/settings";
import RenderUpgradeImages from "./RenderUpgradeImages";

interface IRenderInventoryItem {
  item: IItem;
  data: IItem | null;
  setData: (item: IItem | null) => void;
  handleEquip: (item: IItem) => void;
  handleDelete: (item: IItem) => void;
  handlePimp: (item: IItem) => void;
}

const RenderInventoryItem: React.FC<IRenderInventoryItem> = ({
  item,
  data,
  setData,
  handleEquip,
  handleDelete,
  handlePimp,
}) => {
  const renderItemStats = (item: IItem) => {
    return (
      <div style={{ marginBottom: "5px" }}>
        <div>[{item.name}]</div>
        <div>Attack {item.attack}</div>
        <div>Deffense {item.deffense}</div>
        <div>Hp {item.healthPoints}</div>
        {item.upgrade && <RenderUpgradeImages item={item} />}
      </div>
    );
  };

  if (item === undefined || item === null) {
    return <></>;
  }

  return (
    <InventoryItem
      key={item.id}
      onMouseEnter={() => setData(item)}
      onMouseLeave={() => setData(null)}
      onClick={() => setData(item)}
    >
      <img
        alt="inventoryImage"
        src={item.image}
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
      <InventoryItemHover
        //@ts-ignore
        display={data?.id === item.id ? true : false}
        key={item.id + "@hover"}
        id="onInventoryItemHover"
      >
        {renderItemStats(item)}

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
        <br />
        <GameButton
          //@ts-ignore
          image={Button01}
          onClick={() => handlePimp(item)}
          style={{ marginTop: "10px", marginBottom: "5px" }}
        >
          <CenterAlign>
            pimp +{settings.itemPimpCost}
            <img src={Coins} alt="coins" width={20} />
          </CenterAlign>
        </GameButton>
      </InventoryItemHover>
    </InventoryItem>
  );
};

export default RenderInventoryItem;

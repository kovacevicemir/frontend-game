import { IItem } from "../interfaces/IItem";
import { GameButton } from "./styled";
import Button04 from "../images/Button04.png";
import Button01 from "../images/Button01.png";

interface IRenderInventoryItem {
  item: IItem;
  data: IItem | null;
  setData: (item: IItem | null) => void;
  handleEquip: (item: IItem) => void;
  handleDelete: (item: IItem) => void;
}

const RenderInventoryItem: React.FC<IRenderInventoryItem> = ({
  item,
  data,
  setData,
  handleEquip,
  handleDelete,
}) => {
  if (item === undefined || item === null) {
    return <></>;
  }
  return (
    <div
      key={item.id}
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
        key={item.id + "@hover"}
        id="onInventoryItemHover"
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
        <div>[{item.name}]</div>
        <div>Attack {item.attack}</div>
        <div>Deffense {item.deffense}</div>
        <div>Hp {item.healthPoints}</div>

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

export default RenderInventoryItem;

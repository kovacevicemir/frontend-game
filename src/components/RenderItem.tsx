import { itemSlotNamesArray } from "../interfaces/IEquipedItems";
import { IItem } from "../interfaces/IItem";
import { GameButton } from "./styled";
import Button04 from "../images/Button04.png";
import Button01 from "../images/Button01.png";

interface IRenderItem {
  item: IItem | null;
  handleUnequip: (item: IItem | null) => void;
}

const RenderItem = ({ item, handleUnequip }: IRenderItem) => {
  if (item) {
    return (
      <div
        style={{
          width: "28%",
          minHeight: "140px",
          backgroundImage: `url(${Button04})`,
          backgroundSize: "100% 100%",
          color: "#fff",
          padding: "5px",
        }}
      >
        <strong>{itemSlotNamesArray[item.slot].toUpperCase()}</strong>
        <div>[{item.name}]</div>
        <div>{item.attack ? `Attack: ${item.attack}` : null}</div>
        <div>{item.deffense ? `Deffense: ${item.deffense}` : null}</div>
        <div>{item.healthPoints ? `Hp: ${item.healthPoints}` : null}</div>

        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => {
            handleUnequip(item);
          }}
        >
          unequip
        </GameButton>
      </div>
    );
  } else {
    return <div style={{ width: "30%" }}></div>;
  }
};

export default RenderItem;

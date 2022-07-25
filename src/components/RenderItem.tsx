import { IItem, itemSlotEnum } from "../interfaces/IItem";
import { GameButton, ItemStatsStyle } from "./styled";
import Button01 from "../images/Button01.png";
import { imagePlaceholder } from "../helpers/imagePlaceholder";

interface IRenderItem {
  item: IItem | null;
  slot: itemSlotEnum | null;
  handleUnequip: (item: IItem | null) => void;
}

const RenderItem = ({ item, slot, handleUnequip }: IRenderItem) => {
  return (
    <div
      style={{
        width: "28%",
        backgroundImage: `url(${imagePlaceholder(slot)})`,
        backgroundSize: "100% 100%",
        color: "#fff",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        minHeight: "130px",
      }}
    >
      {item && (
        <ItemStatsStyle>
          <div style={{ color: "#ddc08c" }}>[{item.name}]</div>
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
        </ItemStatsStyle>
      )}
    </div>
  );
};

export default RenderItem;

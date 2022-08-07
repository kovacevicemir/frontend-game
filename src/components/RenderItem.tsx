import { IItem, itemSlotEnum } from "../interfaces/IItem";
import { ItemImage, ItemStatsStyle } from "./styled";
import { imagePlaceholder } from "../helpers/imagePlaceholder";
import RenderUpgradeImages from "./RenderUpgradeImages";

interface IRenderItem {
  item: IItem | null;
  slot: itemSlotEnum | null;
  handleUnequip: (item: IItem | null) => void;
}

const RenderItem = ({ item, slot, handleUnequip }: IRenderItem) => {
  return (
    <div
      style={{
        width: "29%",
        backgroundColor: "black",
        fontFamily: "monospace",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        margin: "2px",
      }}
    >
      {item === null && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: `url(${imagePlaceholder(slot)})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {item && (
        <ItemStatsStyle
          onClick={() => {
            handleUnequip(item);
          }}
        >
          <div style={{ color: "#ddc08c" }}>[{item.name}]</div>
          <ItemImage src={item.image} alt="itemImage" />
          <div>
            <RenderUpgradeImages item={item} />
            <div>{item.attack ? `Attack ${item.attack}` : null}</div>
            <div>{item.deffense ? `Deffense ${item.deffense}` : null}</div>
            <div>{item.healthPoints ? `Hp ${item.healthPoints}` : null}</div>
          </div>
        </ItemStatsStyle>
      )}
    </div>
  );
};

export default RenderItem;

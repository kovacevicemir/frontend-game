import { IItem, itemSlotEnum } from "../interfaces/IItem";
import {
  ItemImage,
  ItemContainer,
  ItemStatsStyle,
  ItemPlaceholder,
} from "./styled";
import RenderUpgradeImages from "./RenderUpgradeImages";

interface IRenderItem {
  item: IItem | null;
  slot: itemSlotEnum | null;
  handleUnequip: (item: IItem | null) => void;
}

const RenderItem = ({ item, slot, handleUnequip }: IRenderItem) => {
  return (
    <ItemContainer>
      {item === null && (
        <ItemPlaceholder
          //@ts-ignore
          slot={slot}
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
    </ItemContainer>
  );
};

export default RenderItem;

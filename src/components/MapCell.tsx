import React from "react";
import { Cell } from "../helpers/mapHelper";
import { CellStyle } from "./styled";

interface IMapCell {
  cell: Cell;
}

const MapCell: React.FC<IMapCell> = ({ cell }) => {
  //@ts-ignore
  return <CellStyle cell={cell} />;
};

export default MapCell;

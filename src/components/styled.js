import styled from "styled-components";
import world1 from "../images/world1.gif";
import world2 from "../images/world2.gif";
import world3 from "../images/world3.png";
import Aic18 from "../images/Aic18.jpg";
import FuturisticBg from "../images/FuturisticBg.png";
import Button04 from "../images/Button04.png";
import { imagePlaceholder } from "../helpers/imagePlaceholder";

export const NotificationLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const NotificationPanel = styled.div`
  color: #fff;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const HorizontalScrollbar = styled.div`
  box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 3px;
  display: inline-block;
  white-space: nowrap;
  overflow: auto;
  width: 350px;
  margin: 0px 20px;
  border-radius: 5px;
  &::-webkit-scrollbar {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 20px;
    background-color: rgba(0, 128, 0, 0.75); /* Change the background color to greenish */

  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5); /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    &::-webkit-scrollbar {
      background-color: rgba(0, 0, 0, 0.75);
      height: 4px;
      direction: ltr;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #7c1e1e; /* color of the scroll thumb */
      height: 2px;
      border-radius: 5px; /* roundness of the scroll thumb */
    }
  }
  @media (max-width: 390px) {
    max-width: 320px;
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainLayout = styled.div`
  height: auto;
  background-color: black;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.1fr;
  grid-template-columns: 2fr 1fr;
  text-align: center;
  @media (max-width: 1400px) {
    grid-template-rows: 1fr 0.2fr;
    grid-template-columns: 1fr;
    padding: 10px;
  }
  @media (max-width: 400px) {
    grid-template-rows: 1fr 0.2fr;
    grid-template-columns: 1fr;
    max-width: 370px;
    overflow: hidden;
    padding: 5px;
  }
  @media (max-width: 380px) {
    grid-template-rows: 1fr 0.2fr;
    grid-template-columns: 1fr;
    max-width: 370px;
    overflow: hidden;
    padding: 5px;
  }
  @media (max-width: 370px) {
    grid-template-rows: 1fr 0.2fr;
    grid-template-columns: 1fr;
    max-width: 355px;
    overflow: hidden;
    padding: 5px;
  }
`;

export const GameButton = styled.button`
  opacity: ${({ opacity }) => opacity};
  padding: 5px;
  margin-right: 5px;
  font-size: 15px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: "cover";
  color: #fdfbf5;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : null};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const ItemImage = styled.img`
  width: 33%;
  min-width: 100px;
  min-height: 70px;
  max-height: 100px;
  border-radius: 5px;
  margin: 2px;
  @media (max-width: 850px) {
    min-width: 80px;
    max-height: 70px;
  }
`;

export const MainInfoBarStyle = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #dfd5c3;
  background-image: url(${FuturisticBg});
  background-size: 100% 100%;
  box-shadow: inset 0px 0px 40px 40px rgba(0, 0, 0, 1);
  background-color: black;
  min-height: 150px;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 6px;
    padding: 40px 20px;
    font-size: 15px;
    box-shadow: inset 0px 0px 15px 15px rgba(0, 0, 0, 1);
    align-items: flex-start;
    padding-left: 25%;
  }
`;

const getWorldBackgroundImage = (k) => {
  switch (k) {
    case 1:
      return world1;
    case 2:
      return world2;
    case 3:
      return world3;

    default:
      return world1;
  }
};

export const WorldMainStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  background-image: ${(props) =>
    `url(${getWorldBackgroundImage(props.worldImageIndex)})`};
  background-size: 100% 100%;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  min-height: 600px;
  background-color: black;
  color: #fdfbf5;
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    padding-bottom: 25px;
    min-height: 100px;
  }
`;

export const WorldMiddleLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5;
  justify-content: center;
  align-items: center;
`;

export const MobAttackButton = styled.button`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: none;
  background-image: url(${Aic18});
  background-size: 100% 100%;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    height: 15px;
    width: 15px;
  }
`;

export const InventoryItem = styled.div`
  padding: 3px;
  width: 50px;
  height: 50px;
  font-size: 12px;
  background-image: url(${Button04});
  background-size: 100% 100%;
  cursor: pointer;
`;

export const InventoryItemHover = styled.div`
  display: ${(props) => props.display === false && "none"};
  position: absolute;
  color: #fff;
  background-image: url(${Button04});
  background-size: 100% 100%;
  padding: 12px;
  font-size: 14px;
`;

export const ShopLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 100px;
  padding-left: 33%;
  font-size: 18px;
  background-color: #0f0f1f;
  box-shadow: inset 0px 0px 60px 60px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    padding-left: 20%;
    font-size: 17px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

export const ShopItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  color: #fff;
  @media (max-width: 850px) {
    margin-bottom: 5px;
  }
`;

export const ShopButton = styled.button`
  margin-left: 5px;
  width: 25px;
  height: 25px;
  background-color: green;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const MonsterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
`;

export const InventoryMainLayout = styled.div`
  color: #dfd5c3;
  min-height: 300px;
  padding: 50px 160px;
  background-image: url(${FuturisticBg});
  background-size: 100% 100%;
  background-color: black;
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    min-height: auto;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 60px;
  }
`;

export const InventoryItemsLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 500px;
  @media (max-width: 850px) {
    gap: 10px;
  }
`;

export const DisplayBattleLayout = styled.div`
  display: flex;
  border-radius: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10;
  opacity: 0.95;
  background-color: #242424;
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 0.3);
  width: 50%;
  max-width: 500px;
  min-height: 170px;
  margin-top: 10px;
  @media (max-width: 850px) {
    width: 90%;
    background-color: black;
    opacity: 0.93;
  }
`;

export const BattleBox = styled.div`
  padding-top: 5px;
  border: 1px solid #373131;
  border-radius: 5px;
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ccc")};
  @media (max-width: 850px) {
    width: 125px;
  }
`;

export const BattleOutcome = styled.div`
  position: relative;
  top: -55px;
`;

export const BattleOutcomeInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  font-size: 15px;
`;

export const PlayerInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  border-radius: 5px;
  padding: 5% 3%;
  background-color: rgba(15, 15, 30, 1);
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    gap: 2px;
    padding: 6% 0%;
    padding-right: 17px;
    padding-top: 50px;
  }
`;

export const ItemStatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  opacity: 0.98;
  border: 2px solid #1c1a17;
  border-radius: 5px;
  background-size: 100% 100%;
  min-width: 170px;
  width: 100%;
  color: #fff;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    opacity: 0.98;
    font-size: 13px;
    min-width: 110px;
  }
`;

export const GoldDisplayStyle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  @media (max-width: 850px) {
    padding-left: 0px;
  }
`;

const getCellBackgroundColor = (cell) => {
  if (cell?.monsters?.length > 0 && cell.isPlayer) {
    return "orange";
  }

  if (cell?.monsters?.length > 0) {
    // return "red";
  }

  if (cell.isPlayer) {
    // return "blue";
  }

  return "gray"

  switch (cell.variant) {
    case 0:
      return "gray";
    case 1:
      return "black";
    case 2:
      return "orange";

    default:
      return "yellow";
  }
};

const getCellBackgroundImage = (cell) => {
  if (cell?.monsters?.length > 0 && cell.isPlayer) {
    return `url("https://static.vecteezy.com/system/resources/thumbnails/022/946/250/small/cute-monster-character-colored-red-with-angry-expression-3d-illustration-generative-ai-free-png.png")`;
  }

  if (cell?.monsters?.length > 0) {
    return `url("https://static.vecteezy.com/system/resources/thumbnails/022/946/250/small/cute-monster-character-colored-red-with-angry-expression-3d-illustration-generative-ai-free-png.png")`;
  }
  
  if (cell.isPlayer) {
    return `url("https://i.pinimg.com/originals/63/91/03/639103eff63de2e26c5e1ecd0365712f.png")`;
  }

  switch (cell.variant) {
    case 0:
      // Terain
      return `url("data:image/jpeg;base64,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")`;
    case 1:
      // Wall
      return `url("https://i.pinimg.com/736x/77/0f/94/770f949ff6c8f7d95ceb20e493f813a0.jpg")`;
    case 2:
      return "orange";

    default:
      return "yellow";
  }
};

export const CellStyle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ cell }) => getCellBackgroundColor(cell)};
  background-image: ${({ cell }) => getCellBackgroundImage(cell)};
  background-size: cover; /* Set the background size to cover the entire area */
  @media (max-width: 540px) {
    /* For screens with a maximum width of 768px (adjust as needed for your mobile breakpoint) */
    width: 27px;
    height: 27px;
  }
`;

export const MonsterImage = styled.img`
  margin-right: 5px;
  border-radius: 5px;
  width: 40px;
`;

export const RenderMobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1;
  min-height: 220px;
`;

export const ItemContainer = styled.div`
  width: 29%;
  background-color: black;
  font-family: monospace;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 2px;
`;

export const ItemPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background-image: ${(props) => `url(${imagePlaceholder(props.slot)})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const InventoryHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const VScontainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;

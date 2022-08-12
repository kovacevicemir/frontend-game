import styled from "styled-components";
import world1 from "../images/world1.gif";
import world2 from "../images/world2.gif";
import world3 from "../images/world3.png";
import Aic18 from "../images/Aic18.jpg";
import FuturisticBg from "../images/FuturisticBg.png";
import Button04 from "../images/Button04.png";

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

export const MainFrame = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    padding: 10px;
  }
`;

export const MainLayout = styled.div`
  height: auto;
  background-color: black;
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.1fr;
  grid-template-columns: 2fr 1fr;
  text-align: center;
  @media (max-width: 850px) {
    grid-template-rows: 1fr 0.2fr;
    grid-template-columns: 1fr;
    height: auto;
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
  width: 100%;
  min-height: 650px;
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
  min-height: 400px;
`;

export const MobAttackButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  background-image: url(${Aic18});
  background-size: 100% 100%;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    height: 35px;
    width: 35px;
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
  font-size: 18px;
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
  min-height: 200px;
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

export const PlayerInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 650px;
  border-radius: 5px;
  padding: 5% 3%;
  background-color: rgba(15, 15, 30, 1);
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    gap: 7px;
    padding: 6% 2%;
    margin-top: 50px;
  }
`;

export const ItemStatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  opacity: 0.98;
  border: 2px solid #ddc08c;
  border-radius: 5px;
  background-size: 100% 100%;
  min-width: 170px;
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

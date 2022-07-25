import styled from "styled-components";
import Panel_1 from "../images/Panel_1.png";
import world1 from "../images/world1.gif";
import Aic18 from "../images/Aic18.jpg";
import Window03 from "../images/Window03.png";
import MainPanel01 from "../images/MainPanel01.png";

export const MainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 2fr 1fr;
  text-align: center;
  @media (max-width: 850px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const GameButton = styled.button`
  opacity: ${({ opacity }) => opacity};
  padding: 5px;
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

export const MainInfoBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #dfd5c3;
  /* background-image: url(${Panel_1}); */
  background-image: url("https://img.freepik.com/premium-vector/abstract-futuristic-background-technology-sci-fi-frame-hud-ui_313905-455.jpg");
  background-size: 100% 100%;
  background-color: black;
  @media (max-width: 850px) {
    gap: 7px;
    padding: 20px 10px;
    font-size: 14px;
  }
`;

export const WorldMainStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  background-image: url(${world1});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-color: black;
  color: #fdfbf5;
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    padding-bottom: 25px;
  }
`;

export const WorldMiddleLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5;
  justify-content: center;
  align-items: center;
  min-height: 250px;
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
  background-image: url("https://img.freepik.com/premium-vector/abstract-futuristic-background-technology-sci-fi-frame-hud-ui_313905-455.jpg");
  background-size: 100% 100%;
  background-color: black;
  box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 1);
  @media (max-width: 850px) {
    min-height: auto;
    padding: 50px 50px;
  }
`;

export const InventoryItemsLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DisplayBattleLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10;
  background-image: url(${Window03});
  background-size: 100% 100%;
  width: 50%;
  min-height: 200px;
  @media (max-width: 850px) {
    width: 90%;
  }
`;

export const BattleBox = styled.div`
  border-radius: 5px;
  width: 100px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ccc")}; ;
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
  gap: 10px;
  min-width: 300px;
  background-image: url(${MainPanel01});
  background-size: 100% 100%;
  background-color: black;
  padding: 5%;
  @media (max-width: 850px) {
    gap: 7px;
    padding: 6% 3%;
  }
`;

export const ItemStatsStyle = styled.div`
  background-color: black;
  opacity: 0.95;
  border: 2px solid #ddc08c;
  border-radius: 5px;
  background-size: 100% 100%;
  color: #fff;
  padding: 7px 10px;
  @media (max-width: 850px) {
    opacity: 0.9;
    font-size: 13px;
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

import React from "react";
import Coins from "../images/Coins.png";
import { Player } from "../models/Player";
import { CenterAlign, GoldDisplayStyle, MainInfoBarStyle } from "./styled";
import AttackIcon16px from "../images/AttackIcon16px.png";
import Shield16px from "../images/Shield16px.png";
import Health16px from "../images/Health16px.png";
import { Line } from "rc-progress";

interface IMainInfoBar {
  player: Player;
}

const MainInfoBar: React.FC<IMainInfoBar> = ({ player }) => {
  const {
    nickname,
    level,
    totalAttack,
    totalDeffense,
    totalHealthPoints,
    experience,
    experienceNeeded,
    gold,
  } = player;

  return (
    <MainInfoBarStyle>
      <CenterAlign>
        <strong style={{ color: "#fff" }}>{nickname}</strong>
      </CenterAlign>
      <CenterAlign>Level [{level}]</CenterAlign>

      <CenterAlign>
        <img
          src={AttackIcon16px}
          alt="attackIcon"
          style={{ marginRight: "4px" }}
        />
        {totalAttack}
      </CenterAlign>
      <CenterAlign>
        <img src={Shield16px} alt="deffkIcon" style={{ marginRight: "2px" }} />
        {totalDeffense}
      </CenterAlign>
      <CenterAlign>
        <img src={Health16px} alt="hpIcon" style={{ marginRight: "2px" }} />
        {totalHealthPoints}
      </CenterAlign>
      <CenterAlign>
        <img
          src={Coins}
          alt="goldIcon"
          width={16}
          style={{ marginRight: "2px" }}
        />
        {gold}
      </CenterAlign>
      <CenterAlign style={{ flexDirection: "column" }}>
        Experience {experience}/{experienceNeeded} <br />
        <Line
          percent={(experience / experienceNeeded) * 100}
          strokeWidth={2}
          strokeColor="yellow"
        />
      </CenterAlign>
    </MainInfoBarStyle>
  );
};

export default MainInfoBar;

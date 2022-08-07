import React from "react";
import Coins from "../images/Coins.png";
import { Player } from "../models/Player";
import { CenterAlign, GoldDisplayStyle, MainInfoBarStyle } from "./styled";
import AttackIcon16px from "../images/AttackIcon16px.png";
import Shield16px from "../images/Shield16px.png";
import Health16px from "../images/Health16px.png";

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
        Attack [{totalAttack}]<img src={AttackIcon16px} alt="attackIcon" />
      </CenterAlign>
      <CenterAlign>
        Deffense [{totalDeffense}]<img src={Shield16px} alt="deffkIcon" />
      </CenterAlign>
      <CenterAlign>
        Hp [{totalHealthPoints}]<img src={Health16px} alt="hpIcon" />
      </CenterAlign>
      <CenterAlign>
        Experience [{experience}/{experienceNeeded}]
      </CenterAlign>
      <CenterAlign>
        Gold [{gold}]<img src={Coins} alt="goldIcon" width={25} />
      </CenterAlign>
    </MainInfoBarStyle>
  );
};

export default MainInfoBar;

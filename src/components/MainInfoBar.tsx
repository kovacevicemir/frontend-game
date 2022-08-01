import React from "react";
import bag from "../images/bag.png";
import { Player } from "../models/Player";
import { GoldDisplayStyle, MainInfoBarStyle } from "./styled";

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
      <div>
        {nickname} [{level}]
      </div>
      <div>Attack [{totalAttack}]</div>
      <div>Deffense [{totalDeffense}]</div>
      <div>Hp [{totalHealthPoints}]</div>
      <div>
        Experience [{experience}/{experienceNeeded}]
      </div>
      <GoldDisplayStyle>
        <img src={bag} alt="gold" width={40} />
        {gold}
      </GoldDisplayStyle>
    </MainInfoBarStyle>
  );
};

export default MainInfoBar;

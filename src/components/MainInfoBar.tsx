import React from "react";
import bag from "../images/bag.png";
import { GoldDisplayStyle, MainInfoBarStyle } from "./styled";

interface IMainInfoBar {
  nickname: string;
  level: number;
  totalAttack: number;
  totalDeffense: number;
  totalHealthPoints: number;
  experience: number;
  experienceNeeded: number;
  gold: number;
}

const MainInfoBar: React.FC<IMainInfoBar> = (props: IMainInfoBar) => {
  return (
    <MainInfoBarStyle>
      <div>
        {props.nickname} [{props.level}]
      </div>
      <div>Attack [{props.totalAttack}]</div>
      <div>Deffense [{props.totalDeffense}]</div>
      <div>Hp [{props.totalHealthPoints}]</div>
      <div>
        Experience [{props.experience} / {props.experienceNeeded}]
      </div>
      <GoldDisplayStyle>
        <img src={bag} alt="gold" width={40} />
        {props.gold}
      </GoldDisplayStyle>
    </MainInfoBarStyle>
  );
};

export default MainInfoBar;

import React from "react";
import bag from "../images/bag.png";
import Panel_1 from "../images/Panel_1.png";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontSize: "20px",
        color: "#dfd5c3",
        backgroundImage: `url(${Panel_1})`,
        backgroundSize: "100% 100%",
        backgroundColor: "black",
      }}
    >
      <div>
        {props.nickname} [{props.level}]
      </div>
      <div>Attack: {props.totalAttack}</div>
      <div>Deffense: {props.totalDeffense}</div>
      <div>Hp: {props.totalHealthPoints}</div>
      <div>
        experience: {props.experience} / {props.experienceNeeded}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "25px" }}
      >
        <img src={bag} alt="gold" width={45} />
        {props.gold}
      </div>
    </div>
  );
};

export default MainInfoBar;

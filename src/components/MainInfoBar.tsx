import React from "react";

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
        border: "2px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontSize: "20px",
      }}
    >
      <div>
        {props.nickname}[{props.level}]
      </div>
      <div>Attack: {props.totalAttack}</div>
      <div>Deffense: {props.totalDeffense}</div>
      <div>Hp: {props.totalHealthPoints}</div>
      <div>
        experience: {props.experience} / {props.experienceNeeded}
      </div>
      <div>${props.gold}</div>
    </div>
  );
};

export default MainInfoBar;

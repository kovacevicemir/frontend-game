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
    <div style={{ border: "2px solid black" }}>
      {props.nickname} [{props.level}]
      <br />
      Attack: {props.totalAttack} <br />
      Deffense: {props.totalDeffense} <br />
      Hp: {props.totalHealthPoints} <br />
      experience: {props.experience} / {props.experienceNeeded}
      <br />${props.gold} <br />
    </div>
  );
};

export default MainInfoBar;

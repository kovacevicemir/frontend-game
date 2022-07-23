import React from "react";
import { IDisplayBattle } from "../interfaces/IDisplayBattle";

const DisplayBattle: React.FC<IDisplayBattle> = ({
  nickname,
  playerAttacks,
  monsterAttacks,
  fightLogIndex,
  win,
}) => {
  if (win === false) {
    return <div>You lost, this monster might be too strong for you!</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "orange",
          backgroundColor: "#060505",
        }}
      >
        <div>{nickname}</div>
        <div>{playerAttacks[fightLogIndex]}</div>
      </div>
      <div
        style={{
          width: "30px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        VS
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#060505",
        }}
      >
        <div>Monster</div>
        <div>{monsterAttacks[fightLogIndex]}</div>
      </div>
    </div>
  );
};

export default DisplayBattle;

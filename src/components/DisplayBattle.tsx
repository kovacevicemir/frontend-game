import React from "react";
import { IDisplayBattle } from "../interfaces/IDisplayBattle";
import { BattleBox, BattleOutcome, DisplayBattleLayout } from "./styled";
import Coins from "../images/Coins.png";
import { Line } from "rc-progress";
import { hpLeft } from "../helpers/hpLeft";

const DisplayBattle: React.FC<IDisplayBattle> = ({
  battleData,
  nickname,
  fightLogIndex,
}) => {
  const { playerAttacks, monsterAttacks, gold, experience, monster, player } =
    battleData;

  return (
    <>
      <DisplayBattleLayout>
        <BattleBox
          color="orange"
          // @ts-ignore
          bgColor="rgb(80 80 80)"
        >
          <div>{nickname}</div>
          <div>{playerAttacks[fightLogIndex]}</div>

          <Line
            percent={hpLeft({
              maxHealth: player.totalHealthPoints,
              fightLogIndex: fightLogIndex,
              attacks: monsterAttacks,
            })}
            strokeWidth={4}
            strokeColor="#D3D3D3"
          />
        </BattleBox>
        <div
          style={{
            width: "60px",
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

        <BattleBox
          color="#31041e"
          // @ts-ignore
          bgColor="rgb(80 80 80)"
        >
          <div>Monster</div>
          <div>{monsterAttacks[fightLogIndex]}</div>

          <Line
            percent={hpLeft({
              maxHealth: monster.healthPoints,
              fightLogIndex: fightLogIndex,
              attacks: playerAttacks,
            })}
            strokeWidth={4}
            strokeColor="#D3D3D3"
          />
        </BattleBox>
      </DisplayBattleLayout>
      <BattleOutcome>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {gold}
          <img src={Coins} alt="gold" width={30} />
          {experience} EXP
        </div>
      </BattleOutcome>
    </>
  );
};

export default DisplayBattle;

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
  const {
    playerAttacks,
    monsterAttacks,
    gold,
    experience,
    monster,
    player,
    drops,
  } = battleData;

  return (
    <>
      <DisplayBattleLayout>
        <BattleBox
          color="orange"
          // @ts-ignore
          bgColor="rgb(80 80 80)"
        >
          <div>{nickname}</div>
          <div style={{ color: "#FFF4FC" }}>
            -{monsterAttacks[fightLogIndex]}
          </div>

          <Line
            percent={hpLeft({
              maxHealth: player.totalHealthPoints,
              fightLogIndex: fightLogIndex,
              attacks: monsterAttacks,
            })}
            strokeWidth={4}
            strokeColor="#0c920c"
          />
        </BattleBox>

        <div
          style={{
            width: "40px",
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
          color="#FFF4FC"
          // @ts-ignore
          bgColor="rgb(80 80 80)"
        >
          <div>Monster</div>
          <div style={{ color: "orange" }}>{playerAttacks[fightLogIndex]} </div>
          <Line
            percent={hpLeft({
              maxHealth: monster.healthPoints,
              fightLogIndex: fightLogIndex,
              attacks: playerAttacks,
            })}
            strokeWidth={4}
            strokeColor="#0c920c"
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
          {experience === 0 ? (
            <p style={{ color: "red", fontSize: "17px", fontWeight: "bolder" }}>
              You lost the battle!
            </p>
          ) : (
            <>
              {gold}
              <img src={Coins} alt="gold" width={30} />
              {experience} EXP
              {drops.length > 0 && ` [${drops[0].name}]`}
            </>
          )}
        </div>
      </BattleOutcome>
    </>
  );
};

export default DisplayBattle;

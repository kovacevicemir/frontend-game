import React from "react";
import { IDisplayBattle } from "../interfaces/IDisplayBattle";
import {
  BattleBox,
  BattleOutcome,
  BattleOutcomeInner,
  DisplayBattleLayout,
  VScontainer,
} from "./styled";
import Coins from "../images/Coins.png";
import { Line } from "rc-progress";
import { hpLeft } from "../helpers/hpLeft";
import { settings } from "../helpers/settings";

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
          color="#7498a6"
          // @ts-ignore
          bgColor="rgba(72,41,42,0.25)"
        >
          <div style={{ fontSize: "12px" }}>{nickname}</div>
          <div style={{ color: "#ff0202" }}>
            -{monsterAttacks[fightLogIndex]}
          </div>

          <Line
            percent={hpLeft({
              maxHealth: player.totalHealthPoints,
              fightLogIndex: fightLogIndex,
              attacks: monsterAttacks,
            })}
            strokeWidth={6}
            strokeColor="#0a5f0a"
          />
        </BattleBox>

        <VScontainer>VS</VScontainer>

        <BattleBox
          color="#7498a6"
          // @ts-ignore
          bgColor="rgba(72,41,42,0.25)"
        >
          <div style={{ fontSize: "12px" }}>{monster.name}</div>
          <div style={{ color: "orange" }}>{playerAttacks[fightLogIndex]} </div>
          <Line
            percent={hpLeft({
              maxHealth: monster.healthPoints,
              fightLogIndex: fightLogIndex,
              attacks: playerAttacks,
            })}
            strokeWidth={6}
            strokeColor="#0a5f0a"
          />
        </BattleBox>
      </DisplayBattleLayout>

      <BattleOutcome>
        <BattleOutcomeInner>
          {experience === 0 ? (
            <p style={{ color: "red", fontSize: "15px", fontWeight: "bolder" }}>
              You lost the battle!
            </p>
          ) : (
            <>
              {gold}
              <img src={Coins} alt="gold" width={30} />
              {experience} EXP
              {drops.length > 0 &&
                player.inventoryItems.length < settings.inventoryCapacity && (
                  <strong
                    style={{ color: "orange", marginLeft: "5px" }}
                  >{` [${drops[0].name}]`}</strong>
                )}
              {player.inventoryItems.length === settings.inventoryCapacity && (
                <strong style={{ marginLeft: "5px", color: "red" }}>
                  Full inventory
                </strong>
              )}
            </>
          )}
        </BattleOutcomeInner>
      </BattleOutcome>
    </>
  );
};

export default DisplayBattle;

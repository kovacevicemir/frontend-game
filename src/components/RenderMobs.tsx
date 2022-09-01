import React from "react";
import { Monster } from "../models/Monster";
import { MobAttackButton, MonsterContainer } from "./styled";

interface IRenderMobs {
  monsters: Monster[];
  handleMobAttack: (monster: Monster) => void;
}
const RenderMobs: React.FC<IRenderMobs> = ({ monsters, handleMobAttack }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        minHeight: "220px",
      }}
    >
      {monsters.map((mob: Monster, index: number) => {
        return (
          <MonsterContainer key={index}>
            <div>
              {mob.name} [{mob.level}]
            </div>
            <MobAttackButton
              onClick={() => {
                handleMobAttack(mob);
              }}
            />
          </MonsterContainer>
        );
      })}
    </div>
  );
};

export default RenderMobs;

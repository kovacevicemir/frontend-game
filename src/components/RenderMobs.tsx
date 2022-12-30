import React from "react";
import { Monster } from "../models/Monster";
import {
  CenterAlign,
  MobAttackButton,
  MonsterContainer,
  MonsterImage,
  RenderMobsContainer,
} from "./styled";

interface IRenderMobs {
  monsters: Monster[];
  handleMobAttack: (monster: Monster) => void;
}
const RenderMobs: React.FC<IRenderMobs> = ({ monsters, handleMobAttack }) => {
  return (
    <RenderMobsContainer>
      {monsters.map((mob: Monster, index: number) => {
        return (
          <MonsterContainer key={index}>
            <CenterAlign>
              {mob.image && <MonsterImage src={mob.image} alt="alt" />}
              {mob.name} [{mob.level}]
            </CenterAlign>
            <MobAttackButton
              onClick={() => {
                handleMobAttack(mob);
              }}
            />
          </MonsterContainer>
        );
      })}
    </RenderMobsContainer>
  );
};

export default RenderMobs;

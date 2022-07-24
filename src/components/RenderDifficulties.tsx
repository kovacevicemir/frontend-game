import React from "react";
import { monstersDictionary } from "../data/mockMonsterList";
import { GameButton } from "./styled";
import Button01 from "../images/Button01.png";

interface IRenderDifficulties {
  difficulty: number;
  setDifficulty: (difficulty: number) => void;
}

const RenderDifficulties: React.FC<IRenderDifficulties> = ({
  difficulty,
  setDifficulty,
}) => {
  return (
    <div>
      {Object.entries(monstersDictionary).map(([key, value]) => {
        const dif = parseInt(key);
        return (
          <GameButton
            // @ts-ignore
            image={Button01}
            opacity={`${difficulty === dif ? 0.6 : 1}`}
            onClick={() => setDifficulty(dif)}
            letterSpacing={"1px"}
          >
            Difficulty {dif}
          </GameButton>
        );
      })}
    </div>
  );
};

export default RenderDifficulties;

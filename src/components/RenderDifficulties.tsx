import React from "react";
import { monstersDictionary } from "../data/mockMonsterList";
import { GameButton, HorizontalScrollbar } from "./styled";
import Button01 from "../images/Button01.png";

interface IRenderDifficulties {
  difficulty: number;
  setDifficulty: (difficulty: number) => void;
  setBattleData: (value: null) => void;
  disabled: boolean;
}

const RenderDifficulties: React.FC<IRenderDifficulties> = ({
  difficulty,
  setDifficulty,
  setBattleData,
  disabled,
}) => {
  return (
    <div>
      <HorizontalScrollbar>
        {Object.entries(monstersDictionary).map(([key, value]) => {
          const dif = parseInt(key);
          return (
            <GameButton
              key={key}
              // @ts-ignore
              image={Button01}
              opacity={`${difficulty === dif ? 0.6 : 1}`}
              onClick={() => {
                if (disabled === false) {
                  setDifficulty(dif);
                  setBattleData(null);
                }
              }}
              letterSpacing={"1px"}
            >
              Sector {dif}
            </GameButton>
          );
        })}
      </HorizontalScrollbar>
    </div>
  );
};

export default RenderDifficulties;

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
              image={difficulty === dif ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeO0xApU_69EQeYXzKR9ONbVlsTGVJR0adQ&usqp=CAU" : Button01}
              opacity={`${difficulty === dif ? 0.9 : 1}`}
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

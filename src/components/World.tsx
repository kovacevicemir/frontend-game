import React, { useEffect, useState } from "react";
import _ from "lodash";
import { copyPlayer } from "../helpers/copyPlayer";
import { Monster } from "../models/Monster";
import { Player } from "../models/Player";
import { IBattleResults } from "../interfaces/IBattleResults";
import DisplayBattle from "./DisplayBattle";
import { generateMobsArray } from "../helpers/generateMobsArray";
import RenderMobs from "./RenderMobs";
import RenderDifficulties from "./RenderDifficulties";
import Button01 from "../images/Button01.png";
import { WorldMiddleLayout, GameButton, WorldMainStyle } from "./styled";

interface IWorld {
  player: Player;
  setPlayer: any;
}

const World = ({ player, setPlayer }: IWorld) => {
  const [difficulty, setDifficulty] = useState<number>(1);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [battleData, setBattleData] = useState<IBattleResults | null>(null);
  const [fightLogIndex, setFightLogIndex] = useState(0);

  const handleMobAttack = (mob: Monster) => {
    //dont switch order!! bug prone
    const cp = copyPlayer(player);
    cp.computePlayerStats();

    mob.attackMe(cp);

    const cm = _.cloneDeep(monsters);
    cm.pop();

    setFightLogIndex(0);
    setPlayer(cp);
    setMonsters(cm);
    if (mob.battleResults) {
      setBattleData(mob.battleResults);
    }
  };

  const handleSearchMonsters = () => {
    setMonsters(generateMobsArray(difficulty));
  };

  useEffect(() => {
    if (battleData) {
      let interval = setInterval(() => {
        setFightLogIndex((prev) => prev + 1);
      }, 750);

      return () => {
        clearInterval(interval);
      };
    }
  }, [battleData]);

  useEffect(() => {
    setMonsters(generateMobsArray(difficulty));
  }, [difficulty]);

  return (
    <WorldMainStyle>
      <RenderDifficulties
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <WorldMiddleLayout>
        {!battleData?.playerAttacks[fightLogIndex] && (
          <RenderMobs monsters={monsters} handleMobAttack={handleMobAttack} />
        )}
        {battleData?.playerAttacks[fightLogIndex] !== undefined && (
          <DisplayBattle
            battleData={battleData}
            nickname={player.nickname}
            fightLogIndex={fightLogIndex}
          />
        )}
      </WorldMiddleLayout>

      <div>
        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => handleSearchMonsters()}
          letterSpacing={"2px"}
        >
          Explore
        </GameButton>
      </div>
    </WorldMainStyle>
  );
};

export default World;

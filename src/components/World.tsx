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
import world1 from "../images/world1.gif";
import Button01 from "../images/Button01.png";
import { GameButton } from "./styled";

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
    const cp = copyPlayer(player);
    mob.attackMe(cp);

    const cm = _.cloneDeep(monsters);
    cm.pop();

    if (mob.battleResults?.win) {
      cp.computePlayerStats();
    }

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
      }, 700);

      return () => {
        clearInterval(interval);
      };
    }
  }, [battleData]);

  useEffect(() => {
    setMonsters(generateMobsArray(difficulty));
  }, [difficulty]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${world1})`,
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "#fdfbf5",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "5" }}>
        {
          <RenderDifficulties
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        }
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5",
          justifyContent: "center",
          marginTop: "2%",
          minHeight: "200px",
        }}
      >
        {!battleData?.playerAttacks[fightLogIndex] && (
          <RenderMobs monsters={monsters} handleMobAttack={handleMobAttack} />
        )}
        {battleData?.playerAttacks[fightLogIndex] !== undefined && (
          <DisplayBattle
            nickname={player.nickname}
            monsterAttacks={battleData.monsterAttacks}
            playerAttacks={battleData.playerAttacks}
            fightLogIndex={fightLogIndex}
            win={battleData.win}
          />
        )}
      </div>

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
    </div>
  );
};

export default World;

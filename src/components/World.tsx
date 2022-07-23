import React, { useEffect, useState } from "react";
import { monstersDictionary } from "../data/mockMonsterList";
import _ from "lodash";
import { copyPlayer } from "../helpers/copyPlayer";
import { Monster } from "../models/Monster";
import { Player } from "../models/Player";
import { IBattleResults } from "../interfaces/IBattleResults";
import DisplayBattle from "./DisplayBattle";
import { generateMobsArray } from "../helpers/generateMobsArray";

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

  const renderDifficulties = () => {
    return Object.entries(monstersDictionary).map(([key, value]) => {
      const dif = parseInt(key);
      return (
        <button
          style={{
            height: "35px",
            fontSize: "14px",
            backgroundColor: `${difficulty === dif ? "white" : ""}`,
          }}
          onClick={() => setDifficulty(dif)}
        >
          Difficulty {dif}
        </button>
      );
    });
  };

  const renderMobs = () => {
    return monsters.map((mob) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div>
            {mob.name} [{mob.level}]
          </div>
          <button
            style={{
              height: "20px",
              backgroundColor: "red",
              color: "whitesmoke",
            }}
            onClick={() => {
              handleMobAttack(mob);
            }}
          >
            X
          </button>
        </div>
      );
    });
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
    <div>
      <h1>World</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {renderDifficulties()}
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
        {!battleData?.playerAttacks[fightLogIndex] && renderMobs()}
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
        <button onClick={() => handleSearchMonsters()}>
          search for monsters
        </button>
      </div>
    </div>
  );
};

export default World;

import React from "react";
import { mockMonstersList } from "../data/mockMonsterList";
import { copyPlayer } from "../helpers/copyPlayer";
import { IMonster } from "../interfaces/IMonster";
import { Player } from "../models/Player";

interface IWorld {
  player: Player;
  setPlayer: any;
}

const World = ({ player, setPlayer }: IWorld) => {
  const handleMobAttack = (mob: IMonster) => {
    const cp = copyPlayer(player);
    mob.attackMe(cp);
    cp.computePlayerStats();
    setPlayer(cp);
  };
  return (
    <div>
      <h1>World</h1>
      {mockMonstersList.map((mob) => {
        return (
          <div>
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
            {mob.name} [{mob.level}]
          </div>
        );
      })}
    </div>
  );
};

export default World;

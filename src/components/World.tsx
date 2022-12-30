import { useCallback, useEffect, useState } from "react";
import { copyPlayer } from "../helpers/copyPlayer";
import { Monster } from "../models/Monster";
import { Player } from "../models/Player";
import { IBattleResults } from "../interfaces/IBattleResults";
import DisplayBattle from "./DisplayBattle";
import RenderMobs from "./RenderMobs";
import RenderDifficulties from "./RenderDifficulties";
import Button01 from "../images/Button01.png";
import {
  WorldMiddleLayout,
  GameButton,
  WorldMainStyle,
  CenterAlign,
} from "./styled";
import { getShopAttributeMultiplier } from "../helpers/shopAssetsHelper";
import { settings } from "../helpers/settings";
import { worldImageDefinitions } from "../helpers/worldImageDefinitions";
import MapCell from "./MapCell";
import { Cell, generateWorldMap } from "../helpers/mapHelper";

interface IWorld {
  player: Player;
  setPlayer: (player: Player) => void;
}

const World = ({ player, setPlayer }: IWorld) => {
  const [difficulty, setDifficulty] = useState<number>(1);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [battleData, setBattleData] = useState<IBattleResults | null>(null);
  const [fightLogIndex, setFightLogIndex] = useState(0);
  const [worldImageIndex, setWorldImageIndex] = useState(1);
  const [attackAll, setAttackAll] = useState(false);
  const [cord, setCord] = useState<number[]>([5, 0]);
  const [worldMap, setWorldMap] = useState<Cell[][]>(
    generateWorldMap(difficulty)
  );

  const handleMobAttack = (mob: Monster) => {
    const cp = copyPlayer(player);
    mob.attackMe(cp);
    setPlayer(cp);

    mob.battleResults !== undefined && setBattleData(mob.battleResults);

    if (mob.battleResults?.win === false) {
      setMonsters([]);
    } else {
      monsters.pop();
      setMonsters(monsters);
    }

    setFightLogIndex(0);
  };

  const handleFirstMobAttack = () => {
    monsters.length > 0 && handleMobAttack(monsters[0]);
  };

  const handleAttackAll = () => {
    if (battleData === null) {
      handleFirstMobAttack();
    }
    setAttackAll(true);
  };

  const handleSearchMonsters = (difficulty: number) => {
    setTimeout(() => {
      const cp = copyPlayer(player);
      cp.decreaseGold(settings.exploreCost);
      setPlayer(cp);
      setBattleData(null);
      setWorldMap(generateWorldMap(difficulty));
      setCord([5, 0]);
    }, 500);
  };

  const handleSetDifficulty = (difficulty: number) => {
    handleSearchMonsters(difficulty);
    setDifficulty(difficulty);
  };

  useEffect(() => {
    if (battleData) {
      if (
        attackAll &&
        monsters.length > 0 &&
        battleData?.monsterAttacks.length < fightLogIndex
      ) {
        handleFirstMobAttack();
      }
    }

    if (monsters.length === 0) {
      setAttackAll(false);
    }
  }, [attackAll, monsters, battleData, fightLogIndex]);

  useEffect(() => {
    if (battleData) {
      const timing =
        settings.timing -
        player.shopAssets.attackSpeed *
          getShopAttributeMultiplier("attackSpeed");

      let interval = setInterval(() => {
        setFightLogIndex((prev) => prev + 1);
      }, timing);

      return () => {
        clearInterval(interval);
      };
    }
  }, [battleData, player]);

  useEffect(() => {
    const i = worldImageDefinitions.get(difficulty);
    i !== undefined && setWorldImageIndex(i);
  }, [difficulty]);

  const moveUp = () => {
    if (cord[0] - 1 >= 0 && worldMap[cord[0] - 1][cord[1]].variant !== 1) {
      let newWorldMap = [...worldMap];
      newWorldMap[cord[0]][cord[1]].isPlayer = false;
      newWorldMap[cord[0] - 1][cord[1]].isPlayer = true;

      if (typeof newWorldMap[cord[0] - 1][cord[1]].monsters !== "undefined") {
        //@ts-ignore
        setMonsters(newWorldMap[cord[0] - 1][cord[1]].monsters);
      } else {
        setMonsters([]);
      }

      setCord([cord[0] - 1, cord[1]]);
      setWorldMap(newWorldMap);
    }
  };

  const moveDown = () => {
    if (cord[0] + 1 < 11 && worldMap[cord[0] + 1][cord[1]].variant !== 1) {
      let newWorldMap = [...worldMap];
      newWorldMap[cord[0]][cord[1]].isPlayer = false;
      newWorldMap[cord[0] + 1][cord[1]].isPlayer = true;

      if (typeof newWorldMap[cord[0] + 1][cord[1]].monsters !== "undefined") {
        //@ts-ignore
        setMonsters(newWorldMap[cord[0] + 1][cord[1]].monsters);
      } else {
        setMonsters([]);
      }

      setCord([cord[0] + 1, cord[1]]);
      setWorldMap(newWorldMap);
    }
  };

  const moveRight = () => {
    if (cord[1] + 1 < 10 && worldMap[cord[0]][cord[1] + 1].variant !== 1) {
      let newWorldMap = [...worldMap];
      newWorldMap[cord[0]][cord[1]].isPlayer = false;
      newWorldMap[cord[0]][cord[1] + 1].isPlayer = true;

      if (typeof newWorldMap[cord[0]][cord[1] + 1].monsters !== "undefined") {
        //@ts-ignore
        setMonsters(newWorldMap[cord[0]][cord[1] + 1].monsters);
      } else {
        setMonsters([]);
      }
      setCord([cord[0], cord[1] + 1]);
      setWorldMap(newWorldMap);
    }
  };

  const moveLeft = () => {
    if (cord[1] - 1 < 10 && worldMap[cord[0]][cord[1] - 1].variant !== 1) {
      let newWorldMap = [...worldMap];
      newWorldMap[cord[0]][cord[1]].isPlayer = false;
      newWorldMap[cord[0]][cord[1] - 1].isPlayer = true;

      if (typeof newWorldMap[cord[0]][cord[1] - 1].monsters !== "undefined") {
        //@ts-ignore
        setMonsters(newWorldMap[cord[0]][cord[1] - 1].monsters);
      } else {
        setMonsters([]);
      }

      setCord([cord[0], cord[1] - 1]);
      setWorldMap(newWorldMap);
    }
  };

  const keyFunction = useCallback(
    (event: any) => {
      if (event.keyCode === 87) {
        moveUp();
      }
      if (event.keyCode === 65) {
        moveLeft();
      }
      if (event.keyCode === 83) {
        moveDown();
      }
      if (event.keyCode === 68) {
        moveRight();
      }
      if (event.keyCode === 81) {
        handleAttackAll();
      }
      if (event.keyCode === 69) {
        handleSearchMonsters(difficulty);
      }
    },
    [cord, monsters, handleAttackAll, handleSearchMonsters]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyFunction);
    return () => {
      document.removeEventListener("keydown", keyFunction);
    };
  }, [keyFunction]);

  return (
    <WorldMainStyle
      //@ts-ignore
      worldImageIndex={worldImageIndex}
    >
      <RenderDifficulties
        difficulty={difficulty}
        setDifficulty={handleSetDifficulty}
        setBattleData={setBattleData}
        disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
      />

      <WorldMiddleLayout>
        {worldMap.map((rows) => {
          return (
            <CenterAlign>
              {rows.map((col) => {
                return <MapCell cell={col} />;
              })}
            </CenterAlign>
          );
        })}

        {!battleData?.playerAttacks[fightLogIndex] &&
          battleData?.win !== false && (
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

      {/* JOYSTICK */}
      <div>
        <div>
          <GameButton // @ts-ignore
            image={Button01}
            onClick={() => moveUp()}
            style={{ minWidth: "50px", minHeight: "35px" }}
          >
            W
          </GameButton>
          <br />
          <GameButton // @ts-ignore
            image={Button01}
            style={{ minWidth: "50px", minHeight: "35px" }}
            onClick={() => moveLeft()}
          >
            A
          </GameButton>

          <GameButton // @ts-ignore
            image={Button01}
            onClick={() => moveDown()}
            style={{ minWidth: "50px", minHeight: "35px" }}
          >
            S
          </GameButton>
          <GameButton // @ts-ignore
            image={Button01}
            onClick={() => moveRight()}
            style={{ minWidth: "50px", minHeight: "35px" }}
          >
            D
          </GameButton>
        </div>

        <br />
        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => handleSearchMonsters(difficulty)}
          letterSpacing={"2px"}
          disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
          style={{ padding: "7px" }}
        >
          Explore(E)
        </GameButton>
        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => handleAttackAll()}
          letterSpacing={"3px"}
          disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
          style={{
            padding: "7px",
            color:
              battleData?.playerAttacks[fightLogIndex] !== undefined
                ? "orange"
                : "#fff",
          }}
        >
          Attack(Q)
        </GameButton>
      </div>
    </WorldMainStyle>
  );
};

export default World;

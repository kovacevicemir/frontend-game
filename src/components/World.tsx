import { useEffect, useState } from "react";
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
import { getShopAttributeMultiplier } from "../helpers/shopAssetsHelper";
import { settings } from "../helpers/settings";
import { worldImageDefinitions } from "../helpers/worldImageDefinitions";

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

  const handleSearchMonsters = () => {
    const cp = copyPlayer(player);
    cp.decreaseGold(settings.exploreCost);
    setPlayer(cp);
    setBattleData(null);
    setMonsters(generateMobsArray(difficulty));
  };

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
    setMonsters(generateMobsArray(difficulty));
    const i = worldImageDefinitions.get(difficulty);
    i !== undefined && setWorldImageIndex(i);
  }, [difficulty]);

  return (
    <WorldMainStyle
      //@ts-ignore
      worldImageIndex={worldImageIndex}
    >
      <RenderDifficulties
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setBattleData={setBattleData}
        disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
      />

      <WorldMiddleLayout>
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

      <div>
        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => handleSearchMonsters()}
          letterSpacing={"2px"}
          disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
          style={{ padding: "7px" }}
        >
          Explore
        </GameButton>
        <GameButton
          // @ts-ignore
          image={Button01}
          onClick={() => handleFirstMobAttack()}
          letterSpacing={"4px"}
          disabled={battleData?.playerAttacks[fightLogIndex] !== undefined}
          style={{
            padding: "7px",
            color:
              battleData?.playerAttacks[fightLogIndex] !== undefined
                ? "orange"
                : "#fff",
          }}
        >
          Attack
        </GameButton>
      </div>
    </WorldMainStyle>
  );
};

export default World;

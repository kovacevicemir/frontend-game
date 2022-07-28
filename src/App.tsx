import React, { useEffect, useState } from "react";
import { Player } from "./models/Player";
import { getPlayerFromDb } from "./data/getPlayerFromDb";
import { updatePlayerDb } from "./data/updatePlayerDb";
import MainInfoBar from "./components/MainInfoBar";
import World from "./components/World";
import Inventory from "./components/Inventory";
import PlayerInfo from "./components/PlayerInfo";
import { clearAll } from "./data/localStorage";
import { MainLayout } from "./components/styled";
import Shop from "./components/Shop";

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  //Setup
  useEffect(() => {
    // clearAll();
    const playerObj = getPlayerFromDb();
    setPlayer(playerObj);
  }, []);

  useEffect(() => {
    if (player) {
      updatePlayerDb(player);
      setPlayer(player);
    }
  }, [
    player,
    player?.inventoryItems,
    player?.equipedItems,
    player?.experience,
    player?.gold,
    player?.shopAssets,
  ]);

  if (player == null) {
    return <>Player is null</>;
  }

  return (
    <MainLayout>
      <MainInfoBar
        nickname={player.nickname}
        level={player.level}
        totalAttack={player.totalAttack}
        totalDeffense={player.totalDeffense}
        totalHealthPoints={player.totalHealthPoints}
        experience={player.experience}
        experienceNeeded={player.experienceNeeded}
        gold={player.gold}
      />
      <div style={{ background: "black" }}>11111</div>
      <World player={player} setPlayer={setPlayer} />
      <PlayerInfo player={player} setPlayer={setPlayer} />
      <Inventory player={player} setPlayer={setPlayer} />
      <Shop player={player} setPlayer={setPlayer} />
    </MainLayout>
  );
};

export default App;

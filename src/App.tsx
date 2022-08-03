import { useEffect, useRef, useState } from "react";
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
import LevelUpNotification from "./components/LevelUpNotification";
import RenderKillStats from "./components/RenderKillStats";
import AboutGameInfo from "./components/AboutGameInfo";

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  //Setup
  useEffect(() => {
    // clearAll();
    const playerObj = getPlayerFromDb();
    setPlayer(playerObj);
    playerRef.current = playerObj;
  }, []);

  //Listen for level up
  useEffect(() => {
    if (player && playerRef.current?.level !== player?.level) {
      setShowNotification(true);
    }
  }, [playerRef, player?.level, player]);

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
    player?.level,
  ]);

  if (player == null || playerRef.current == null) {
    return <>Loading...</>;
  }

  return (
    <MainLayout>
      <MainInfoBar player={player} />
      <RenderKillStats player={player} />
      {showNotification && (
        <LevelUpNotification
          player={player}
          playerRef={playerRef}
          setShowNotification={setShowNotification}
        />
      )}
      <World player={player} setPlayer={setPlayer} />
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PlayerInfo player={player} setPlayer={setPlayer} />
      </div>
      <Inventory player={player} setPlayer={setPlayer} />
      <Shop player={player} setPlayer={setPlayer} />
      <AboutGameInfo />
      <div style={{ backgroundColor: "black" }}></div>
    </MainLayout>
  );
};

export default App;

import { useEffect, useRef, useState } from "react";
import { Player } from "./models/Player";
import MainInfoBar from "./components/MainInfoBar";
import World from "./components/World";
import Inventory from "./components/Inventory";
import PlayerInfo from "./components/PlayerInfo";
import { MainFrame, MainLayout } from "./components/styled";
import Shop from "./components/Shop";
import LevelUpNotification from "./components/LevelUpNotification";
import RenderKillStats from "./components/RenderKillStats";
import AboutGameInfo from "./components/AboutGameInfo";
import SignUpLogin from "./components/SignUpLogin";
import { update } from "./data/Api";
import { random } from "./helpers/mathHelpers";
import { settings } from "./helpers/settings";

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //Listen for level up
  useEffect(() => {
    if (player && playerRef.current?.level !== player?.level) {
      setShowNotification(true);
    }
  }, [playerRef, player?.level, player]);

  useEffect(() => {
    const updatePlayer = async (player: Player) => {
      try {
        await update(player);
        error !== "" && setError("");
      } catch (error) {
        setError(settings.offlineErrorMessage);
      }
    };
    if (player) {
      //TODO - not update player all the time
      if (random(1, 2) === 1) {
        updatePlayer(player);
      }
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
    error,
  ]);

  if (player == null || playerRef.current == null) {
    return <SignUpLogin setPlayer={setPlayer} playerRef={playerRef} />;
  } else {
    return (
      <MainFrame>
        <MainLayout>
          <MainInfoBar player={player} />
          <RenderKillStats player={player} />
          <div>
            <World player={player} setPlayer={setPlayer} />
            {error !== "" && <h2 style={{ color: "red" }}>{error}</h2>}
          </div>
          <PlayerInfo player={player} setPlayer={setPlayer} />
          <Inventory player={player} setPlayer={setPlayer} />
          <Shop player={player} setPlayer={setPlayer} />
          <AboutGameInfo />

          <div style={{ backgroundColor: "black" }}></div>
          {showNotification && (
            <LevelUpNotification
              player={player}
              playerRef={playerRef}
              setShowNotification={setShowNotification}
            />
          )}
        </MainLayout>
      </MainFrame>
    );
  }
};

export default App;

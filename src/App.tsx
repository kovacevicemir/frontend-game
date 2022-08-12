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

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  //Listen for level up
  useEffect(() => {
    if (player && playerRef.current?.level !== player?.level) {
      setShowNotification(true);
    }
  }, [playerRef, player?.level, player]);

  useEffect(() => {
    if (player) {
      //TODO - not update player all the time
      if (random(1, 4) === 1) {
        update(player);
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
  ]);

  if (player == null || playerRef.current == null) {
    return <SignUpLogin setPlayer={setPlayer} playerRef={playerRef} />;
  } else {
    return (
      <MainFrame>
        <MainLayout>
          <MainInfoBar player={player} />
          <RenderKillStats player={player} />
          <World player={player} setPlayer={setPlayer} />
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

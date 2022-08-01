import React from "react";
import { Player } from "../models/Player";
import { GameButton, NotificationLayout, NotificationPanel } from "./styled";
import Button01 from "../images/Button01.png";
import { levelStatsDefinitions } from "../helpers/levelDefinitions";

interface ILevelUpNotification {
  player: Player;
  playerRef: React.MutableRefObject<Player | null>;
  setShowNotification: (value: boolean) => void;
}
const LevelUpNotification: React.FC<ILevelUpNotification> = ({
  player,
  playerRef,
  setShowNotification,
}) => {
  const bonus = levelStatsDefinitions.get(player.level);

  if (playerRef.current === null || bonus === undefined) {
    return <></>;
  }

  return (
    <NotificationLayout>
      <NotificationPanel>
        <strong>Congratualations!</strong>
        <div>Level {player.level} | total bonus</div>
        <div>Attack +{bonus * (player.level < 15 ? 1 : 1.5)}</div>
        <div>Deffense +{player.level < 15 ? 1 : 10}</div>
        <div>
          Health Points +{Math.round(bonus * (player.level < 15 ? 2 : 4))}
        </div>
        <GameButton
          //@ts-ignore
          image={Button01}
          onClick={() => {
            playerRef.current = player;
            setShowNotification(false);
          }}
          letterSpacing={"3px"}
        >
          Level Up!
        </GameButton>
      </NotificationPanel>
    </NotificationLayout>
  );
};

export default LevelUpNotification;

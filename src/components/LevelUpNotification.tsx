import React from "react";
import { Player } from "../models/Player";
import { GameButton, NotificationLayout, NotificationPanel } from "./styled";
import Button01 from "../images/Button01.png";

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
  if (playerRef.current === null) {
    return <></>;
  }
  return (
    <NotificationLayout>
      <NotificationPanel>
        <strong>Congratualations!</strong>
        <div>Level {player.level}</div>
        <div>Attack +{player.totalAttack - playerRef.current?.totalAttack}</div>
        <div>
          Deffense +{player.totalDeffense - playerRef.current?.totalDeffense}
        </div>
        <div>
          Health Points +
          {player.totalHealthPoints - playerRef.current?.totalHealthPoints}
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

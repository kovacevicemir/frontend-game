import React from "react";
import { Player } from "../models/Player";

interface IRenderKillStats {
  player: Player;
}

const RenderKillStats: React.FC<IRenderKillStats> = ({ player }) => {
  return (
    <div
      style={{
        background: "black",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <div style={{ fontFamily: "monospace" }}>
        Monsters killed {player?.playerStatistics?.monsterKilled}
      </div>
    </div>
  );
};

export default RenderKillStats;

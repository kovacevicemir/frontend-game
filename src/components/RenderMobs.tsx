import React from "react";
import { Monster } from "../models/Monster";
import Aic18 from "../images/Aic18.jpg";

interface IRenderMobs {
  monsters: Monster[];
  handleMobAttack: (monster: Monster) => void;
}
const RenderMobs: React.FC<IRenderMobs> = ({ monsters, handleMobAttack }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      {monsters.map((mob: Monster) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              fontSize: "18px",
            }}
          >
            <div>
              {mob.name} [{mob.level}]
            </div>
            <button
              style={{
                height: "25px",
                width: "25px",
                borderRadius: "50%",
                border: "none",
                backgroundImage: `url(${Aic18})`,
                backgroundSize: "100% 100%",
              }}
              onClick={() => {
                handleMobAttack(mob);
              }}
            ></button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderMobs;

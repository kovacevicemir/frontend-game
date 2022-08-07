import { random } from "lodash";
import React from "react";
import { monstersDictionary } from "../data/mockMonsterList";
import {
  levelDefinitions,
  levelStatsDefinitions,
} from "../helpers/levelDefinitions";
import { Monster } from "../models/Monster";
import { ShopLayout } from "./styled";

const renderLevelDefs = () => {
  return Array.from(levelDefinitions).map(([key, value]) => {
    if (key !== 31)
      return (
        <li key={key}>
          Level {key} - {value} Exp
        </li>
      );
  });
};

const renderLevelBonuses = () => {
  return Array.from(levelStatsDefinitions).map(([key, value]) => {
    if (key !== 31)
      return (
        <li key={key}>
          Level {key} - ATT: {Math.round(value * (key < 15 ? 1 : 1.5))} DEF:{" "}
          {key < 15 ? 1 : 10} HP: {Math.round(value * (key < 15 ? 2 : 4))}
        </li>
      );
  });
};

const renderDropsPerSector = () => {
  return Object.entries(monstersDictionary).map(([key, value]) => {
    const monster = value as Monster;
    return (
      <div
        key={key + random(1, 300)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "10px",
        }}
      >
        Sector {key}
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {monster.droppableItems.map((i, index) => (
            <li key={i.name}>{i.name}</li>
          ))}
        </ol>
      </div>
    );
  });
};

const renderHowToPlay = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h5>How to play</h5>
      <li>Attack monsters</li>
      <li>Explore cost 1 gold </li>
      <li>Equip items</li>
      <li>Level up</li>
      <li>Move to next sector</li>
      <li>Buy items from shop </li>
    </div>
  );
};

const renderCommingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h5>Comming soon</h5>
      <li>More content</li>
      <li>Top 100 players</li>
      <li>Attack other player</li>
      <li>Player kills stats</li>
      <li>Pimp item</li>
      <li>UI improvement</li>
      <li>Block % items/battle</li>
      <li>Critical hit % items/battle</li>
      <li>Mana system</li>
    </div>
  );
};

const AboutGameInfo = () => {
  return (
    <div
      style={{
        paddingLeft: "10%",
        paddingBottom: "10%",
        color: "#f3f1f1",
        fontSize: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: "#0f0f1f",
        boxShadow: "inset 0px 0px 60px 60px rgba(0, 0, 0, 1)",
      }}
    >
      <h3>Game info v2.0</h3>
      {renderHowToPlay()}
      <h5>Experience needed per level</h5>
      {renderLevelDefs()}
      <h5>Level Bonuses</h5>
      {renderLevelBonuses()}
      <h5>Drops</h5>
      {renderDropsPerSector()}
      {renderCommingSoon()}
    </div>
  );
};

export default AboutGameInfo;

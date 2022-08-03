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
        <strong>Sector {key}</strong>
        <ol>
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
      <li>Account login</li>
      <li>Top 100 players</li>
      <li>Attack other player</li>
      <li>Player kills stats</li>
      <li>Pimp item</li>
      <li>Item images</li>
      <li>UI improvement</li>
      <li>Block %</li>
      <li>Critical hit %</li>
      <li>Mana system</li>
    </div>
  );
};

const AboutGameInfo = () => {
  return (
    <ShopLayout style={{ color: "#f3f1f1" }}>
      <h3>Game info v2.0</h3>
      {renderHowToPlay()}
      <h5>Experience needed per level</h5>
      {renderLevelDefs()}
      <h5>Level Bonuses</h5>
      {renderLevelBonuses()}
      <h5>Drops</h5>
      {renderDropsPerSector()}
      {renderCommingSoon()}
    </ShopLayout>
  );
};

export default AboutGameInfo;

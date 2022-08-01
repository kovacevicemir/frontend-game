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
        <li>
          Level {key} - {value} Exp
        </li>
      );
  });
};

const renderLevelBonuses = () => {
  return Array.from(levelStatsDefinitions).map(([key, value]) => {
    if (key !== 31)
      return (
        <li>
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
      <div style={{ marginBottom: "10px" }}>
        <strong>Sector {key}</strong>
        <ol>
          {monster.droppableItems.map((i) => (
            <li>{i.name}</li>
          ))}
        </ol>
      </div>
    );
  });
};

const AboutGameInfo = () => {
  return (
    <ShopLayout style={{ color: "#fff" }}>
      <h3>Game info</h3>

      <h5>How to play</h5>
      <li>Attack monsters</li>
      <li>press (A) to attack </li>
      <li>press (E) to explore</li>

      <li>Explore cost 1 gold </li>

      <li>Equip items</li>
      <li>Level up</li>
      <li>Move to next sector</li>
      <li>Buy items from shop </li>

      <h5>Experience needed per level</h5>
      {renderLevelDefs()}
      <h5>Level Bonuses</h5>
      {renderLevelBonuses()}
      <h5>Drops</h5>
      {renderDropsPerSector()}
      <h5>Comming soon</h5>
      <li>More balance</li>
      <li>More content</li>
      <li>Account login</li>
      <li>top 100 players</li>
      <li>attack other player</li>
      <li>player kills stats</li>
      <li>items pimp</li>
      <li>item images</li>
      <li>UI improvement</li>
      <li>Block %</li>
      <li>Critical hit %</li>
      <li>
        Mana system
        <br /> limited attacks per day
      </li>
    </ShopLayout>
  );
};

export default AboutGameInfo;

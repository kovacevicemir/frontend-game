import { Monster } from "../models/Monster";
import { generateMobsArray } from "./generateMobsArray";
import { random } from "./mathHelpers";
import { settings } from "./settings";

export type Cell = {
  variant: number;
  isPlayer: boolean;
  monsters?: Monster[];
};

interface IInsertIntoMapProps {
  start: number;
  length: number;
  data: Cell;
  offset: number;
}

export const generateWorldMap = (difficulty: number) => {
  let worldMap = [
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
    [
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
      {
        variant: 0,
        isPlayer: false,
      },
    ],
  ];

  const insertHorizontalX = ({
    start,
    length,
    data,
    offset,
  }: IInsertIntoMapProps) => {
    for (let i = 0 + offset; i < length + offset; i++) {
      worldMap[start][i] = data;
    }
  };

  const insertVerticalY = ({
    start,
    length,
    data,
    offset,
  }: IInsertIntoMapProps) => {
    for (let i = 0 + offset; i < length + offset; i++) {
      worldMap[i][start] = data;
    }
  };

  //do stuff
  insertHorizontalX({
    start: random(1, 5),
    length: random(2, 5),
    data: {
      variant: 1,
      isPlayer: false,
    },
    offset: random(1, 3),
  });

  insertHorizontalX({
    start: random(5, 10),
    length: random(2, 7),
    data: {
      variant: 1,
      isPlayer: false,
    },
    offset: 0,
  });

  insertVerticalY({
    start: random(1, 6),
    length: random(2, 5),
    data: {
      variant: 1,
      isPlayer: false,
    },
    offset: random(2, 5),
  });

  insertVerticalY({
    start: random(6, 9),
    length: random(2, 5),
    data: {
      variant: 1,
      isPlayer: false,
    },
    offset: random(2, 5),
  });

  //position player
  worldMap[Math.round(settings.mapSize / 2)][0] = {
    variant: 0,
    isPlayer: true,
  };

  //position monsters
  let positionedCount = 0;

  for (let i = 0; i < 300; i++) {
    if (positionedCount < 4) {
      let x = random(0, 9);
      let y = random(0, 9);
      if (
        worldMap[x][y].variant === 0 &&
        //@ts-ignore
        worldMap[x][y].monsters === undefined
      ) {
        //@ts-ignore
        worldMap[x][y].monsters = generateMobsArray(difficulty);
        positionedCount++;
      }
    }
  }

  return worldMap;
};

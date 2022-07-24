interface IHpLeft {
  maxHealth: number;
  fightLogIndex: number;
  attacks: number[];
}
export const hpLeft = ({ maxHealth, fightLogIndex, attacks }: IHpLeft) => {
  let sum = maxHealth;
  for (let i = 0; i < fightLogIndex; i++) {
    sum -= attacks[i];
  }
  return (sum / maxHealth) * 100;
};

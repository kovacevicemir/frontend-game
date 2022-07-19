export function between(x: number, min: number, max: number) {
    return x >= min && x <= max;
  }
  
  export function random(min: number, max: number) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
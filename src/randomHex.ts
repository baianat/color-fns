import { HexColor } from './types';
import { decNumToHex, getRandomInt } from './utils';

export function randomHex(): HexColor {
  const randHex = () => {
    return decNumToHex(getRandomInt(0, 255));
  };

  return {
    blue: randHex(),
    green: randHex(),
    red: randHex()
  };
}

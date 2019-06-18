import { IHexColor } from './types';
import { decNumToHex, getRandomInt } from './utils';

export function randomHex (): IHexColor {
  const randHex = () => {
    return decNumToHex(getRandomInt(0, 255));
  };

  return {
    blue: randHex(),
    green: randHex(),
    red: randHex()
  };
}

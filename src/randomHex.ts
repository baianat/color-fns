import { HexColor } from './types/hex';
import { decNumToHex, getRandomInt } from './utils';

export function randomHex (): HexColor {
  const randHex = () => {
    return decNumToHex(getRandomInt(0, 255));
  };

  return new HexColor({
    blue: randHex(),
    green: randHex(),
    red: randHex()
  });
}

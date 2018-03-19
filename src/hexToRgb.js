import parseHex from './parseHex';
import hexNumToDec from './hexNumToDec';

export default function hexToRgb (hex) {
  const match = parseHex(hex);
  if (!match) {
    return null;
  }

  const [, r, g, b] = match;

  return {
    red: hexNumToDec(r),
    green: hexNumToDec(g),
    blue: hexNumToDec(b)
  };
}

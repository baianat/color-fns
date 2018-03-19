import decNumToHex from './decNumToHex';
import parseRgb from './parseRgb';

export default function rgbToHex (rgb) {
  const match = parseRgb(rgb);
  if (!match) return;

  const [, red, green, blue] = match;
  const [rr, gg, bb] = [decNumToHex(red), decNumToHex(green), decNumToHex(blue)];

  return {
    hex: `#${rr}${gg}${bb}`,
    red: rr,
    green: gg,
    blue: bb
  };
}

import decNumToHex from './decNumToHex';
import getRgbValues from './getRgbValues';

export default function rgbToHex (rgb, details) {
  const match = getRgbValues(rgb);
  if (!match) return;

  const [, red, green, blue] = match;
  const [rr, gg, bb] = [decNumToHex(red), decNumToHex(green), decNumToHex(blue)];
  const hex = `#${rr}${gg}${bb}`;

  if (details) {
    return [hex, rr, gg, bb];
  }
  return hex;
}

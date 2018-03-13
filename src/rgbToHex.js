import decNumbToHex from './decNumbToHex';

export default function rgbToHex(rgb, details) {
  const match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (!match || match.length !== 4) {
    console.warn(`"${rgb}" is not valid rgb color`);
    return;
  }
  const [, red, green, blue] = match;
  const [rr, gg, bb] = [decNumbToHex(red), decNumbToHex(green), decNumbToHex(blue)]
  const hex = `#${rr}${gg}${bb}`;

  if (details) {
    return [hex, rr, gg, bb];
  }
  return hex
}

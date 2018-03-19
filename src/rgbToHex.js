import decNumToHex from './decNumToHex';
import parseRgb from './parseRgb';

export default function rgbToHex (color) {
  const rgb = parseRgb(color);
  if (!rgb) return;

  const [rr, gg, bb] = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue)];

  return {
    hex: `#${rr}${gg}${bb}`,
    red: rr,
    green: gg,
    blue: bb
  };
}

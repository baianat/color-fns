import decNumToHex from './decNumToHex';
import { HexColor } from './types';

export default function rgbToHex (rgb) {
  const [rr, gg, bb] = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue)];

  return new HexColor({
    hex: `#${rr}${gg}${bb}`,
    red: rr,
    green: gg,
    blue: bb
  });
}

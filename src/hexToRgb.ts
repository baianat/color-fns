import { parseHex } from './parseHex';
import { HexColor, RgbColor } from './types';
import { hexNumToDec } from './utils';

export function hexToRgb (hex: HexColor | string | null) {
  if (!hex) {
    return new RgbColor(null);
  }

  if (typeof hex === 'string') {
    hex = parseHex(hex);
  }

  return new RgbColor({
    alpha: hex.alpha === undefined ? 1 : Number((hexNumToDec(hex.alpha) / 255).toFixed(2)),
    blue: hexNumToDec(hex.blue),
    green: hexNumToDec(hex.green),
    red: hexNumToDec(hex.red)
  });
}

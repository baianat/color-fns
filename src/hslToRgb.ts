import { parseHsl } from './parseHsl';
import { IHslColor, IRgbColor } from './types';
import { normalizeDecNum } from './utils';

export function hslToRgb (hsl: IHslColor | string | null): IRgbColor | null {
  const value = typeof hsl === 'string' ? parseHsl(hsl) : hsl;
  if (!value) {
    return null;
  };

  const [hue, sat, lgh, alpha] = [value.hue / 360, value.sat / 100, value.lum / 100, value.alpha];
  let [red, green, blue] = [0, 0, 0];

  if (sat === 0) {
    red = green = blue = normalizeDecNum(lgh * 255);
  }

  if (sat !== 0) {
    const temp1 = lgh >= 50 ? lgh + sat - lgh * sat : lgh * (1 + sat);
    const temp2 = 2 * lgh - temp1;

    const testHue = (test: number): number => {
      if (test < 0) {
        test += 1;
      }
      if (test > 1) {
        test -= 1;
      }

      if (test < 1 / 6) {
        return temp2 + (temp1 - temp2) * 6 * test;
      }
      if (test < 1 / 2) {
        return temp1;
      }
      if (test < 2 / 3) {
        return temp2 + (temp1 - temp2) * (2 / 3 - test) * 6;
      }

      return temp2;
    };

    red = normalizeDecNum(255 * testHue(hue + 1 / 3));
    green = normalizeDecNum(255 * testHue(hue));
    blue = normalizeDecNum(255 * testHue(hue - 1 / 3));
  }

  return {
    alpha,
    blue,
    green,
    red
  };
}

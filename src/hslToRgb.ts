import { normalizeDecNum } from './normalizeDecNum';
import { parseHsl } from './parseHsl';
import { HslColor, RgbColor } from './types';

export function hslToRgb (hsl: HslColor | string | null): RgbColor {
  if (!hsl) {
    return new RgbColor(null);
  };

  if (typeof hsl === 'string') {
    hsl = parseHsl(hsl);
  }

  const [hue, sat, lgh, alpha] = [hsl.hue / 360, hsl.sat / 100, hsl.lum / 100, hsl.alpha];
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

  return new RgbColor({
    alpha,
    blue,
    green,
    red
  });
}

import { parseHsv } from './parseHsv';
import { IHsvColor } from './types/hsv';
import { IRgbColor } from './types/rgb';
import { normalizeDecNum } from './utils';

export function hsvToRgb (hsv: IHsvColor | string | null): IRgbColor | null {
  const value = typeof hsv === 'string' ? parseHsv(hsv) : hsv;
  if (!value) {
    return null;
  };

  const [hue, sat, val, alpha] = [value.hue / 360, value.sat / 100, value.val / 100, value.alpha];
  let [red, green, blue] = [0, 0, 0];

  if (sat === 0) {
    red = green = blue = normalizeDecNum(val * 255);
  }

  if (sat !== 0) {
    const c = val * sat;
    const x = c * (1 - Math.abs((hue * 6) % 2 - 1));
    const m = val - c;

    const testHue = (test: number): [number, number, number] => {
      if (test < 1 / 6) {
        return [c, x, 0];
      }
      if (test < 1 / 3) {
        return [x, c, 0];
      }
      if (test < 1 / 2) {
        return [0, c, x];
      }
      if (test < 2 / 3) {
        return [0, x, c];
      }
      if (test < 5 / 6) {
        return [x, 0, c];
      }

      return [c, 0, x];
    };

    const [r, g, b] = testHue(hue);
    red = normalizeDecNum(255 * (r + m));
    green = normalizeDecNum(255 * (g + m));
    blue = normalizeDecNum(255 * (b + m));
  }

  return {
    alpha,
    blue,
    green,
    red
  };
}

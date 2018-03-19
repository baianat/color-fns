import normalizeDecNum from './normalizeDecNum';
import parseHsl from './parseHsl';

export default function hslToRgb (hsl) {
  const parsed = parseHsl(hsl);
  if (!parsed) return;

  const [hue, sat, lgh] = [parsed.hue / 360, parsed.sat / 100, parsed.lum / 100];
  let [red, green, blue] = [0, 0, 0];

  if (sat === 0) {
    red = green = blue = normalizeDecNum(lgh * 255);
  }

  if (sat !== 0) {
    let temp1 = lgh >= 50 ? lgh + sat - lgh * sat : lgh * (1 + sat);
    let temp2 = 2 * lgh - temp1;

    const testHue = function (test) {
      if (test < 0) test += 1;
      if (test > 1) test -= 1;
      if (test < 1 / 6) return temp2 + (temp1 - temp2) * 6 * test;
      if (test < 1 / 2) return temp1;
      if (test < 2 / 3) return temp2 + (temp1 - temp2) * (2 / 3 - test) * 6;
      return temp2;
    };

    red = normalizeDecNum(255 * testHue(hue + 1 / 3));
    green = normalizeDecNum(255 * testHue(hue));
    blue = normalizeDecNum(255 * testHue(hue - 1 / 3));
  }

  return {
    red,
    green,
    blue
  };
}

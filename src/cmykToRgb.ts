import { parseCmyk } from './parseCmyk';
import { CmykColor, RgbColor } from './types';
import { normalizeDecNum } from './utils';

export function cmykToRgb (cmyk: CmykColor | string | null) {
  if (!cmyk) {
    return new RgbColor(null);
  }

  if (typeof cmyk === 'string') {
    cmyk = parseCmyk(cmyk);
  }

  // Convert the CMYK values to the range 0-1
  const [cyan, magenta, yellow, key, alpha] = [cmyk.cyan / 100, cmyk.magenta / 100, cmyk.yellow / 100, cmyk.key / 100, cmyk.alpha];

  // Calculate the rgb values
  const red = normalizeDecNum(255 * (1 - cyan) * (1 - key));
  const green = normalizeDecNum(255 * (1 - magenta) * (1 - key));
  const blue = normalizeDecNum(255 * (1 - yellow) * (1 - key));

  return new RgbColor({
    alpha,
    blue,
    green,
    red
  });
}

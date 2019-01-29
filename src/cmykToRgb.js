import parseCmyk from './parseCmyk';
import { RgbColor } from './types';
import normalizeDecNum from './normalizeDecNum';

export default function cmykToRgb (cmyk) {
  if (!cmyk) {
    return new RgbColor();
  }

  cmyk = parseCmyk(cmyk);

  // Convert the CMYK values to the range 0-1
  const [cyan, magenta, yellow, key, alpha] = [cmyk.cyan / 100, cmyk.magenta / 100, cmyk.yellow / 100, cmyk.key / 100, cmyk.alpha];

  // Calculate the rgb values
  let red = normalizeDecNum(255 * (1 - cyan) * (1 - key));
  let green = normalizeDecNum(255 * (1 - magenta) * (1 - key));
  let blue = normalizeDecNum(255 * (1 - yellow) * (1 - key));

  return new RgbColor({
    red,
    green,
    blue,
    alpha
  });
}

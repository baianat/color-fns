import { parseRgb } from './parseRgb';
import { HslColor, RgbColor } from './types';

export function rgbToHsl (rgb: RgbColor | string | null): HslColor {
  if (!rgb) {
    return new HslColor(null);
  }

  if (typeof rgb === 'string') {
    rgb = parseRgb(rgb);
  }

  // Convert the RGB values to the range 0-1
  const [red, green, blue, alpha] = [rgb.red / 255, rgb.green / 255, rgb.blue / 255, rgb.alpha];
  let [hue, sat, lum] = [0, 0, 0];

  // Find the minimum and maximum values of R, G and B.
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);

  // Calculate the lightness value
  lum = (min + max) / 2;

  // Calculate the saturation.
  if (min !== max) {
    sat = lum > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // calculate the hue
  if (red >= max && min !== max) {
    hue = 60 * ((green - blue) / (max - min));
  }
  if (green >= max && min !== max) {
    hue = 60 * (2.0 + (blue - red) / (max - min));
  }
  if (blue >= max && min !== max) {
    hue = 60 * (4.0 + (red - green) / (max - min));
  }

  // normalize values
  hue = hue < 0 ? Math.floor(hue + 360) : Math.floor(hue);
  sat = Math.floor(sat * 100);
  lum = Math.floor(lum * 100);

  return new HslColor({
    alpha,
    hue,
    lum,
    sat
  });
}

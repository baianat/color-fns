import { parseRgb } from './parseRgb';
import { IHsvColor } from './types/hsv';
import { IRgbColor } from './types/rgb';

export function rgbToHsv (rgb: IRgbColor | string | null): IHsvColor | null {
  const value = typeof rgb === 'string' ? parseRgb(rgb) : rgb;
  if (!value) {
    return null;
  }

  // Convert the RGB values to the range 0-1
  const [red, green, blue, alpha] = [value.red / 255, value.green / 255, value.blue / 255, value.alpha];
  let [hue, sat, val] = [0, 0, 0];

  // Find the minimum and maximum values of R, G and B.
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);

  // Calculate the saturation.
  if (max !== 0) {
    sat = (max - min) / max;
  }

  // calculate the value
  val = max;

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
  val = Math.floor(val * 100);

  return {
    alpha: alpha || 1,
    hue,
    sat,
    val
  };
}

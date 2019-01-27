import parseRgb from './parseRgb';
import { HsvColor } from './types';

export default function rgb2Hsv (rgb) {
  if (!rgb) {
    return new HsvColor();
  }

  rgb = parseRgb(rgb);

  // Convert the RGB values to the range 0-1
  const [red, green, blue, alpha] = [rgb.red / 255, rgb.green / 255, rgb.blue / 255, rgb.alpha];
  let [hue, sat, val] = [0, 0, 0];

  // Find the minimum and maximum values of R, G and B.
  let min = Math.min(red, green, blue);
  let max = Math.max(red, green, blue);

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

  return new HsvColor({
    hue,
    sat,
    val,
    alpha
  });
}

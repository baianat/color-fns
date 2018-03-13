export default function rgb2Hsl(rgb, details) {
  let [, red, green, blue] = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!red || !green || !blue) return;
  // Convert the RGB values to the range 0-1
  [red, green, blue] = [red / 255, green / 255, blue / 255];
  let Hue = 0;
  let Sat = 0;
  let Lgh = 0;

  // Find the minimum and maximum values of R, G and B.
  let min = Math.min(red, green, blue);
  let max = Math.max(red, green, blue);

  // Calculate the lightness value
  Lgh = (min + max) / 2;

  // Calculate the Saturation.
  if (min !== max) {
    Sat = Lgh > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // calculate the Hue
  if (red >= max && min !== max) {
    Hue = 60 * ((green - blue) / (max - min));
  }
  if (green >= max && min !== max) {
    Hue = 60 * (2.0 + (blue - red) / (max - min));
  }
  if (blue >= max && min !== max) {
    Hue = 60 * (4.0 + (red - green) / (max - min));
  }

  // normalize values
  Hue = Hue < 0 ? Math.floor(Hue + 360) : Math.floor(Hue);
  Sat = Math.floor(Sat * 100);
  Lgh = Math.floor(Lgh * 100);

  if (details) {
    return [`hsl(${Hue}, ${Sat}%, ${Lgh}%)`, Hue, Sat, Lgh];
  }
  return `hsl(${Hue}, ${Sat}%, ${Lgh}%)`;
}

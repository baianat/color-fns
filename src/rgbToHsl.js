export default function rgb2Hsl(rgb, details) {
  let match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (!match || match.length !== 4) {
    console.warn(`"${rgb}" is not valid rgb color`);
    return;
  }
  // Convert the RGB values to the range 0-1
  const [, red, green, blue] = match.map(val => val / 255);
  let [hue, sat, lum] = [0, 0, 0];

  // Find the minimum and maximum values of R, G and B.
  let min = Math.min(red, green, blue);
  let max = Math.max(red, green, blue);

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

  if (details) {
    return [`hsl(${hue}, ${sat}%, ${lum}%)`, hue, sat, lum];
  }
  return `hsl(${hue}, ${sat}%, ${lum}%)`;
}

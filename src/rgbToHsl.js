export default function rgb2Hsl(rgb, output) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  if (!rgb || rgb.length !== 4) return;

  // Convert the RGB values to the range 0-1
  let red = rgb[1] / 255;
  let green = rgb[2] / 255;
  let blue = rgb[3] / 255;
  let Hue = 0;
  let Sat = 0;
  let Lum = 0;

  // Find the minimum and maximum values of R, G and B.
  let min = Math.min(red, green, blue);
  let max = Math.max(red, green, blue);

  // Calculate the Luminance value
  Lum = (min + max) / 2;

  // Calculate the Saturation.
  if (min !== max) {
    Sat = Lum > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
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
  Hue = Hue < 0 ? parseInt(Hue + 360) : parseInt(Hue);
  Sat = parseInt(Sat * 100);
  Lum = parseInt(Lum * 100);

  if (output === 'details') {
    return [`hsl(${Hue}, ${Sat}%, ${Lum}%)`, Hue, Sat, Lum];
  }
  return `hsl(${Hue}, ${Sat}%, ${Lum}%)`;
}

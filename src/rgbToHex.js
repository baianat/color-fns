import hexNumFromDec from './hexNumFromDec';

export default function rgbToHex(rgb, output) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  const red = hexNumFromDec(rgb[1]);
  const green = hexNumFromDec(rgb[2]);
  const blue = hexNumFromDec(rgb[3]);
  const hex = (rgb && rgb.length === 4) ? `#${red}${green}${blue}` : '';

  if (output === 'details') {
    return [hex, red, green, blue];
  }
  return hex
}

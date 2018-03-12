import decNumbToHex from './decNumbToHex';

export default function rgbToHex(rgb, output) {
  rgb = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*/i);
  const red = decNumbToHex(rgb[1]);
  const green = decNumbToHex(rgb[2]);
  const blue = decNumbToHex(rgb[3]);
  const hex = (rgb && rgb.length === 4) ? `#${red}${green}${blue}` : '';

  if (output === 'details') {
    return [hex, red, green, blue];
  }
  return hex
}

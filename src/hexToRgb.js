import expandHexShorthand from './expandHexShorthand';
import hexNumToDec from './hexNumToDec';

export default function hexToRgb(hex, output) {
  hex = expandHexShorthand(hex);
  hex = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  const red = hexNumToDec(hex[1]);
  const green = hexNumToDec(hex[2]);
  const blue = hexNumToDec(hex[3]);
  let rgb = (hex && hex.length === 4) ? `rgb(${red}, ${green}, ${blue})` : '';

  if (output === 'details') {
    return [rgb, red, green, blue];
  }

  return rgb;
}

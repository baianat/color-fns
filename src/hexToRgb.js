import expandHexShorthand from './expandHexShorthand';
import decNumFromHex from './decNumFromHex';

export default function hexToRgb(hex, output) {
  hex = expandHexShorthand(hex);
  hex = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  const red = decNumFromHex(hex[1]);
  const green = decNumFromHex(hex[2]);
  const blue = decNumFromHex(hex[3]);
  let rgb = (hex && hex.length === 4) ? `rgb(${red}, ${green}, ${blue})` : '';

  if (output === 'details') {
    return [rgb, red, green, blue];
  }

  return rgb;
}

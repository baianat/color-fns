import expandHexShorthand from './expandHexShorthand';
import hexNumToDec from './hexNumToDec';

export default function hexToRgb(hex, details) {
  hex = expandHexShorthand(hex);
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match || match.length !== 4) {
    console.warn(`"${hex}" is not valid hex color`);
    return;
  }
  const [, rr, gg, bb] = match;
  const [red, green, blue] = [hexNumToDec(rr), hexNumToDec(gg), hexNumToDec(bb)]
  const rgb = (hex && hex.length === 4) ? `rgb(${red}, ${green}, ${blue})` : '';

  if (details) {
    return [rgb, red, green, blue];
  }
  return rgb;
}

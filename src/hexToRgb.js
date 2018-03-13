import getHexValues from './getHexValues';
import hexNumToDec from './hexNumToDec';

export default function hexToRgb(hex, details) {
  const match = getHexValues(hex);
  if (!match) return;

  const [, rr, gg, bb] = match;
  const [red, green, blue] = [hexNumToDec(rr), hexNumToDec(gg), hexNumToDec(bb)]
  const rgb = (hex && hex.length === 4) ? `rgb(${red}, ${green}, ${blue})` : '';

  if (details) {
    return [rgb, red, green, blue];
  }
  return rgb;
}

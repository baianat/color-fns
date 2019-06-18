import { hexToRgb } from "./hexToRgb";
import { IColorNameLookup, IHexColor, IRgbColor } from "./types";

function dictionaryToArrayObj (obj: IColorNameLookup) {
  const keys = Object.keys(obj);
  const length = keys.length;
  const arr: Array<{ name: string, value: IRgbColor }> = [];
  for (let i = 0; i < length; i++) {
    const rgb = hexToRgb(obj[keys[i]]);
    if (!rgb) {
      continue;
    }

    arr.push({
      name: keys[i],
      value: rgb
    });
  }

  return arr;
}

/**
 * Finds the nearest name for a given color in a color dictionary.
 * The results are compensated for human color perception.
 * https://en.wikipedia.org/wiki/Color_difference
 *
 */
export function hexToName (hex: IHexColor | string, colors: IColorNameLookup): string | null {
  const queriedColor = hexToRgb(hex);
  if (!queriedColor) {
    return null;
  }

  let minDistance = Infinity;
  let nearestColor!: string;
  const colorsArr = dictionaryToArrayObj(colors);
  const length = colorsArr.length;

  for (let i = 0; i < length; i++) {
    const rgb = colorsArr[i].value;
    const distance = 2 * (rgb.red - queriedColor.red) ** 2 + 4 * (rgb.green - queriedColor.green) ** 2 + 3 * (rgb.blue - queriedColor.blue) ** 2;

    if (distance < minDistance) {
      nearestColor = colorsArr[i].name;
      minDistance = distance;
    }
  }

  return nearestColor;
};


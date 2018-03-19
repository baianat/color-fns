import decNumToHex from './decNumToHex';

export default function rgbToHex (rgb) {
  const [rr, gg, bb] = [decNumToHex(rgb.red), decNumToHex(rgb.green), decNumToHex(rgb.blue)];

  return {
    hex: `#${rr}${gg}${bb}`,
    red: rr,
    green: gg,
    blue: bb
  };
}

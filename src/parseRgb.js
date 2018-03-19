export default function parseRgb (rgb) {
  const match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn(`"${rgb}" is not valid rgb color`);

  return null;
}

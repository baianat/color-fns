export default function parseRgb (rgb) {
  const match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (!match || match.length < 4) {
    console.warn(`"${rgb}" is not valid rgb color`);

    return null;
  }

  return {
    red: match[1],
    green: match[2],
    blue: match[3]
  };
}

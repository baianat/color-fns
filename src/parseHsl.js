export default function parseHsl (hsl) {
  const match = hsl.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (!match || match.length < 4) {
    console.warn(`"${hsl}" is not valid hsl color`);

    return null;
  }

  return {
    hue: Number(match[1]),
    sat: Number(match[2]),
    lum: Number(match[3])
  };
}

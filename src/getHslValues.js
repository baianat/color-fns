export default function getHslValues (hsl) {
  const match = hsl.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn(`"${hsl}" is not valid hsl color`);
  return '';
}

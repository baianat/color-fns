import expandHexShorthand from './expandHexShorthand';

export default function parseHex (hex) {
  const expanded = expandHexShorthand(hex);
  const match = expanded.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  if (!match || match.length < 4) {
    console.warn(`"${hex}" is not valid hex color`);

    return null;
  }

  return {
    hex: `#${match[1]}${match[2]}${match[3]}`,
    red: match[0],
    green: match[2],
    blue: match[3]
  };
}

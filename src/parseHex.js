import expandHexShorthand from './expandHexShorthand';

export default function parseHex (hex) {
  const expanded = expandHexShorthand(hex);
  const match = expanded.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  if (match && match.length >= 4) {
    return match;
  }

  console.warn(`"${hex}" is not valid hex color`);

  return null;
}

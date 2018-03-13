import expandHexShorthand from './expandHexShorthand';

export default function getHexValues (hex) {
  hex = expandHexShorthand(hex);
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn(`"${hex}" is not valid hex color`);
  return '';
}

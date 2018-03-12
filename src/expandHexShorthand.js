export default function expandHexShorthand (hex) {
  if (hex.length === 4) {
    hex = hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
      return `#${r}${r}${g}${g}${b}${b}`;
    });
  }
  return hex;
}

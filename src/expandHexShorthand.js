export default function expandHexShorthand (hex) {
  const regex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
  if (hex.length === 4 && regex.test(hex)) {
    hex = hex.replace(regex, (m, r, g, b) => {
      return `#${r}${r}${g}${g}${b}${b}`;
    });
  }

  return hex;
}

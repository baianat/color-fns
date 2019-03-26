export function expandHexShorthand (hex: string): string {
  const regex = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])*$/i;
  if ((hex.length === 5 || hex.length === 4) && regex.test(hex)) {
    hex = hex.replace(regex, (m, r, g, b, a) => {
      return `#${r}${r}${g}${g}${b}${b}${a ? `${a}${a}` : ''}`;
    });
  }

  return hex;
}

export function isHexShorthand (hex: string): boolean {
  const regex = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])*$/i;
  if ((hex.length === 5 || hex.length === 4) && regex.test(hex)) {
    return true;
  }

  return false;
}

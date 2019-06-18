import { relativeLuminance } from "./relativeLuminance";
import { IRgbColor } from "./types";

export function isDark(value: IRgbColor): boolean {
  const L = relativeLuminance(value);

  return L < 0.179;
};

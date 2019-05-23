import { relativeLuminance } from "./relativeLuminance";
import { IRgbColor } from "./types/rgb";


export function isDark(value: IRgbColor): boolean {
  const L = relativeLuminance(value);

  return L < 0.179;
};

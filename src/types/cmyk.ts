import { isBetween, isValidAlpha } from '../utils';

export interface ICmykColor {
  alpha?: number;
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

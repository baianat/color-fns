import { isBetween, isValidAlpha } from '../utils';
import { Color } from './base';

export class HsvColor extends Color {
  public hue: number;
  public val: number;
  public sat: number;
  public alpha: number;

  constructor (value: { hue: number, val: number, sat: number, alpha?: number } | null) {
    super(value);
    this.model = 'hsv';
    if (!value || !this.validate(value)) {
      this.hue = 0;
      this.val = 0;
      this.sat = 0;
      this.alpha = 1;
      this.invalid = true;
      return;
    }

    this.hue = value.hue;
    this.val = value.val;
    this.sat = value.sat;
    this.model = 'hsv';
    this.alpha = value.alpha !== undefined && isValidAlpha(value.alpha) ? value.alpha : 1;
  }

  public validate (value: any): boolean {
    if (!value) {
      return false;
    }

    const isPercentage = isBetween(0, 100);

    return isBetween(0, 360)(value.hue) && isPercentage(value.val) && isPercentage(value.sat);
  }

  public toString (): string {
    if (this.invalid) {
      return 'Invalid Color';
    }

    if (isBetween(0, 0.999)(this.alpha)) {
      return `hsva(${this.hue},${this.sat}%,${this.val}%,${this.alpha})`;
    }

    return `hsv(${this.hue},${this.sat}%,${this.val}%)`;
  }
}
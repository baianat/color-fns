import { isBetween, isValidAlpha } from '../utils';
import { Color } from './base';

export class HslColor extends Color {
  public hue: number;
  public lum: number;
  public sat: number;
  public alpha: number;

  constructor (value: { hue: number, lum: number, sat: number, alpha?: number } | null) {
    super(value);
    this.model = 'hsl';
    if (!value || !this.validate(value)) {
      this.hue = 0;
      this.lum = 0;
      this.sat = 0;
      this.alpha = 1;
      this.invalid = true;
      return;
    }

    this.hue = value.hue;
    this.lum = value.lum;
    this.sat = value.sat;
    this.alpha = value.alpha !== undefined && isValidAlpha(value.alpha) ? value.alpha : 1;
  }

  public validate(value: any): boolean {
    if (!value) {
      return false;
    }

    const isPercentage = isBetween(0, 100);

    return isBetween(0, 360)(value.hue) && isPercentage(value.lum) && isPercentage(value.sat);
  }

  public toString (): string {
    if (this.invalid) {
      return 'Invalid Color';
    }

    if (isBetween(0, 0.999)(this.alpha)) {
      return `hsla(${this.hue},${this.sat}%,${this.lum}%,${this.alpha})`;
    }
    return `hsl(${this.hue},${this.sat}%,${this.lum}%)`;
  }
}

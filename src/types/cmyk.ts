import { isBetween, isValidAlpha } from '../utils';
import { Color } from './base';

export class CmykColor extends Color {
  public alpha: number;
  public cyan: number;
  public magenta: number;
  public yellow: number;
  public key: number;

  constructor (value: { cyan: number, magenta: number, yellow: number, key: number, alpha?: number } | null) {
    super(value);
    this.model = 'cmyk';
    if (!value || !this.validate(value)) {
      this.invalid = true;
      this.cyan = 0;
      this.magenta = 0;
      this.yellow = 0;
      this.key = 0;
      this.alpha = 1;
      return;
    }

    this.cyan = value.cyan;
    this.magenta = value.magenta;
    this.yellow = value.yellow;
    this.key = value.key;
    this.alpha = value.alpha !== undefined && isValidAlpha(value.alpha) ? value.alpha : 1;
  }

  public validate (value: any): boolean {
    if (!value) {
      return false;
    }

    const isPercentage = isBetween(0, 100);

    return isPercentage(value.cyan) && isPercentage(value.magenta) && isPercentage(value.yellow) && isPercentage(value.key);
  }

  public toString (): string {
    if (this.invalid) {
      return 'Invalid Color';
    }

    if (isBetween(0, 0.999)(this.alpha)) {
      return `cmyka(${this.cyan},${this.magenta},${this.yellow},${this.key},${this.alpha})`;
    }

    return `cmyk(${this.cyan},${this.magenta},${this.yellow},${this.key})`;
  }
}

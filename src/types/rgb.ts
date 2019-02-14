import { isBetween, isValidAlpha } from '../utils';
import { Color } from './base';

export class RgbColor extends Color {
  public alpha: number;
  public red: number;
  public green: number;
  public blue: number;

  constructor (value: { red: number, green: number, blue: number, alpha?: number } | null) {
    super(value);
    this.model = 'rgb';
    if (!this.validate(value)) {
      this.invalid = true;
      this.red = 0;
      this.green = 0;
      this.blue = 0;
      this.alpha = 1;
      return;
    }

    this.red = value.red;
    this.green = value.green;
    this.blue = value.blue;
    this.alpha = isValidAlpha(value.alpha) ? value.alpha : 1;
  }

  public validate (value: any): boolean {
    if (!value) {
      return false;
    }

    const isInRange = isBetween(0, 255);

    const { red, green, blue } = value;

    return isInRange(red) && isInRange(green) && isInRange(blue);
  }

  public toString (): string {
    if (this.invalid) {
      return 'Invalid Color';
    }

    if (isBetween(0, 0.999)(this.alpha)) {
      return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }

    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}

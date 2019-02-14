import { hexNumToDec, isBetween } from '../utils';
import { Color } from './base';

export class HexColor extends Color {
  public alpha: string;
  public red: string;
  public green: string;
  public blue: string;

  constructor (value: { red: string, green: string, blue: string, alpha?: string } | null) {
    super(value);
    this.model = 'hex';
    if (!value || !this.validate(value)) {
      this.invalid = true;
      this.red = '00';
      this.green = '00';
      this.blue = '00';
      this.alpha = 'ff';
      return;
    }

    this.red = value.red;
    this.green = value.green;
    this.blue = value.blue;
    this.alpha = value.alpha !== undefined ? value.alpha : 'ff';
  }

  public validate (value: any): boolean {
    if (!value) {
      return false;
    }

    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`#${value.red}${value.green}${value.blue}`);
  }

  public toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    if (isBetween(0, 0.999)(hexNumToDec(this.alpha) / 255)) {
      return `#${this.red}${this.green}${this.blue}${this.alpha}`;
    }

    return `#${this.red}${this.green}${this.blue}`;
  }
};

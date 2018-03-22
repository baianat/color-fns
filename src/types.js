import { isBetween } from './utils';

export class Color {
  constructor (components) {
    this.invalid = !this.validate(components);
    if (!this.invalid) {
      Object.keys(components).forEach(c => {
        this[c] = components[c];
      });
    }
  }

  validate (components) {
    return !!components && typeof components === 'object';
  }
}

export class RgbColor extends Color {
  validate (components) {
    if (!super.validate(components)) {
      return false;
    }

    const isInRange = isBetween(0, 255);

    return isInRange(components.red) && isInRange(components.green) && isInRange(components.blue);
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}

export class HslColor extends Color {
  validate (components) {
    if (!super.validate(components)) {
      return false;
    }

    const isPercentage = isBetween(0, 100);

    return isBetween(0, 360)(components.hue) && isPercentage(components.lum) && isPercentage(components.sat);
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `hsl(${this.hue},${this.sat}%,${this.lum}%)`;
  }
}

export class HexColor extends Color {
  validate (components) {
    if (!super.validate(components)) {
      return false;
    }

    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(`#${components.red}${components.green}${components.blue}`);
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `#${this.red}${this.green}${this.blue}`;
  }
};

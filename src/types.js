import hexNumToDec from './hexNumToDec';
import { isBetween, isValidAlpha } from './utils';

export class Color {
  constructor (components) {
    this.invalid = !this.validate(components);
    if (!this.invalid) {
      Object.keys(components).forEach(c => {
        this[c] = components[c];
      });
    }
    this.init();
  }

  init () {}

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

  init () {
    this.model = 'rgb';
    this.alpha = isValidAlpha(this.alpha) ? this.alpha : 1;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }
    if (isBetween(0, 0.999)(this.alpha)) {
      return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
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

  init () {
    this.model = 'hsl';
    this.alpha = isValidAlpha(this.alpha) ? this.alpha : 1;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }
    if (isBetween(0, 0.999)(this.alpha)) {
      return `hsla(${this.hue},${this.sat}%,${this.lum}%,${this.alpha})`;
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

  init () {
    this.model = 'hex';
    this.alpha = this.alpha !== undefined ? this.alpha : 'ff';
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }
    if (isBetween(0, 0.999)(hexNumToDec(this.alpha) / 255)) {
      return `#${this.red}${this.green}${this.blue}${this.alpha}`;
    }
    return `#${this.red}${this.green}${this.blue}`;
  }
};

export class HsvColor extends Color {
  validate (components) {
    if (!super.validate(components)) {
      return false;
    }

    const isPercentage = isBetween(0, 100);

    return isBetween(0, 360)(components.hue) && isPercentage(components.val) && isPercentage(components.sat);
  }

  init () {
    this.model = 'hsv';
    this.alpha = isValidAlpha(this.alpha) ? this.alpha : 1;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }
    if (isBetween(0, 0.999)(this.alpha)) {
      return `hsva(${this.hue},${this.sat}%,${this.val}%,${this.alpha})`;
    }
    return `hsv(${this.hue},${this.sat}%,${this.val}%)`;
  }
}

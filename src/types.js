export class RgbColor {
  constructor (components) {
    if (!components) {
      this.invalid = true;
      return;
    }

    this.red = components.red;
    this.green = components.green;
    this.blue = components.blue;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}

export class HslColor {
  constructor (components) {
    if (!components) {
      this.invalid = true;
      return;
    }

    this.hue = components.hue;
    this.sat = components.sat;
    this.lum = components.lum;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `hsl(${this.hue},${this.sat}%,${this.lum}%)`;
  }
}

export class HexColor {
  constructor (components) {
    if (!components) {
      this.invalid = true;
      return;
    }

    this.red = components.red;
    this.green = components.green;
    this.blue = components.blue;
  }

  toString () {
    if (this.invalid) {
      return 'Invalid Color';
    }

    return `#${this.red}${this.green}${this.blue}`;
  }
};

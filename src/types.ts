export interface ICmykColor {
  alpha?: number;
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

export interface IHexColor {
  alpha?: string;
  red: string;
  green: string;
  blue: string;
}

export interface IHslColor {
  hue: number;
  lum: number;
  sat: number;
  alpha?: number;
}

export interface IHsvColor {
  hue: number;
  val: number;
  sat: number;
  alpha?: number;
}

export interface IRgbColor {
  alpha?: number;
  red: number;
  green: number;
  blue: number;
}

export interface IColorNameLookup {
  [k: string]: string
}

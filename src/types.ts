export interface CmykColor {
  alpha?: number;
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

export interface HexColor {
  alpha?: string;
  red: string;
  green: string;
  blue: string;
}

export interface HslColor {
  hue: number;
  lum: number;
  sat: number;
  alpha?: number;
}

export interface HsvColor {
  hue: number;
  val: number;
  sat: number;
  alpha?: number;
}

export interface RgbColor {
  alpha?: number;
  red: number;
  green: number;
  blue: number;
}

export interface ColorNameLookup {
  [k: string]: string;
}

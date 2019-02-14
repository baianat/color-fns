import { Color } from './base';
export declare class HslColor extends Color {
    hue: number;
    lum: number;
    sat: number;
    alpha: number;
    constructor(value: {
        hue: number;
        lum: number;
        sat: number;
        alpha?: number;
    } | null);
    validate(value: any): boolean;
    toString(): string;
}

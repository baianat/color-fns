import { Color } from './base';
export declare class RgbColor extends Color {
    alpha: number;
    red: number;
    green: number;
    blue: number;
    constructor(value: {
        red: number;
        green: number;
        blue: number;
        alpha?: number;
    } | null);
    validate(value: any): boolean;
    toString(): string;
}

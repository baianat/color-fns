import { Color } from './base';
export declare class HsvColor extends Color {
    hue: number;
    val: number;
    sat: number;
    alpha: number;
    constructor(value: {
        hue: number;
        val: number;
        sat: number;
        alpha?: number;
    } | null);
    validate(value: any): boolean;
    toString(): string;
}

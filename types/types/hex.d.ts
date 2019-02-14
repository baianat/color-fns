import { Color } from './base';
export declare class HexColor extends Color {
    alpha: string;
    red: string;
    green: string;
    blue: string;
    constructor(value: {
        red: string;
        green: string;
        blue: string;
        alpha?: string;
    } | null);
    validate(value: any): boolean;
    toString(): string;
}

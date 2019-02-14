import { Color } from './base';
export declare class CmykColor extends Color {
    alpha: number;
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
    constructor(value: {
        cyan: number;
        magenta: number;
        yellow: number;
        key: number;
        alpha?: number;
    } | null);
    validate(value: any): boolean;
    toString(): string;
}

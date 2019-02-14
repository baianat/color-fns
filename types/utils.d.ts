export declare function getCartesianCoords(r: number, theta: number): {
    x: number;
    y: number;
};
export declare function isBetween(lb: number, ub: number): (val: number) => boolean;
export declare function getRandomInt(min: number, max: number): number;
export declare function mixValue(val1: number, val2: number, ratio?: number): number;
export declare function isValidAlpha(alpha: any): boolean;
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
 */
export declare function truncateNum(num: number): number;

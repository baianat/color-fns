export function getCartesianCoords (r: number, theta: number): { x: number, y: number } {
  return {
    x: r * Math.cos(theta * Math.PI * 2),
    y: r * Math.sin(theta * Math.PI * 2)
  };
}

export function isBetween (lb: number, ub: number): (val: number) => boolean {
  return (value) => {
    return value >= lb && value <= ub;
  };
};

export function getRandomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function mixValue (val1: number, val2: number, ratio: number = 0.5): number {
  return Number((val1 * (1 - ratio) + val2 * ratio).toFixed(2));
}

export function isValidAlpha (alpha: any): boolean {
  if (typeof alpha === 'number' && alpha >= 0 && alpha <= 1) {
    return true;
  }

  return false;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
 */
export function truncateNum (num: number): number {
  num = +num;
  if (!isFinite(num)) {
    return num;
  }

  return (num - num % 1) || (num < 0 ? -0 : num === 0 ? num : 0);
}

export function decNumToHex (decNum: number): string {
  decNum = Math.floor(decNum);
  if (isNaN(decNum)) {
    return '00';
  }

  return ('0' + decNum.toString(16)).slice(-2);
}

export function hexNumToDec (hexNum: string): number {
  if (isNaN(parseInt(hexNum, 16))) {
    return 0;
  }

  return parseInt(hexNum, 16);
}

export function normalizeDecNum (value: number) {
  return Math.min(
    Math.max(truncateNum(value), 0), 255
  );
}

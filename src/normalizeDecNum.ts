import { truncateNum } from './utils';

export function normalizeDecNum (value: number) {
  return Math.min(
    Math.max(truncateNum(value), 0), 255
  );
}
